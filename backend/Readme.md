<div align="center">  <h1>🚀 PeerHire - Job Posting & Bidding API</h1> </div> 

PeerHire is a robust backend API designed to power modern job posting and freelancing platforms. This RESTful service provides all the core functionality needed to connect employers with skilled freelancers through a secure bidding system.



## 🛠 Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, bcrypt
- **Documentation**: Swagger UI
- **Containerization**: Docker

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ [Download](https://nodejs.org/)
- MongoDB v4.4+ [Download](https://www.mongodb.com/try/download/community)
- (Optional) Docker [Download](https://www.docker.com/)

### 1. Installation
  Clone the repository
```bash

git clone https://github.com/yourusername/peerhire-api.git
cd peerhire-api
```
Install dependencies
```
npm install
```

### 2. Configuration

 Create a .env file in the root directory:
``` bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/peerhire
JWT_SECRET=your_secure_secret_key_here
```

### 3. Running the Server
 Development mode (with auto-restart)
```
npm run dev
```
Production mode

```
npm start
```
The API will be available at:
🌐 http://localhost:3000

## 📚 API Documentation
  Interactive API docs available at:
> 📖 http://localhost:3000/api-docs

## 🔐 Authentication Endpoints

### Register a New User
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "freelancer"
}
```


### Login

```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```


## 💼 Job Endpoints

### Create Job (Employer Only)

```
POST /jobs/create
Authorization: Bearer <employer_token>
Content-Type: application/json

{
  "title": "React Developer",
  "description": "Need senior React developer",
  "budget": 5000,
  "duration": 30,
  "skillsRequired": ["react", "javascript"]
}
```

```
#Get Jobs (Filterable)

GET /jobs?skills=react,nodejs
```

## 💰 Bid Endpoints

### Place Bid (Freelancer Only)
```
POST /bids/507f1f77bcf86cd799439011
Authorization: Bearer <freelancer_token>
Content-Type: application/json

{
  "bidAmount": 4500,
  "timeline": 25,
  "message": "I can complete this in 3 weeks"
}
```

```
#Accept Bid (Employer Only)
PATCH /bids/507f1f77bcf86cd799439011/accept
Authorization: Bearer <employer_token>
```

## 🐳 Docker Setup

 1. Build the Docker image:
```
docker build -t peerhire-api .
```
 2. Run the container:
 ```
  docker run -p 3000:3000 \
   -e MONGODB_URI=mongodb://host.docker.internal:27017/peerhire \
   -e JWT_SECRET=your_secret_key \
   peerhire-api
 ```


<div align="center"> <p>Built with ❤️ by upcoming PeerHire Team</p> </div>
