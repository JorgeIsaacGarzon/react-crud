import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  country: "",
};

const CrudForm = ({ createData, updateData, dataEdit, setDataEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    dataEdit ? setForm(dataEdit) : setForm(initialForm);
  }, [dataEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.country) {
      alert("Missing data");
      return;
    }
    form.id === null ? createData(form) : updateData(form);
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataEdit(null);
  };

  return (
    <div>
      <h3>{dataEdit ? "Editing..." : "Add person"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
