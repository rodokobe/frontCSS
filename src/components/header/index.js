import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./styles.css";
import NavLink from "react-bootstrap/NavLink";
import logo from "../../assets/jibs-logo.png";
//

class HeaderMenu extends Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <header className="header">
        <div className="brandtitulo">
          <div className="logoimagem">
            <img src={logo} alt="Logo" />
          </div>
          <div className="marcanome">JIBS - Dashboard</div>
        </div>
      </header>
    );
  }
}

export default HeaderMenu;
