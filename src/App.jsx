// Imports
import { useState } from "react";
import "../src/styles/main.css";
import Cart from "./components/Cart/Cart";
import Completed from "./components/Completed/Completed";
import Items from "./components/items/Items";
import Receipt from "./components/Receipt/Receipt";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {

  // Items Cart Data

  const [cartItems, setCartItems] = useState([]);

  // Adding and Removing items

  const handleAddItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  // Clear the items

  const removeAllItems = () => {
    setCartItems([]);
  };

  // Calculate the total price

  const sumPrices = (cartItems) => {
    return cartItems.reduce((acc, curr) => acc + curr.preco * curr.quantity, 0);
  };

  const total = sumPrices(cartItems);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Items cartItems={cartItems} handleAddItem={handleAddItem} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeAllItems={removeAllItems}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                total={total}
              />
            }
          />
          <Route
            path="/receipt"
            element={<Receipt cartItems={cartItems} total={total} />}
          />
          <Route
            path="/completed"
            element={<Completed removeAllItems={removeAllItems} />}
          />
          <Route path="*" exact element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
