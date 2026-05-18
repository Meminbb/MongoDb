# MovieStream MongoDB App

## Overview

MovieStream is a simple CRUD web application built with MongoDB and Node.js.

The project redesigns a relational movie streaming database into a MongoDB document model and provides a web interface to interact with the data.

The app supports:
- Movies
- Genres
- Customers
- Sales

---

# Features

## Movies
- List movies
- Search movies
- Create movies
- Edit movies
- Delete movies

## Genres
- List genres
- Create genres
- Delete genres
- Prevent deletion if referenced by movies

## Customers
- List customers
- Search customers
- Create customers
- Delete customers

## Sales
- List sales
- Create sales
- Delete sales
- Show related customer and movie information

---

# Stack Used

## Backend
- Node.js
- Express.js
- MongoDB Driver

## Database
- MongoDB Atlas

## Frontend
- HTML
- Bootstrap
- Vanilla JavaScript

---

# Project Structure

```bash
moviestream-app/
│
├── server.js
├── seed.js
├── package.json
├── .env
│
├── db/
│   └── mongo.js
│
├── routes/
│   ├── movies.js
│   ├── genres.js
│   ├── customers.js
│   └── sales.js
│
└── public/
    ├── index.html
    ├── movies.html
    ├── genres.html
    ├── customers.html
    ├── sales.html
    └── app.js
```

---

# Installation

## 1. Clone repository

```bash
git clone YOUR_REPOSITORY_URL
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure environment variables

Create a `.env` file:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=3000
```

---

## 4. Seed database

```bash
node seed.js
```

---

## 5. Start application

```bash
npm start
```

---

# Open in Browser

```txt
http://localhost:3000
```

---

# Deployment

The application is deployed using Render and MongoDB Atlas.

Public URL:

```txt
PASTE_DEPLOYMENT_URL_HERE
```

---

# Screenshots

## Dashboard

(Add screenshot here)

## Movies Page

(Add screenshot here)

## Customers Page

(Add screenshot here)

---

# Why This Stack?

This stack was selected because:
- Express is lightweight and easy to integrate with MongoDB
- MongoDB Atlas provides free cloud hosting
- Vanilla JavaScript keeps the frontend simple
- Bootstrap speeds up UI development

The goal of the project was functionality and database interaction rather than frontend complexity.