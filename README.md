# Task Manager (Full Stack)

A full-stack task management application with authentication and user-specific data handling, built using React, Node.js, Express, and MongoDB.

It demonstrates user authentication, protected routes, and user-specific data handling using JWT and MongoDB. 

The focus is on clean architecture, separation of concerns, and keeping the structure production-ready.

---

## Why I Built This

I built this project to practice creating a full-stack application with authentication and user-specific data. I wanted to better understand how the frontend and backend interact, especially when handling secure data.



## Challenges

One of the main challenges was getting authentication working properly across both the frontend and backend. I had to make sure JWT tokens were handled correctly and that users could only access their own data.

I also ran into issues with state not updating properly after login and logout. Fixing this helped me better understand how data flows between the API and the UI.

This experience improved my ability to debug full-stack issues and think more carefully about state and data flow.



## What I Learned

- How to structure a full-stack application with clear separation of concerns  
- How JWT authentication and protected routes work in practice  
- Managing async API calls and state in React  
- Debugging issues between frontend and backend  


---

## Live Demo

https://seren-task-manager.netlify.app

---

## Backend API

https://task-manager-api-032o.onrender.com

---

## Features

- User registration and login
- JWT-based authentication
- Protected API routes
- Create, delete and manage tasks
- Tasks linked to authenticated users
- Persistent data using MongoDB
- Clean, responsive UI

---

## Tech Stack

### Frontend
- React
- CSS

### Backend
- Node.js
- Express
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

---

## Architecture Notes

The frontend and backend are deployed separately (Netlify and Render).

Authentication is handled via JWT stored client-side and sent in the Authorization header.

All task operations are scoped to the authenticated user.
