import React from "react";
import pic from "../images/about.jpg";
import "../App.css"
const About = () => {
  return (
    <div className="container mt-4 bimage" >
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={pic} alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column">
            <h2 style={{ fontWeight: "bold", color: "#db4d69" }}>About Us</h2>
            <p>
              The Student Management System is designed to simplify the process
              of managing student information in educational institutions. It
              provides a centralized platform for administrators to store,
              update, and retrieve student data efficiently.
            </p>
            <p>
              This system helps streamline various tasks related to student
              management, including enrollment, attendance tracking, grade
              management, and generating reports. It aims to enhance the overall
              productivity and organization of educational institutions.
            </p>
            <p>
              We are dedicated to providing reliable and user-friendly software
              solutions for effective student management. Our goal is to assist
              educational institutions in optimizing their administrative
              processes and improving student outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
