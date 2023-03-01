import { Link } from "react-router-dom";

const Receipt = ({ cartItems, total }) => {
  return (
    <section className="receipt">
      <h1>Resumo da Compra</h1>
      <div className="receipt__container">
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="receipt__container-item">
                <h4>{item.nome}</h4>
                <p>N:{item.quantity}</p>
              </div>
            );
          })}
        </div>
        <h5>Total: R${total}</h5>
      </div>
      <Link to="/cart">
        <i className="fa-solid fa-chevron-left" />
      </Link>
      <Link to="/completed">
        <button className="receipt__button">Finalizar</button>
      </Link>
    </section>
  );
};

export default Receipt;
