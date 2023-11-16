import React, { useState } from "react";
import NavbarStudent from "./NavbarStudent";
import axios from "axios";

const AddStudent = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    rollno: "",
    admno: "",
    college: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/add/", inputField)
      .then((response) => {
        alert(response.data.status);
      });
  };

  return (
    <div>
      <NavbarStudent />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Roll No:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rollno"
                  value={inputField.rollno}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Admission No:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="admno"
                  value={inputField.admno}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  College:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="college"
                  value={inputField.college}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
