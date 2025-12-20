import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentService from "../Services/StudentService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const StudentDashboard = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(username);
  const [enrolled, setEnrolled] = useState(false);
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    fetchStudentRecord(username);
  }, [username, location]);

  const fetchStudentRecord = (username) => {
    console.log(username);
    StudentService.getStudentByName(username)
      .then((record) => {
        if (record.data) {
          setEnrolled(true);
          setStudentId(record.data.studentId);
          console.log(record.data);
        } else {
          setEnrolled(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setEnrolled(false);
      });
  };

  const handleEnroll = () => {
    // Perform enrollment logic here
    setEnrolled(true);
    navigate(`/enrollment/${username}`);
  };

  const handleGrade = () => {
    navigate(`/gradesheet/${studentId}`);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2
            className="text-center mt-4 mb-4"
            style={{ fontWeight: "bold", color: "#000000" }}
          >
            Hello, {username} !
          </h2>
          <div className="card">
            <div className="card-body" style={{ backgroundColor: "#f2f2f2" }}>
              {enrolled ? (
                <div>
                  <h3 className="text-center mb-4 text-danger">
                    You are enrolled in the course.
                  </h3>
                  <button className="btn btn-primary" onClick={handleGrade}>
                    Check Grade
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-center mb-4 text-danger">
                    Please enroll for the course.
                  </h3>
                  <button onClick={handleEnroll} className="btn btn-primary">
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
