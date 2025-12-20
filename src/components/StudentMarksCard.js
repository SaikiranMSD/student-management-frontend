import React, { useState, useEffect } from "react";
import GradeService from "../Services/GradeService";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const StudentMarksCard = () => {
  const [marksData, setMarksData] = useState(null);
  const [error, setError] = useState(null);
  const { studentId } = useParams();

  useEffect(() => {
    fetchMarksData(studentId);
  }, [studentId]);

  const fetchMarksData = (studentId) => {
    GradeService.getMarksById(studentId)
      .then((response) => {
        const data = response.data;
        if (data) {
          console.log(response.data);
          setMarksData(data);
        } else {
          setError("Grade Sheet is not released.");
        }
      })
      .catch((error) => {
        setError(
          <h1 style={{ color: "red" }}>Grade Sheet is not released.</h1>
        );
      });
  };

  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="text-center container-md">
        <h2 style={{ fontWeight: "bold", color: "#000000" }}>Grade Sheet</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            {marksData ? (
              <table className="table table-bordered border-success">
                <tbody>
                  <tr>
                    <td>
                      <strong>Student ID:</strong>
                    </td>
                    <td>{marksData.studentId}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Student Name:</strong>
                    </td>
                    <td>{marksData.studentName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>First Course Name:</strong>
                    </td>
                    <td>{marksData.courseName1}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>First Course Marks:</strong>
                    </td>
                    <td>{marksData.marksInSubject1}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Second Course Name:</strong>
                    </td>
                    <td>{marksData.courseName2}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Second Course Marks:</strong>
                    </td>
                    <td>{marksData.marksInSubject2}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Percentage:</strong>
                    </td>
                    <td>{marksData.percentage}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Grade:</strong>
                    </td>
                    <td>{marksData.grade}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Status:</strong>
                    </td>
                    <td>{marksData.status}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div>{error || "Loading..."}</div>
            )}
            {marksData && (
              <>
                {marksData.status === "PASS" ? (
                  <h5 style={{ color: "green" }}>
                    Congratulations...
                    <i class="bi bi-emoji-smile"></i>
                  </h5>
                ) : (
                  <h5 style={{ color: "red" }}>
                    Better Luck Next Time....{" "}
                    <i class="bi bi-emoji-frown-fill"></i>
                  </h5>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMarksCard;
