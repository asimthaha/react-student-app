import React, { useState } from "react";
import NavbarStudent from "./NavbarStudent";

const ViewAllStudent = () => {
  const [data, changeData] = useState([
    {
      name: "asim",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
      profile: "https://asimthaha.github.io./assets/img/profile-img.jpg",
    },
    {
      name: "jarina",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
      profile:
        "data:image/jpeg;base64,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",
    },
    {
      name: "vishnu",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "athul",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "alfin",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "akshay",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "rehan",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "amil",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "libin",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "dev",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
    {
      name: "nandhu",
      admno: 214,
      rollno: 118,
      college: "Marian college kuttikkanam",
    },
  ]);

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
                      <th scope="col">Profile pic</th>
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
                          <td>
                            <img src={value.profile} alt="" />
                          </td>
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
