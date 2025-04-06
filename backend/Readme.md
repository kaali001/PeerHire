# 🚀 PeerHire - Job Posting & Bidding API

![PeerHire Banner](https://via.placeholder.com/1200x400/2D3748/FFFFFF?text=PeerHire+API)  
*A RESTful API for job posting and freelancer bidding system with JWT authentication*

## 🌟 Features

<div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 20px 0;">

<div style="flex: 1; min-width: 250px; padding: 15px; background: #f5f5f5; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3>🔐 Authentication</h3>
<ul>
<li>JWT-based security</li>
<li>Role-based access control</li>
<li>Password hashing with bcrypt</li>
</ul>
</div>

<div style="flex: 1; min-width: 250px; padding: 15px; background: #f5f5f5; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3>💼 Job Management</h3>
<ul>
<li>Create and manage job posts</li>
<li>Skills-based filtering</li>
<li>Detailed job listings</li>
</ul>
</div>

<div style="flex: 1; min-width: 250px; padding: 15px; background: #f5f5f5; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3>💰 Bidding System</h3>
<ul>
<li>Submit competitive bids</li>
<li>Accept/reject workflow</li>
<li>Bid status tracking</li>
</ul>
</div>

</div>

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

```bash
# Clone the repository
git clone https://github.com/yourusername/peerhire-api.git
cd peerhire-api

# Install dependencies
npm install
```

### 2. Configuration

``` bash
# Create a .env file in the root directory:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/peerhire
JWT_SECRET=your_secure_secret_key_here
```

### 3. Running the Server

```
# Development mode (with auto-restart)
npm run dev

# Production mode
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


<div align="center"> <p>Built with ❤️ by upcoming PeerHire Team</p> 