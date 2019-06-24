import React from "react";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="card body text-dar">
        <h4 className="card-title">Número total pedidos</h4>
        <p className="card-text text-secondary">Número total pedidos</p>
        <a href="#" className="btn btn-outline-succes">
          1.890
        </a>
      </div>
    </div>
  );
};

export default Card;
