import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./styles.css";
import NavLink from "react-bootstrap/NavLink";

class Footer extends Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <footer className="sticky-footer">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Jibs - Helpdesk © 2019</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
