import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataEdit, deleteData }) => {
  return (
    <div>
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataEdit={setDataEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td
                style={{
                  color: "#dc3545",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                colSpan="3"
              >
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
