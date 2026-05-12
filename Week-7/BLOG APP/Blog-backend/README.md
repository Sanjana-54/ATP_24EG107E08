# Blog Application Backend

This is the backend of the Blog Application developed using Node.js, Express.js, MongoDB, and JWT Authentication.

## Features

- User Registration
- Login & Logout
- JWT Authentication
- Role-based Authorization
- Forgot Password
- Change Password
- Blog CRUD Operations
- Image Upload using Multer
- Cloudinary Integration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- dotenv
- Cookie Parser

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to backend folder:

```bash
cd Blog-backend
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

OR

```bash
nodemon server.js
```

Backend runs on:

```bash
http://localhost:5000
```

## Environment Variables

Create `.env` file and add:

```env
PORT=5000
DBURL=your_mongodb_connection
SECRET_KEY=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API Routes

### Authentication

- `POST /auth/users`
- `POST /auth/login`
- `GET /auth/logout`
- `PUT /auth/password`
- `PUT /auth/forgot-password`



Developed as a Capstone Project.