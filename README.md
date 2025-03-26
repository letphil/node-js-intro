# Introduction to Node.js and Express

## Objective:

- Learn how to set up a basic Node.js application.
- Understand how to install and use Express.
- Learn how to serve static HTML files using Express.

---

## Lesson Plan Overview

This is a 2-hour lesson that introduces the basics of Node.js and Express. It covers setting up a basic server using Express, serving static HTML files, and customizing the application with multiple pages and styling.

---

### 1. Introduction to Node.js & Express

#### Goal:

- Get acquainted with the basics of Node.js and the role of Express in building web servers.

1. **Introduction to Node.js**

   - **What is Node.js?**

     - Node.js is a runtime built on Chrome’s V8 JavaScript engine that allows you to run JavaScript outside the browser.
     - It’s used for building fast and scalable network applications.
     - npm (Node Package Manager) is used for handling dependencies.

   - **Why use Node.js?**
     - Asynchronous
     - Single-threaded, event-driven architecture.
     - Ideal for real-time applications.

2. **Introduction to Express**

   - **What is Express?**

     - Express is a minimal and flexible Node.js web application framework.
     - It simplifies routing, HTTP requests, middleware, and serving static files.

   - **Why use Express?**
     - Simplifies routing and HTTP request/response handling.
     - Provides middleware for handling requests and static assets easily.

---

### 2. Setting Up the Environment

#### Goal:

- Install Node.js, initialize a Node.js project, and install Express.

1. **Install Node.js and npm**

   - Install Node.js from [nodejs.org](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Initialize a New Node.js Project**

   - Open a terminal and create a new directory:
     ```bash
     mkdir express-app
     cd express-app
     ```
   - Initialize the project with:
     ```bash
     npm init -y
     ```

3. **Install Express**
   - Install Express:
     ```bash
     npm install express
     ```

---

### 3. Creating a Basic Express Server

#### Goal:

- Set up a basic server using Express.

1. **Create a Simple Server (10 minutes)**

   - Create `app.js` and add the following code:

     ```javascript
     const express = require("express");
     const app = express();
     const port = 3000;

     app.get("/", (req, res) => {
       res.send("Hello, World!");
     });

     app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
     });
     ```

2. **Run the Server**

   - Instruct students to run:
     ```bash
     node app.js
     ```
   - Open a browser and visit `http://localhost:3000` to see "Hello, World!" displayed.

3. **Explaining the Code**
   - `express()` initializes an Express application.
   - `app.get()` defines a route for GET requests.
   - `app.listen()` starts the server on the specified port.

---

### 4. Serving Static HTML Files with Express

#### Goal:

- Learn how to serve static HTML files using Express.

1. **Creating Static HTML Files**

   - Create a `public` directory in the project.
   - Inside `public`, create an `index.html` file with the following content:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <title>Static HTML with Express</title>
       </head>
       <body>
         <h1>Welcome to the Static HTML Page</h1>
       </body>
     </html>
     ```

2. **Serve Static Files**

   - Modify `app.js` to serve static files:
     ```javascript
     const path = require("path");
     app.use(express.static(path.join(__dirname, "public")));
     ```

3. **Testing Static Files**

   - Restart the server with `node app.js`.
   - Visit `http://localhost:3000` to see the static HTML file.

4. **Discussing Static Files in Express**
   - `express.static()` serves static files from the specified directory.
   - This is a convenient way to serve assets such as images, stylesheets, and scripts.

---

### 5. Interactive Exercise: Customize Static Files

#### Goal:

- Practice modifying static files and customizing the application.

1. **Task: Add an additional page**

   - Create a new page `about.html` inside the `public` folder with custom content.
   - Add a link to `index.html` to navigate to `about.html`.

2. **Task: Add CSS Styling**
   - Create a `style.css` file inside the `public` folder and apply basic styling (e.g., background color, font size).

---

### 6. Wrap-up and Q&A

1. **Recap of Key Concepts**

   - Node.js basics and its purpose.
   - Express framework and how it simplifies server creation.
   - How to serve static HTML files using Express.

2. **Homework/Next Steps**
   - Create a multi-page website with static pages and styles.
   - Explore more advanced Express features like routing and middleware.

---

## Additional Resources:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
