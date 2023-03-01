import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Items = ({ handleAddItem, cartItems }) => {
  
  // Getting the Data from the API
  
  const [apiData, setApiData] = useState([]);

  const fetchItems = useCallback(async () => {
    const getData = await axios.get("../../src/server/dbTeste.json");
    setApiData(getData.data.produtos);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // Calculating the quantity of the items

  const sumQuantity = (cartItems) => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const totalQuantity = sumQuantity(cartItems);

  return (
    <main className="items">
      <h1>Produtos</h1>
      <div className="items__container">
        {apiData?.map((data) => {
          return (
            <div key={data.id}>
              <h3>{data.nome}</h3>
              <img src={data.foto} alt="item-photo" />
              <h4>R${data.preco}</h4>
              <p>{data.descricao}</p>

              <button onClick={() => handleAddItem(data)}>
                Adicionar
              </button>
            </div>
          );
        })}
      </div>
      <div className="items__cart">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping" />
          <p>{totalQuantity}</p>
        </Link>
      </div>

      <Link to="/cart">
        <button className="items__button" type="button">Carrinho</button>
      </Link>
    </main>
  );
};

export default Items;
