Task Manager (Full Stack)

A full-stack task management application built with React and a Node/Express REST API.

This project demonstrates user authentication, protected routes, and user-specific data handling using JWT and MongoDB.

The focuses on clean architecture, separation of concerns, and keeping the structure production-ready.

Live Demo

https://seren-task-manager.netlify.app

Backend API

https://task-manager-api-032o.onrender.com

Features

User registration and login

JWT-based authentication

Protected API routes

Create, delete and manage tasks

Tasks linked to authenticated users

Persistent data using MongoDB

Clean, responsive UI

Tech Stack

Frontend:

React

CSS

Backend:

Node.js

Express

MongoDB (Atlas)

Mongoose

JSON Web Tokens (JWT)

bcrypt

Architecture Notes

The frontend and backend are deployed separately (Netlify + Render).
Authentication is handled via JWT stored client-side and sent in the Authorization header.

All task operations are scoped to the authenticated user.
