import React from "react";
import NavbarStudent from "./NavbarStudent";

const AddStudent = () => {
  return (
    <div>
      <NavbarStudent />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <h1>Add Student</h1>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  NAME
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  ROLL NO
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  ADDRESS
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  COLLEGE
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button type="submit" className="btn btn-success">
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
