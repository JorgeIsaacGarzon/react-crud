import React, { useState, useEffect } from "react";
import { fetchRequest } from "../helpers/fetchRequest";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  let url = "http://localhost:5000/persons";

  const [db, setDb] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRequest()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    fetchRequest()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let idEndpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: { "content-type": "application/json" },
      };

    fetchRequest()
      .put(idEndpoint, options)
      .then((res) => {
        if (!res.err) {
          let useData = db.map((el) => (el.id === data.id ? data : el));
          setDb(useData);
        } else {
          setError(res);
        }
      });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Delete this data?");

    if (isDelete) {
      let idEndpoint = `${url}/${id}`,
        options = {
          headers: { "content-type": "application/json" },
        };

      fetchRequest()
        .del(idEndpoint, options)
        .then((res) => {
          if (!res.err) {
            let useData = db.filter((el) => el.id !== id);
            setDb(useData);
          } else {
            setError(res);
          }
        });
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD API Fake (json-server)</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            setDataEdit={setDataEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};
export default CrudApi;
