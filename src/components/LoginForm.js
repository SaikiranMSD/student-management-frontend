import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../Services/UsersService";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setLoginErrorMessage("");
    setSignupErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setSignupErrorMessage("");
    setSignupErrorMessage("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    UsersService.getUserByName(username)
      .then((response) => {
        const user = response.data;

        if (!user) {
          setLoginErrorMessage("Invalid username!");
          return;
        }

        if (user.role !== role) {
          setLoginErrorMessage("Invalid role!");
          return;
        }

        if (user.password !== password) {
          setLoginErrorMessage("Invalid password!");
          return;
        }

        if (role === "student") {
          navigate(`/studentDashboard/${user.userName}`);
        } else if (role === "admin") {
          navigate("/adminDashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginErrorMessage("An error occurred during login");
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !role) {
      setSignupErrorMessage("Please fill all the fields!");
      return;
    }

    const user = {
      userName: username,
      password,
      role,
    };

    // Fetch all users
    UsersService.getAllUsers()
      .then((response) => {
        const users = response.data;

        const adminUsers = users.filter((user) => user.role === "admin");
        const existingUser = users.find((user) => user.userName === username);

        if (adminUsers.length > 0 && role === "admin") {
          // An admin user already exists, prevent signup
          setSignupErrorMessage("An admin user already exists");
        } else {
          // No admin user exists or non-admin user signup, proceed with signup

          console.log(existingUser);
          if (existingUser) {
            setSignupErrorMessage("User already exists");
          } else {
            UsersService.postUser(user)
              .then(() => {
                setSignupErrorMessage("");
                if (role === "student") {
                  navigate(`/studentDashboard/${username}`);
                } else if (role === "admin") {
                  navigate("/adminDashboard");
                }
              })
              .catch((err) => {
                console.log(err);
                setSignupErrorMessage("An error occurred during signup");
              });
          }
        }
      })
      .catch((error) => {
        UsersService.postUser(user)
          .then(() => {
            setSignupErrorMessage("");
            if (role === "student") {
              navigate(`/studentDashboard/${username}`);
            } else if (role === "admin") {
              navigate("/adminDashboard");
            }
          })
          .catch((err) => {
            console.log(err);
            setSignupErrorMessage("An error occurred during signup");
          });
      });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-6">
        <form className="d-flex flex-column" onSubmit={handleLogin}>
          <br />
          <h2
            className="text-center"
            style={{ fontWeight: "bold", color: "#000000" }}
          >
            Login/SignUp
          </h2>
          <p className="text-center" style={{ color: "red" }}>
            Note :: Username should be your Full Name
          </p>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          {loginErrorMessage && (
            <p className="text-danger">{loginErrorMessage}</p>
          )}
          <br />
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
          {signupErrorMessage && (
            <p className="text-danger">{signupErrorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
