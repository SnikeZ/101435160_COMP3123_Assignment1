# Assignment 1

Student ID: 101435160
Name: Evgenii Baldin
Course: OCMP3123

## Description

Employee Management API built with Express.js and MongoDB.

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file and add your MongoDB connection:
```
MONGO_STRING=your_mongodb_connection_string
```

3. Run the server:
```
npm run dev
```

Server runs on port 8081.

## API Endpoints

### User
- POST `/api/v1/user/signup` - Create new user
- POST `/api/v1/user/login` - Login

### Employee
- GET `/api/v1/emp/employees` - Get all employees
- POST `/api/v1/emp/employees` - Create employee
- GET `/api/v1/emp/employees/:eid` - Get employee by ID
- PUT `/api/v1/emp/employees/:eid` - Update employee
- DELETE `/api/v1/emp/employees` - Delete employee
