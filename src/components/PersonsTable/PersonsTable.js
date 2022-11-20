import React from "react";

import Table from "react-bootstrap/Table";

const PersonsTable = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
}) => {
  return (
    <Table striped bordered hover variant="dark" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={`headerGroup_${i}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((col, i) => (
              <th key={`col${i}`} {...col.getHeaderProps()}>
                {col.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={`row_${i}`} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return <td key={`cell_${i}`}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default PersonsTable;
