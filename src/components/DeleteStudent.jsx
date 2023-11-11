import React from "react";
import NavbarStudent from "./NavbarStudent";

const DeleteStudent = () => {
  return (
    <div>
      <NavbarStudent />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col">
                <lable className="form-label">DELETE STUDENT</lable>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col">
                <button className="btn btn-danger">DELETE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
