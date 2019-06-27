import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import Card from "../../components/cards/CardUI";
import {
  CardColumns,
  Dropdown,
  ButtonToolbar,
  Button,
  Col
} from "react-bootstrap";
import DataPicker from "../../components/datapicker";

class Employees extends Component {
  render() {
    return (
      <section id="global-indicators">
        <article key="ok" className="main">
          <div>
            <p className="intro">Employees</p>

            <div className="cards-main">
              <CardColumns>
                <Card styles={{ card: { backgroundColor: `red` } }} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardColumns>
            </div>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Empregados
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p />
            <p />
            <p />
            <p />
            <row>
              Data de Inicio
              <DataPicker />
            </row>
            <p />
            <p />
            <p />
            <p />
            <p />
            <p />
            <row>
              Data de Fim
              <DataPicker />
            </row>
            <p />
            <p />
            <ButtonToolbar>
              <Button variant="secondary" size="sm">
                Filtrar
              </Button>
            </ButtonToolbar>
          </div>
        </article>
      </section>
    );
  }
}
export default Employees;
