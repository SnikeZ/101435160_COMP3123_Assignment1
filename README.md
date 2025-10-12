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

### User Endpoints

#### 1. Create New User (Signup)
**Endpoint:** `POST /api/v1/user/signup`

**Description:** Creates a new user account with encrypted password.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `username`: Required, must be trimmed
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

**Response Codes:**
- `201 Created` - User created successfully
- `400 Bad Request` - Validation failed
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
{
  "message": "User created successfully",
  "user_id": "507f1f77bcf86cd799439011"
}
```

**Error Response Example:**
```json
{
  "message": "Validation failed",
  "errors": [
    {
      "msg": "Email is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

#### 2. User Login
**Endpoint:** `POST /api/v1/user/login`

**Description:** Authenticates a user with username/email and password.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Note:** You can provide either `username` OR `email` (or both).

**Response Codes:**
- `200 OK` - Login successful
- `401 Unauthorized` - Invalid credentials
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
{
  "message": "Login successful."
}
```

**Error Response Example:**
```json
{
  "message": "Invalid credentials"
}
```

---

### Employee Endpoints

#### 1. Get All Employees
**Endpoint:** `GET /api/v1/emp/employees`

**Description:** Retrieves a list of all employees in the database.

**Request Body:** None

**Response Codes:**
- `200 OK` - Employees retrieved successfully
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "position": "Software Engineer",
    "salary": 75000,
    "date_of_joining": "2024-01-15T00:00:00.000Z",
    "department": "Engineering",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

#### 2. Create New Employee
**Endpoint:** `POST /api/v1/emp/employees`

**Description:** Creates a new employee record in the database.

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "position": "Product Manager",
  "salary": 85000,
  "date_of_joining": "2024-03-01",
  "department": "Product"
}
```

**Response Codes:**
- `201 Created` - Employee created successfully
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
{
  "message": "Employee created successfully.",
  "employee_id": "507f1f77bcf86cd799439011"
}
```

---

#### 3. Get Employee by ID
**Endpoint:** `GET /api/v1/emp/employees/:eid`

**Description:** Retrieves a specific employee by their ID.

**URL Parameters:**
- `eid` - Employee ID (MongoDB ObjectId)

**Request Body:** None

**Example Request:** `GET /api/v1/emp/employees/507f1f77bcf86cd799439011`

**Response Codes:**
- `200 OK` - Employee found and returned
- `404 Not Found` - Employee does not exist
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "position": "Software Engineer",
  "salary": 75000,
  "date_of_joining": "2024-01-15T00:00:00.000Z",
  "department": "Engineering",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Response Example:**
```json
{
  "message": "Employee not found"
}
```

---

#### 4. Update Employee
**Endpoint:** `PUT /api/v1/emp/employees/:eid`

**Description:** Updates an existing employee's information.

**URL Parameters:**
- `eid` - Employee ID (MongoDB ObjectId)

**Request Body:** (All fields are optional, only include fields to update)
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "position": "Senior Software Engineer",
  "salary": 95000,
  "department": "Engineering"
}
```

**Example Request:** `PUT /api/v1/emp/employees/507f1f77bcf86cd799439011`

**Response Codes:**
- `200 OK` - Employee updated successfully
- `404 Not Found` - Employee does not exist
- `500 Internal Server Error` - Server error

**Success Response Example:**
```json
{
  "message": "Employee details updated successfully."
}
```

**Error Response Example:**
```json
{
  "message": "Employee not found."
}
```

---

#### 5. Delete Employee
**Endpoint:** `DELETE /api/v1/emp/employees?eid=<employee_id>`

**Description:** Deletes an employee from the database.

**Query Parameters:**
- `eid` - Employee ID (MongoDB ObjectId)

**Request Body:** None

**Example Request:** `DELETE /api/v1/emp/employees?eid=507f1f77bcf86cd799439011`

**Response Codes:**
- `204 No Content` - Employee deleted successfully (no response body)
- `500 Internal Server Error` - Server error

**Success Response:** No content (empty response body)

---

## Testing with Postman

A Postman collection is included in this repository for testing all endpoints. Import the collection file to get started quickly with pre-configured requests.
