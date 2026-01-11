# Task 1C – Backend CRUD Application

**Team Name:** Electon  
**Platform Used:** Node.js + MySQL

---

## 1. Task Description

This backend application performs CRUD (Create, Read, Update, Delete) operations using a MySQL database. It exposes REST API endpoints for managing users and is deployed on Render with a Railway MySQL database.

A simple frontend UI is included to demonstrate interaction with the backend.

---

## 2. Working Principle

- **Client Request:** Client (Postman or frontend UI) sends HTTP requests to the backend.  
- **Backend Processing:** Node.js + Express handles the request, validates data, and executes SQL queries on the `users2` table via `mysql2` connection pool.  
- **CRUD Operations:**  
  - **Create (POST /addUser):** Adds a new user to the database.  
  - **Read (GET /users):** Fetches all users.  
  - **Update (PUT /updateUser/:id):** Updates a user by ID.  
  - **Delete (DELETE /deleteUser/:id):** Deletes a user by ID.  
- **Response:** Backend returns JSON confirming success or error messages.

---

## 3. Live Backend/API Link

**Base URL:**  
[https://electon-task1c-backend.onrender.com](https://electon-task1c-backend.onrender.com)

> Use the documented endpoints with Postman or any REST client for testing.

---

## 4. Database Schema

**Table:** `users2`

| Column | Type         | Details                     |
|--------|-------------|-----------------------------|
| id     | INT         | AUTO_INCREMENT, PRIMARY KEY |
| name   | VARCHAR(100)| User name                   |
| email  | VARCHAR(100)| User email                  |

---

## 5. API Endpoints

| Method | Endpoint             | Description       | Body (JSON)                               |
|--------|--------------------|-----------------|------------------------------------------|
| POST   | `/addUser`         | Create a new user| `{ "name": "User", "email": "user@mail.com" }` |
| GET    | `/users`           | Get all users    | None                                     |
| PUT    | `/updateUser/:id`  | Update user by ID| `{ "name": "Updated", "email": "updated@mail.com" }` |
| DELETE | `/deleteUser/:id`  | Delete user by ID| None                                     |

---

## 6. Frontend

**Live URL:**  
[Electon Task1C Frontend](https://abhayganesh33.github.io/electon-task1c-backend/)

**Features:**  
- Add / Update users  
- View all users  
- Edit / Delete users  

**Homepage Screenshot:**  

![Home Page](./screenshots/render_vs_code/home_page.jpeg)

