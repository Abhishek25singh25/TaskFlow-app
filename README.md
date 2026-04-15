# 🚀 TaskFlow - MERN Task Management App

A full-stack **Task Management Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.
It allows users to manage daily tasks efficiently with a clean UI and powerful backend APIs.

## ✨ Features

* ✅ Add new tasks
* 📝 Edit and update tasks
* ❌ Delete tasks
* 📊 Task status tracking (To Do / In Progress / Done)
* 🎯 Priority levels (Low / Medium / High)
* ⚡ Fast and responsive UI
* 🔗 RESTful API integration

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React.js (Vite)
* CSS

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB

---

## 📂 Project Structure

```
TaskFlow-app/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
│── .gitignore
│── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Abhishek25singh25/TaskFlow-app.git
cd TaskFlow-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🌐 Running Application

* Frontend → http://localhost:3000
* Backend → http://localhost:5000/api/tasks

---

## 🔌 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

## 🔐 Environment Variables

```
PORT=
MONGO_URI=
```

---

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* 👥 Multi-user support
* 🌙 Dark mode
* 📊 Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch
3. Commit changes
4. Open Pull Request

---

## 👨‍💻 Author

**Abhishek Singh**
🔗 GitHub: https://github.com/Abhishek25singh25

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
