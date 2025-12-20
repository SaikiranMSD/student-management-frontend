# Student Management System - Frontend

A **React** frontend application for the Student Management System microservices backend.

## 🖥️ Features

- **User Authentication** - Login/Signup for Admin & Student
- **Admin Dashboard** - Manage students, courses, and grades
- **Student Dashboard** - Enroll in courses, view grades
- **Course Management** - Add, update, delete courses
- **Grade Management** - Calculate and view student grades

## 🛠️ Tech Stack

- **React 18** with React Router v6
- **Bootstrap 5** & React Bootstrap
- **Axios** for API calls
- **Font Awesome** icons

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

App runs at: **http://localhost:3000**

## 🔗 Backend Connection

Connects to microservices backend via API Gateway at `http://localhost:4444/api/`

| Service | Route |
|---------|-------|
| Student & User | `/api/service1/**` |
| Course | `/api/service2/**` |
| Grade | `/api/service3/**` |

## 📁 Project Structure

```
src/
├── components/
│   ├── LoginForm.js         # Authentication
│   ├── AdminDashBoard.js    # Admin panel
│   ├── StudentDashBoard.js  # Student panel
│   ├── AddCourse.js         # Course CRUD
│   ├── ListCourse.js        # Course listing
│   ├── Enroll.js            # Student enrollment
│   ├── CalculateGrade.js    # Grade calculation
│   ├── GradeSheet.js        # Grade display
│   └── ...
├── Services/
│   ├── StudentService.js    # Student API
│   ├── CourseService.js     # Course API
│   ├── GradeService.js      # Grade API
│   └── UsersService.js      # User API
└── images/
```

## 📱 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing Page |
| `/login` | Login/Signup |
| `/adminDashBoard` | Admin Panel |
| `/studentDashBoard/:username` | Student Panel |
| `/enrollment/:username` | Course Enrollment |
| `/courses` | Course List |
| `/calgrade` | Grade Sheet |

## 🔗 Related Repository

- **Backend:** [student-management-microservices](https://github.com/SaikiranMSD/student-management-microservices)

## 👤 Author

**Saikiran MSD** - [@SaikiranMSD](https://github.com/SaikiranMSD)
