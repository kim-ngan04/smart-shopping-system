# README - ITSS-20242 Project

## Project Introduction
This is a full-stack web application built with **React.js** for the frontend and **Node.js** for the backend. The project is a food-related application that allows users to view and manage food items.

## Project Structure
```

ITSS-20242/
├── client/          \# React.js frontend application
├── server/          \# Node.js backend application
├── food.sql         \# Database file
└── README.md        \# This instruction file

````

## System Requirements
Before you begin, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn
- MySQL, up and running
- Git

## Installation and Running the Project

### 1. Clone the repository
```bash
git clone [https://github.com/kim-ngan04/smart-shopping-system](https://github.com/kim-ngan04/smart-shopping-system)
cd ITSS-20242
````

### 2\. Set up the database

1.  Create a MySQL database named `food`:

    ```bash
    mysql -u root -p
    CREATE DATABASE food;
    exit
    ```

2.  Import data from the SQL file:

    ```bash
    mysql -u root -p food < food.sql
    ```

### 3\. Install the backend

1.  Navigate to the server directory:

    ```bash
    cd server
    ```

2.  Install the necessary dependencies:

    ```bash
    npm install
    ```

3.  Start the backend server:

    ```bash
    npm run dev
    ```

    The server will be running at `http://localhost:5000`.

### 4\. Install the frontend

1.  Open a new terminal window and navigate to the client directory:

    ```bash
    cd ../client
    ```

2.  Install the necessary dependencies:

    ```bash
    npm install
    ```

3.  Start the frontend application:

    ```bash
    npm start
    ```

    The React application will automatically open in your browser at `http://localhost:3000`.

## Usage Guide

  - Access the frontend at `http://localhost:3000`
  - The backend API is available at `http://localhost:5000`
  - Use the application to view, search, and manage food items.

<!-- end list -->

```
```
