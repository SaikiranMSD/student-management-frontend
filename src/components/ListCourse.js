import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseService from "../Services/CourseService";
import { useNavigate } from "react-router-dom";

const ListCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    CourseService.getAllCourses()
      .then((coursedata) => {
        setCourses(coursedata.data);
        console.log(coursedata.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteCourse = (courseId) => {
    CourseService.deleteCourseData(courseId)
      .then((res) => {
        getAllCourses();
        console.log(res.data);
        navigate("/courses");
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
        Courses List
      </h2>
      <div className="row justify-content-center">
        <div className="col-8">
          <Link to="/addCourse" className="btn btn-primary">
            Add Course
          </Link>
          <table className="table table-hover table-striped table-bordered">
            <thead>
              <tr className="table-primary">
                <th>CourseId</th>
                <th>CourseName</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.courseId}>
                  <td>{course.courseId}</td>
                  <td>{course.courseName}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/updateCourse/${course.courseId}`}
                    >
                      Update
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={() => DeleteCourse(course.courseId)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
