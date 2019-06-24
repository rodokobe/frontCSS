import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import Card from "../../components/cards/CardUI";

import { CardColumns, Table } from "react-bootstrap";

class Main extends Component {
  state = {
    total: []
  };

  async componentDidMount() {
    const response = await api.get("/issuesStats/total/product");
    this.setState({ total: response.data });
  }

  render() {
    return (
      <section id="global-indicators">
        <article key="ok" className="main">
          <div>
            <p className="intro">Global Indicators</p>
            <div>
              <p className="intro">teste = {this.response}</p>
            </div>

            <div className="cards-main">
              <CardColumns>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardColumns>
            </div>

            <div>
              <p className="name-table">Faster Employee</p>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th colSpan="1">Position</th>
                    <th colSpan="1">Name</th>
                    <th colSpan="1">Average time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <p className="name-table">Better Evaluated Employee</p>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th colSpan="1">Position</th>
                    <th colSpan="1">Name</th>
                    <th colSpan="1">Average time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
export default Main;
