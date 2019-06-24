import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./styles.css";
import NavLink from "react-bootstrap/NavLink";

class HeaderMenu extends Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <header className="header">
        <Nav
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <NavLink href="/">Global</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink href="/employees">Employees</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink href="/products">Products</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink href="/timing">Timing</NavLink>
          </Nav.Item>
        </Nav>
      </header>
    );
  }
}

export default HeaderMenu;
