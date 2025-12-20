import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";
import GradeService from "../Services/GradeService";
import { useNavigate } from "react-router-dom";
const CalculateGrade = () => {
  const [studentId, setStudentId] = useState("");
  const [marksInSubject1, setMarksInSubject1] = useState("");
  const [marksInSubject2, setMarksInSubject2] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const calculateGradeForId = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!/^\d+$/.test(studentId)) {
      validationErrors.studentId = "Invalid student ID. Please enter a number.";
    }

    if (marksInSubject1 < 0 || marksInSubject1 > 100) {
      validationErrors.marksInSubject1 =
        "Marks in Subject 1 must be between 0 and 100.";
    }

    if (marksInSubject2 < 0 || marksInSubject2 > 100) {
      validationErrors.marksInSubject2 =
        "Marks in Subject 2 must be between 0 and 100.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      StudentService.getAllStudents()
        .then((response) => {
          const students = response.data;
          console.log(students);
          const studentExists = students.find((student) => {
            console.log(typeof student.studentId);
            console.log(typeof studentId);
            return student.studentId === parseInt(studentId);
          });

          if (studentExists) {
            GradeService.postMarks(studentId, marksInSubject1, marksInSubject2)
              .then((response) => {
                console.log(response.data);
                // Perform any additional logic or navigation here
                navigate("/calgrade");
              })
              .catch((error) => {
                console.log(error);
                // Perform any error handling or display error messages here
              });
          } else {
            setErrors({ studentId: "Student ID does not exist." });
          }
        })
        .catch((error) => {
          console.log(error);
          // Perform any error handling or display error messages here
        });
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-8 offset-md-3">
            <h2
              className="text-center"
              style={{ fontWeight: "bold", color: "#000000" }}
            >
              Calculate Grade
            </h2>
            <div className="card-body">
              <form>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">Student ID:</label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      placeholder="Enter student ID"
                      name="studentId"
                      className={`form-control ${
                        errors.studentId && "is-invalid"
                      }`}
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                    {errors.studentId && (
                      <div className="invalid-feedback">{errors.studentId}</div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Marks in Subject 1:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      placeholder="Enter Marks in Subject 1"
                      name="marksInSubject1"
                      className={`form-control ${
                        errors.marksInSubject1 && "is-invalid"
                      }`}
                      value={marksInSubject1}
                      onChange={(e) => setMarksInSubject1(e.target.value)}
                    />
                    {errors.marksInSubject1 && (
                      <div className="invalid-feedback">
                        {errors.marksInSubject1}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Marks in Subject 2:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      placeholder="Enter Marks in Subject 2"
                      name="marksInSubject2"
                      className={`form-control ${
                        errors.marksInSubject2 && "is-invalid"
                      }`}
                      value={marksInSubject2}
                      onChange={(e) => setMarksInSubject2(e.target.value)}
                    />
                    {errors.marksInSubject2 && (
                      <div className="invalid-feedback">
                        {errors.marksInSubject2}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <div className="col-sm-9 offset-sm-3">
                    <Button
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                      onClick={calculateGradeForId}
                    >
                      Submit
                    </Button>
                    <Link to="/calGrade" className="btn btn-danger">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateGrade;
