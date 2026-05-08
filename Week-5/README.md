# Advanced HTML/CSS Layouts & Introduction to React

This week focuses on advanced HTML and CSS layout techniques, including Flexbox and page structuring, and transitions into the fundamentals of React.js. The curriculum is divided into three main sections: HTML/CSS assignments and introductory React projects.

---

## 📁 Directory Structure

### 1. `1st Assignement`
This directory contains foundational exercises on layouts and data presentation using HTML and CSS.
* **Flexbox Layout (`layout_flex.html` & `layout_flex.css`)**: Demonstrates the use of CSS Flexbox to create responsive and aligned page structures.
* **HTML Tables (`tables.html` & `tables.css`)**: Focuses on structuring tabular data with proper HTML table tags and styling them for better readability.

### 2. `2nd Assignment`
This directory focuses on building a complete page layout.
* **Page Layout (`layout.html` & `layout.css`)**: Contains a structured webpage with top, main (card-based), and footer sections, emphasizing practical layout building and CSS styling.

### 3. `React Assignments`
This directory introduces React.js, focusing on component-based architecture and rendering lists.
* **`react-1/react-assignment-1`**: A Vite + React application that renders a grid of product cards. It demonstrates passing data via props and using the `.map()` method to dynamically render multiple `Product` components.
* **`react-2/react-assignment-2`**: A component-structured React application containing a `Navbar`, `UsersList`, and `Footer`. This project reinforces the concept of breaking down a UI into reusable, modular React components.

---

##  Getting Started

### HTML/CSS Projects
To view the HTML/CSS assignments, simply open the `.html` files in any modern web browser.
* Example: Open `1st Assignement/layout_flex.html` directly in your browser.

### React Projects
To run the React projects, you will need [Node.js](https://nodejs.org/) installed on your machine.

1. Navigate to the specific React assignment directory using your terminal:
   ```bash
   cd "React Assignments/react-1/react-assignment-1"
   # OR
   cd "React Assignments/react-2/react-assignment-2"
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the provided local URL (usually `http://localhost:5173`) in your browser to view the app.

---

## 🎯 Key Concepts Covered
* CSS Flexbox for one-dimensional layouts.
* HTML Table structuring and styling.
* Building semantic and responsive webpage sections.
* Setting up React applications using Vite.
* Creating and composing React Functional Components.
* Passing data through `props`.
* Rendering lists dynamically in React.