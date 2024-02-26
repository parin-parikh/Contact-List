# Contact List Application README

## Overview

This project is my first full-stack application—a contact list application that allows users to create, read, update, and delete contacts. It features a user-friendly interface where contacts are displayed in a table with options to update or delete each contact. The update function is facilitated through a modal popup form, pre-filled with the contact's current information for easy editing. This application is built using Flask for the backend, SQLAlchemy as an ORM for database interactions, and React for the frontend. Flask-CORS is also utilized to handle cross-origin requests.

One of the most challenging aspects of this project was establishing a connection between the backend and the frontend, along with making changes to the database. This learning experience was invaluable in understanding the full scope of full-stack development.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

### Installation

First, clone this repository to your local machine. Then, navigate to the project directory and install the required backend and frontend dependencies.

#### Backend Setup

1. Create a backend folder:
2. 2. Navigate to the backend directory:
   ```
    cd backend
   ```
3. Install Flask and other backend dependencies:
   ```
   pip install Flask Flask-SQLAlchemy flask-cors
   ```
4. Run the Flask application:
   ```
   python main.py
   ```

#### Frontend Setup

1. Create a virtual environment:
   ```
   npm create vite@latest filename -- --template react
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install the necessary npm packages:
   ```
   npm install
   ```
4. Start the React application:
   ```
    npm run dev
   ```

## Features

- **Create**: Users can add new contacts via a form. Upon submission, the new contact is displayed in the table.
- **Read**: All contacts are listed in a table, allowing users to easily view contact information.
- **Update**: Each contact has an associated 'Update' button. Clicking this button opens a modal with a form pre-filled with the contact's information. Users can modify the information and save changes, which immediately updates the contact's display in the table.
- **Delete**: A 'Delete' button next to each contact allows users to remove a contact from the list. Clicking this button deletes the contact row entirely.

## Technologies Used

- **Backend**: Python, Flask
- **ORM**: SQLAlchemy
- **Frontend**: React
- **Cross-Origin Requests Handling**: Flask-CORS

## Project Structure

- `main.py`: Flask application setup and routes.
- `models.py`: SQLAlchemy models for database interactions.
- `frontend/`: Contains React application files and components.
- `config.py`: SQLALCHEMY database

## Contributing

Contributions to this project are welcome! Please fork the repository and submit a pull request with your proposed changes.
