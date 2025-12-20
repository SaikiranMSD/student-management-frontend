import React from "react";
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#CB7E7B", padding: "20px" }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <span className="text-light ">
          &copy; {new Date().getFullYear()} StudentManagementSolutions. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
