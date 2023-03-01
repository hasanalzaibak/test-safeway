import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleAddItem,
  handleRemoveItem,
  removeAllItems,
}) => {
  return (
    <section className="cart__items">
      <h1>Carrinho</h1>
      {cartItems.length === 0 && (
        <p className="cart__items-empty">Não há itens no carrinho</p>
      )}
      {cartItems.length !== 0 && (
        <section className="cart__items-list">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="cart__items-item">
                <div className="cart__items-item__photo">
                  <img src={item.foto} alt="item" />
                  <p>R${item.preco * item.quantity}</p>
                </div>
                <div className="cart__items-item__quant">
                  <div>
                    <button onClick={() => handleRemoveItem(item)}>-</button>
                    <button onClick={() => handleAddItem(item)}>+</button>
                  </div>
                  <p>Quanidade: {item.quantity}</p>
                </div>
              </div>
            );
          })}
          <div className="cart__items-buttons">
            <button onClick={() => removeAllItems()}>Remover todos</button>
          </div>
        </section>
      )}
      {cartItems.length !== 0 && (
        <Link to="/receipt">
          <button className="cart__items-button">Procede</button>
        </Link>
      )}
      <Link to="/">
        <i className="fa-solid fa-chevron-left" />
      </Link>
    </section>
  );
};

export default Cart;
