import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaSchool } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <FaUserGraduate size={100} color="black" />
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{ fontWeight: "bold", color: "#db4d69" }}>
            Welcome to Student Management System
          </h1>
        </div>
        <Link to="/login" className="btn btn-primary">
          <span style={{ fontWeight: "bold" }}>Login/Signup</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
