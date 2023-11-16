import React, { useEffect, useState } from "react";
import NavbarStudent from "./NavbarStudent";
import axios from "axios";

const ViewAllStudent = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavbarStudent />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Roll No</th>
                      <th scope="col">Adm No</th>
                      <th scope="col">College</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.name}</th>
                          <td>{value.rollno}</td>
                          <td>{value.admno}</td>
                          <td>{value.college}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllStudent;
