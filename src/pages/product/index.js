import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    //pega o id passado como parâmetro
    const { id } = this.props.match.params;

    //estabelece conexão com a api e faz a requisição passando o id
    const response = await api.get(`/products/${id}`);

    //preenche os dados do product dentro do state, com os dados
    //do response.data
    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
    );
  }
}
