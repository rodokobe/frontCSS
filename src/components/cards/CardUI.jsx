import React, { Component } from "react";


class Card extends Component {
  render() {
  return (
    <div className="card text-center">
      <p className="card-text text-secondary">{this.props.cardName}</p>
      <p className="btn btn-outline-succes">{this.props.cardValue}</p>
      <p className="btn btn-outline-succes">{this.props.cardValue1}</p>
      <p className="btn btn-outline-succes">{this.props.cardValue2}</p>
    </div>
  );
};
}

export default Card;
