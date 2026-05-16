# Advanced React & Full-Stack Development (MERN)

This week marks a significant transition from frontend-only React to building robust, full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js), along with advanced form handling and state management.

## Project Overview

Week 6 focuses on scaling up React applications and integrating them with backend services. The assignments progress from basic user additions to complex form validations using `react-hook-form`, culminating in a complete full-stack Employee Management Application.

## Directory Structure

```text
Week-6/
├── UserDashboard/         # Basic React user addition application
├── Form-data-into-table/  # Advanced React form validation application
└── Emp App/               # Full-Stack Employee Management Application
    ├── Emp_Backend/       # Express/MongoDB backend API
    └── Emp_Frontend/      # React/Vite frontend application
```

## Projects Detail

### 1. UserDashboard
A foundational React application built with Vite and styled using Tailwind CSS. This project serves as an introduction to basic state management and user interactions within a React component architecture.

### 2. Form-data-into-table
This project elevates form handling in React by integrating the `react-hook-form` library. It demonstrates how to efficiently manage form state, implement complex validation rules, and handle form submission while maintaining optimal performance and minimal re-renders.

### 3. Emp App (Employee Management Application)
A comprehensive full-stack application demonstrating the integration of a React frontend with an Express/MongoDB backend.

- **Frontend (`react-frontend`)**: Built with React, Vite, and Tailwind CSS. It features client-side routing using `react-router`, robust form handling with `react-hook-form`, and API communication using `axios` and `fetch`.

- **Backend (`Emp_Backend`)**: A robust Node.js and Express.js server providing RESTful API endpoints. It connects to a MongoDB database using `mongoose` and utilizes `cors` for cross-origin requests and `dotenv` for environment variable management.

- **Context API Implementation**:
  - Implemented global state management using React Context API.
  - Shared counter state across multiple components such as `Header` and `Home`.
  - Maintained synchronized state updates throughout the application.
  - Integrated counter increment functionality during employee creation and through manual interaction.

## How to Run

### Running React Frontend Projects (`UserDashboard` & `Form-data-into-table`)
1. Navigate to the desired project directory:
   ```bash
   cd UserDashboard
   # OR
   cd Form-data-into-table
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Full-Stack `Emp App`
This application requires both the backend and frontend servers to be running simultaneously.

**Terminal 1 (Backend):**
1. Navigate to the backend directory:
   ```bash
   cd "Emp App/Emp_Backend"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file with your MongoDB connection string and port.
4. Start the server (using nodemon for development):
   ```bash
   npm run dev
   ```

**Terminal 2 (Frontend):**
1. Navigate to the frontend directory:
   ```bash
   cd "Emp App/Emp_Frontend"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Router, React Hook Form, Context API, Axios, Fetch API
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv
- **Tooling**: npm