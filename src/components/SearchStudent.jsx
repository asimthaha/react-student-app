import React from "react";
import NavbarStudent from "./NavbarStudent";

const SearchStudent = () => {
  return (
    <div>
      <NavbarStudent />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="" className="form-label">
                  SEARCH STUDENT
                </label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <button type="submit" className="btn btn-primary">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStudent;
