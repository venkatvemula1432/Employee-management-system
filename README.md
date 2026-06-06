# Employee Management System

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green)
![React](https://img.shields.io/badge/React-19-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)

# Employee Management System

A Full Stack Employee Management System built using Spring Boot, React.js, MySQL, JWT Authentication, and REST APIs.

This application allows users to register, log in securely, and perform Employee Management operations such as adding, viewing, updating, and deleting employee records.

---

## Features

### User Management

* User Registration
* User Login Authentication
* JWT-Based Security
* Protected Routes

### Employee Management

* Add Employee
* View Employee Records
* Update Employee Information
* Delete Employee Records

### User Interface

* Responsive Design
* Bootstrap Styling
* Toast Notifications
* Modern UI Components

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Maven

### Frontend

* React.js
* React Router DOM
* Bootstrap
* Axios
* React Toastify

### Database

* MySQL

---

## Project Structure

```text
Employee-management-system
│
├── Backend
│
├── Frontend
│
├── screenshots
│   ├── AddEmployee.png
│   ├── Login.png
│   ├── Register.png
│   ├── UpdateEmpRecord.png
│   └── ViewEmployeeDashBoard.png
│
├── .gitignore
└── README.md
```

---

## Application Screenshots

### Login Page
(https://github.com/venkatvemula1432/Employee-management-system/blob/main/Screenshots/AddEmployee.png)
---

### Register Page
![Register](./screenshots/Register.png)
---

### Employee Dashboard
![ViewEmployeeDashBoard](./screenshots/ViewEmployeeDashBoard.png)
---

### Add Employee
(https://github.com/venkatvemula1432/Employee-management-system/blob/main/Screenshots/AddEmployee.png)
---

### Update Employee Record
![UpdateEmpRecord](./screenshots/UpdateEmpRecord.png)
---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/venkatvemula1432/Employee-management-system.git
```

---

### Backend Setup

Navigate to Backend folder:

```bash
cd Backend
```

Install dependencies and run:

```bash
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8083
```

---

### Frontend Setup

Navigate to Frontend folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:5173
```

---

## REST API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| POST   | /register       | Register User      |
| POST   | /login          | Login User         |
| GET    | /getEmployees   | Get All Employees  |
| GET    | /emp/{id}       | Get Employee By Id |
| POST   | /addEmployee    | Add Employee       |
| PUT    | /updateEmp      | Update Employee    |
| DELETE | /deleteEmp/{id} | Delete Employee    |

---

## Security Features

* JWT Token Authentication
* Protected Routes
* Secure API Access
* Authentication-Based Navigation

---

## Future Enhancements

* Role-Based Authorization
* Employee Search Functionality
* Pagination
* Employee Profile Images
* Dashboard Analytics
* Email Notifications
* Export Employee Data

---

## Author

### Venkat Vemula

GitHub Profile:

https://github.com/venkatvemula1432

---

## Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

### Thank You for Visiting This Repository
