import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Jorge G.",
    country: "Costa Rica",
  },
  {
    id: 2,
    name: "Jefferson L.",
    country: "USA",
  },
  {
    id: 3,
    name: "Eunice M.",
    country: "Canadá",
  },
  {
    id: 4,
    name: "Madelyn P.",
    country: "USA",
  },
  {
    id: 5,
    name: "Carlos C.",
    country: "España",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let useData = db.map((el) => (el.id === data.id ? data : el));
    setDb(useData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Delete this data?");

    if (isDelete) {
      let useData = db.filter((el) => el.id !== id);
      setDb(useData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD (local-data)</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />

        <CrudTable
          data={db}
          setDataEdit={setDataEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};
export default CrudApp;
