import React from "react";

const Table = props => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{this.props.name}</td>
          <td>{this.props.tempoResposta}</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Table;
