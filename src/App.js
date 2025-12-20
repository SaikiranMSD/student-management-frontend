import "./App.css";
import UpdateStudent from "./components/UpdateStudent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ListCourse from "./components/ListCourse";
import AddCourse from "./components/AddCourse";
import StudentDashBoard from "./components/StudentDashBoard";
import AdminDashBoard from "./components/AdminDashBoard";
import GradeSheet from "./components/GradeSheet";
import Enroll from "./components/Enroll";
import CalculateGrade from "./components/CalculateGrade";
import StudentMarksCard from "./components/StudentMarksCard";
import LandingPage from "./components/LandingPage";
import bimage from "./images/HomePage.jpg";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bimage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Router>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" Component={LandingPage}></Route>
            <Route exact path="/login" Component={LoginForm}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/enrollment/:username" Component={Enroll}></Route>
            <Route path="/calgrade" Component={GradeSheet}></Route>
            <Route path="/addGradeSheet" Component={CalculateGrade}></Route>
            <Route path="/courses" Component={ListCourse}></Route>
            <Route path="/addCourse" Component={AddCourse}></Route>
            <Route path="/updateCourse/:id" Component={AddCourse}></Route>
            <Route path="/adminDashBoard" Component={AdminDashBoard}></Route>
            <Route
              path="/updateStudent/:studentId"
              Component={UpdateStudent}
            ></Route>
            <Route
              path="/gradesheet/:studentId"
              Component={StudentMarksCard}
            ></Route>
            <Route
              path="/studentDashBoard/:username"
              Component={StudentDashBoard}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
