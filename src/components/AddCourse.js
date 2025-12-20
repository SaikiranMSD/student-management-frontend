import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../Services/CourseService";
const AddCourse = () => {
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};
    if (!courseId) {
      formIsValid = false;
      newErrors.courseId = "Please enter course Id";
    } else if (courseId.length < 4 || courseId.length > 4) {
      formIsValid = false;
      newErrors.courseId = "CourseId length should be 4 digits";
    } else if (!/^\d+$/.test(courseId)) {
      formIsValid = false;
      newErrors.courseId = "CourseId should contain digits only";
    }
    if (!courseName) {
      formIsValid = false;
      newErrors.courseName = "Please enter course Name";
    } else if (!/^[A-Za-z]+$/.test(courseName)) {
      formIsValid = false;
      newErrors.courseName = "Course name should contain letters only";
    }
    setErrors(newErrors);
    return formIsValid;
  };
  const saveorUpdateCourse = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const course = {
        courseId,
        courseName,
      };
      if (id) {
        CourseService.updateCourseData(course)
          .then((response) => {
            console.log(response.data);
            navigate("/courses");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        CourseService.postCourse(course)
          .then((response) => {
            console.log(response.course);
            navigate("/courses");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };
  useEffect(() => {
    if (id) {
      CourseService.getCourseById(id)
        .then((response) => {
          setCourseName(response.data.courseName);
          setCourseId(response.data.courseId);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2
              className="text-center"
              style={{ fontWeight: "bold", color: "#000000" }}
            >
              {id ? "Update Course" : "Add Course"}
            </h2>
            <div className="card-body">
              <form>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">Course ID:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter Course ID"
                      name="courseId"
                      className="form-control"
                      value={courseId}
                      onChange={(e) => setCourseId(e.target.value)}
                    />
                    {errors.courseId && (
                      <div className="text-danger">{errors.courseId}</div>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-2">
                  <label className="col-sm-3 col-form-label">
                    Course Name:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter Course Name"
                      name="courseName"
                      className="form-control"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                    />
                    {errors.courseName && (
                      <div className="text-danger">{errors.courseName}</div>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-9 offset-sm-3">
                    <Button
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                      onClick={(e) => {
                        saveorUpdateCourse(e);
                      }}
                    >
                      Register
                    </Button>
                    <Link to="/courses" className="btn btn-danger">
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

export default AddCourse;
