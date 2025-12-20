import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GradeService from "../Services/GradeService";
import { Link } from "react-router-dom";

const GradeSheet = () => {
  const [grades, setGrades] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const navigate = useNavigate();
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = () => {
    GradeService.getAllMarkSheets().then((sdata) => {
      setGrades(sdata.data);
      console.log(sdata.data);
    });
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredData =
    filter === "ALL" ? grades : grades.filter((item) => item.status == filter);
  return (
    <div className="container">
      <h2
        className="text-center"
        style={{ fontWeight: "bold", color: "#000000" }}
      >
        Students List
      </h2>
      <Link to="/addGradeSheet" className="btn btn-primary">
        Calculate Grade
      </Link>
      <select
        className="btn btn-primary"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="ALL">ALL</option>
        <option value="PASS">PASS</option>
        <option VALUE="FAIL">FAIL</option>
      </select>
      <br />
      <br />
      <table className="table table-bordered table-striped table-hover">
        <thead className="bg-warning text-white">
          <tr className="table-primary">
            <th>StudentId</th>
            <th>Name</th>
            <th>courseName1</th>
            <th>marksInSubject1</th>
            <th>courseName2</th>
            <th>marksInSubject2</th>
            <th>grade</th>
            <th>percentage</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((gradesheets) => (
            <tr key={gradesheets.studentId} class="table-light">
              <td>{gradesheets.studentId}</td>
              <td>{gradesheets.studentName}</td>
              <td>{gradesheets.courseName1}</td>
              <td>{gradesheets.marksInSubject1}</td>
              <td>{gradesheets.courseName2}</td>
              <td>{gradesheets.marksInSubject2}</td>
              <td>{gradesheets.grade}</td>
              <td>{gradesheets.percentage}</td>
              <td>{gradesheets.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeSheet;
