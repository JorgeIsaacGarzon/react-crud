import React from "react";

const CrudTableRow = ({ el, setDataEdit, deleteData }) => {
  let { id, name, country } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{country}</td>
      <td>
        <button onClick={() => setDataEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};
export default CrudTableRow;
