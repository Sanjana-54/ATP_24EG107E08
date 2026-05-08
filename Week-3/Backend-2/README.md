This repository contains the learning materials and projects for Week 3.

## Project Overview

### 1. Backend-2
A Node.js backend application built with Express and MongoDB. 

#### Key Features:
- **Express Server Setup**: Basic configuration of an Express.js server.
- **MongoDB Integration**: Connecting to a local MongoDB instance using `mongoose`.
- **RESTful APIs**:
  - `User APIs` (`/user-api`) for user management.
  - `Product APIs` (`/product-api`) for product operations.
- **Authentication**: Implementation using `bcryptjs` for password hashing and `jsonwebtoken` for secure JWT-based authentication.
- **Middleware**: Custom error handling for `ValidationError` and `CastError` to return clean client-side errors. Includes cookie parsing using `cookie-parser`.

#### How to run:
1. Navigate to the `Backend-2` directory:
   ```bash
   cd Backend-2
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Ensure you have a local MongoDB server running.
4. Start the server:
   ```bash
   npm start
   ```
The server will start on port `4000`.