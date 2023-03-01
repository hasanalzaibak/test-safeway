import { Link } from "react-router-dom";

const Completed = ({ removeAllItems }) => {
  return (
    <div className="completed">
      <h1>Obrigado por sua compra</h1>
      <Link to="/">
        <button onClick={() => removeAllItems()}>Pagina Principal</button>
      </Link>
    </div>
  );
};

export default Completed;
