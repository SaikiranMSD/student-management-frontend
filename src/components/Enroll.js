import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import StudentService from "../Services/StudentService";
import CourseService from "../Services/CourseService";
import { Button } from "react-bootstrap";
const Enroll = () => {
  const { username } = useParams();
  const [studentName, setStudentName] = useState(username);
  const [studentAge, setStudentAge] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [firstCourseName, setFirstCourseName] = useState("");
  const [secondCourseName, setSecondCourseName] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!studentName) {
      formIsValid = false;
      newErrors.studentName = "Please enter your name.";
    }

    if (!studentAge) {
      formIsValid = false;
      newErrors.studentAge = "Please enter your age.";
    } else if (studentAge < 15 || studentAge > 30) {
      formIsValid = false;
      newErrors.studentAge = "Age should be between 15 and 30.";
    }

    if (!studentEmail) {
      formIsValid = false;
      newErrors.studentEmail = "Please enter your email address.";
    } else if (!studentEmail.includes("@")) {
      formIsValid = false;
      newErrors.studentEmail = "Please enter a valid email address.";
    }

    if (!studentAddress) {
      formIsValid = false;
      newErrors.studentAddress = "Please enter your address.";
    }

    if (!studentPhoneNumber) {
      formIsValid = false;
      newErrors.studentPhoneNumber = "Please enter your phone number.";
    } else if (!/^\d+$/.test(studentPhoneNumber)) {
      formIsValid = false;
      newErrors.studentPhoneNumber = "Phone number should contain digits only.";
    } else if (studentPhoneNumber.length !== 10) {
      formIsValid = false;
      newErrors.studentPhoneNumber = "Phone number should be 10 digits long.";
    }

    if (!firstCourseName) {
      formIsValid = false;
      newErrors.firstCourseName = "Please select the first course.";
    }

    if (!secondCourseName) {
      formIsValid = false;
      newErrors.secondCourseName = "Please select the second course.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const saveStudent = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const student = {
        studentName,
        studentAge,
        studentEmail,
        studentAddress,
        studentPhoneNumber,
        firstCourseName,
        secondCourseName,
      };
      StudentService.postStudent(student)
        .then((response) => {
          console.log(response.student);
          navigate(`/studentDashBoard/${student.studentName}`);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Phone Number must be unique"); // Set a generic error message
        });
    }
  };
  useEffect(() => {
    CourseService.getAllCourses()
      .then((response) => {
        const courseNames = response.data.map((course) => course.courseName);
        console.log(courseNames);
        setCourses(courseNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">Enroll For Course</h2>
            <div className="card-body">
              <form>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Student Name:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      className="form-control"
                      placeholder="Enter Your Name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      readOnly // Prevent the input field from being modified
                    />
                    {errors.studentName && (
                      <div className="text-danger">{errors.studentName}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">Age:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter Your Age"
                      name="studentAge"
                      className="form-control"
                      value={studentAge}
                      onChange={(e) => setStudentAge(e.target.value)}
                    />
                    {errors.studentAge && (
                      <div className="text-danger">{errors.studentAge}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">Email:</label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="studentEmail"
                      className="form-control"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                    />
                    {errors.studentEmail && (
                      <div className="text-danger">{errors.studentEmail}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">Address:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter Your Address"
                      name="studentAddress"
                      className="form-control"
                      value={studentAddress}
                      onChange={(e) => setStudentAddress(e.target.value)}
                    />
                    {errors.studentAddress && (
                      <div className="text-danger">{errors.studentAddress}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Phone Number:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      name="studentPhoneNumber"
                      className="form-control"
                      value={studentPhoneNumber}
                      onChange={(e) => setStudentPhoneNumber(e.target.value)}
                    />
                    {errors.studentPhoneNumber && (
                      <div className="text-danger">
                        {errors.studentPhoneNumber}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="text-danger">{errorMessage}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    First Course:
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="firstCourseName"
                      className="form-select"
                      value={firstCourseName}
                      onChange={(e) => setFirstCourseName(e.target.value)}
                    >
                      <option value="">Select Course</option>
                      {courses
                        .slice(0, Math.ceil(courses.length / 2))
                        .map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                    </select>
                    {errors.firstCourseName && (
                      <div className="text-danger">
                        {errors.firstCourseName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Second Course:
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="secondCourseName"
                      className="form-select"
                      value={secondCourseName}
                      onChange={(e) => setSecondCourseName(e.target.value)}
                    >
                      <option value="">Select Course</option>
                      {courses
                        .slice(Math.ceil(courses.length / 2))
                        .map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                    </select>
                    {errors.secondCourseName && (
                      <div className="text-danger">
                        {errors.secondCourseName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <div className="col-sm-9 offset-sm-3">
                    <Button
                      className="btn btn-success"
                      style={{ marginRight: "10px" }}
                      onClick={(e) => {
                        saveStudent(e);
                      }}
                    >
                      Register
                    </Button>
                    <Button
                      className="btn btn-danger"
                      style={{ marginRight: "10px" }}
                      onClick={(e) => {
                        navigate(`/enroll/${username}`);
                      }}
                    >
                      Cancel
                    </Button>
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

export default Enroll;
