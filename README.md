# 🚀 TaskFlow - Full Stack DevOps Enabled MERN Application

TaskFlow is a full-stack **Task Management Application** built using the **MERN Stack** and deployed using modern **DevOps practices**.

The project helps users manage daily tasks efficiently while demonstrating real-world deployment workflows using:

- 🐳 Docker
- ☸️ Kubernetes
- 📈 Horizontal Pod Autoscaler (HPA)
- 📊 Prometheus
- 📉 Grafana
- 🔄 GitHub Actions CI/CD
- 🔐 Trivy Security Scanning
- 🏗️ Terraform
- ☁️ AWS EC2

---

# ✨ Features

## 📌 Task Management
- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- 📊 Task status tracking
- 🎯 Task priority management

---

# 🛠️ Tech Stack

## 🔹 Frontend
- React.js (Vite)
- CSS

## 🔹 Backend
- Node.js
- Express.js

## 🔹 Database
- MongoDB

---

# ⚡ DevOps & Cloud Technologies

- 🐳 Docker
- ☸️ Kubernetes
- 📈 HPA Autoscaling
- 📊 Prometheus Monitoring
- 📉 Grafana Dashboards
- 🔄 GitHub Actions CI/CD
- 🔐 Trivy Security Scanning
- 🏗️ Terraform Infrastructure as Code
- ☁️ AWS EC2 Deployment

---

# 📂 Project Structure

```bash
TaskFlow-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── App.jsx
│   └── package.json
│
├── kubernetes/
├── terraform/
├── .github/workflows/
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# ⚙️ Local Setup & Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Abhishek25singh25/TaskFlow-app.git
cd TaskFlow-app
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
```

Run Backend:

```bash
npm start
```

---

## 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

# 🌐 Application URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000/api/tasks |

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

# 🐳 Docker Setup

## Build Images

```bash
docker build -t taskflow-backend ./backend
docker build -t taskflow-frontend ./frontend
```

## Run Containers

```bash
docker run -d -p 5000:5000 taskflow-backend
docker run -d -p 3000:3000 taskflow-frontend
```

---

# ☸️ Kubernetes Deployment

Apply Kubernetes manifests:

```bash
kubectl apply -f kubernetes/
```

Check resources:

```bash
kubectl get pods
kubectl get services
```

---

# 📈 Monitoring Stack

Monitoring integrated using:

- Prometheus
- Grafana
- Kubernetes Metrics Server

### Features
- 📊 Pod Monitoring
- 📈 Resource Usage Metrics
- ⚡ CPU & Memory Tracking
- 🚀 Autoscaling Visualization

---

# 🔄 CI/CD Pipeline

GitHub Actions pipeline includes:

- ✅ Dependency Installation
- ✅ Docker Image Build
- ✅ DockerHub Push
- ✅ Trivy Image Scanning
- ✅ Automated Workflow Execution

---

# ☁️ AWS Deployment

Infrastructure provisioned using Terraform:

- EC2 Instance
- Security Groups
- SSH Access
- Docker-based Deployment

---

# 🔐 Environment Variables

```env
PORT=
MONGO_URI=
```

---

# 🚀 Future Improvements

- 🔐 JWT Authentication
- 👥 Multi-user Support
- 🌙 Dark Mode
- 📊 Analytics Dashboard
- 🔒 HTTPS with Nginx & Certbot
- ☸️ EKS Deployment
- 📦 Helm Charts

---

# 👨‍💻 Author

## Abhishek Singh

🔗 GitHub:
https://github.com/Abhishek25singh25

---

# ⭐ Support

If you found this project helpful, give it a ⭐ on GitHub!
