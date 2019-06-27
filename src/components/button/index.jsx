import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";
import "./styles.css";
import NavLink from "react-bootstrap/NavLink";

import "./styles.css";

export default props => {
  return (
    <Menu>
      <div className="titulomenu">Menu Jibs</div>
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <NavLink href="/">> Global</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href="/employees">> Employees</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href="/products">> Products</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink href="/timing">> Timing</NavLink>
        </Nav.Item>
      </Nav>
    </Menu>
  );
};
