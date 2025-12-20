import React, { useEffect, useState } from "react";
import StudentService from "../Services/StudentService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllStudentsData();
  }, []);
  const getAllStudentsData = () => {
    StudentService.getAllStudents()
      .then((studentdata) => {
        setStudents(studentdata.data);
        console.log(studentdata.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteEmployee = (studentId) => {
    StudentService.deleteStudentRecord(studentId)
      .then((res) => {
        getAllStudentsData();
        console.log(res.data);
        navigate("/adminDashBoard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h2
        className="text-center"
        style={{ fontWeight: "bold", color: "#000000" }}
      >
        Students Details
      </h2>

      <Link to="/calgrade" className="btn btn-primary">
        GradeSheet
      </Link>
      <Link to="/addCourse" className="btn btn-primary">
        Add Course
      </Link>
      <Link to="/courses" className="btn btn-primary">
        Courses
      </Link>
      <br />
      <br />
      <table className="table table-bordered table-striped table-hover">
        <thead className="bg-warning text-white">
          <tr className="table-primary">
            <th>StudentId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>FirstCourse</th>
            <th>SecondCourse</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.studentId} className="table-light">
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.studentAge}</td>
              <td>{student.studentEmail}</td>
              <td>{student.studentPhoneNumber}</td>
              <td>{student.studentAddress}</td>
              <td>{student.firstCourseName}</td>
              <td>{student.secondCourseName}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/updateStudent/${student.studentId}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteEmployee(student.studentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default AdminDashBoard;
