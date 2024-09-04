# Task Management Application

## Project Overview

This project is a simple task management application built with React.js for the frontend and Node.js with Express for the backend. It allows users to:

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Rearrange the order of tasks using drag-and-drop

## Features

- **Frontend:** React.js, React Router, basic CSS/SCSS for styling
- **Backend:** Node.js with Express, MVC architecture
- **Testing:** Jest for unit tests
- **Data Persistence:** In-memory data store (array)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

### Running the Application
cd backend
npm start

cd ../frontend
npm start

### Running Tests
cd frontend
npm test

cd backend
npm test

### Assumptions & Decisions
- Data Persistence: For simplicity, tasks are stored in an in-memory array. In a production environment, this would be replaced with a database.
- Styling: Basic CSS/SCSS is used to keep the UI clean and simple.
- Task Order: Tasks can be rearranged using drag-and-drop functionality.
- Error Handling: Basic error handling with appropriate status codes is implemented.