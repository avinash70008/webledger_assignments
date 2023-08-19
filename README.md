# webledger_assignments

Project Documentation
Repository Structure
Clone the Repository:

Clone the repository using the following command:

bash
Copy code
git clone https://github.com/avinash70008/webledger_assignments.git
Navigate to Backend and Frontend:

Open two separate terminals and navigate to the backend and frontend folders using the following commands:

bash
Copy code
cd webledger_assignments/client
bash
Copy code
cd webledger_assignments/server
Install Dependencies:

Install the required Node.js modules for both the frontend and backend using the following command in each terminal:

Copy code
npm install
Frontend Features
UI Enhancements:

The frontend includes UI enhancements such as sorting and filtering of items by price and a search bar on individual pages for burger, pizza, and biryani.

Item Details:

Clicking on an item leads to a detailed view with additional information about that item.

Strike Price and Cart:

Items have a strike price displayed as the original price with a 10% discount. Clicking "Add to Cart" adds the item to the cart, which can be viewed later.

User Authentication:

Users need to register and log in to purchase items. If not logged in, they are prompted to register. After successful registration and login, they can proceed to purchase.

Backend Features
Data Models:

The backend includes models for pizza, burger, biryani, and user authentication.

Controllers:

Controllers handle user requests and interact with the models. They manage data flow and logic for different features.

MongoDB Integration:

The backend uses MongoDB to store customer form details and other necessary data.

Tools Used
MongoDB:

MongoDB is used as the database system to store various data, including user details and customer form submissions.

Postman:

Postman might have been used to test the backend API endpoints during development.

VSCode:

Visual Studio Code is likely the chosen code editor for developing both the frontend and backend.

Node.js:

Node.js is the server-side runtime environment used to build the backend services.

Express.js:

Express.js is used as the backend framework to create RESTful APIs and manage routing.

React.js:

React.js is the frontend library used to create the user interface components.

Redux.js:

Redux.js might be used for state management in the frontend, especially when dealing with global state.

GitHub:

GitHub is used for version control and collaborative development of the project.

Documenting the Features
Introduction:

Provide a brief introduction to the project, its purpose, and the technologies used.

Repository Structure:

Detail the structure of the repository, including the "client" and "server" folders.

Installation:

Explain how to clone the repository and install dependencies for both the frontend and backend.

Frontend Features:

Describe the UI enhancements, item details, strike price and cart functionality, and user authentication process.

Backend Features:

Explain the data models, controllers, and how MongoDB is integrated into the backend.

Tools Used:

List and briefly explain the tools used in the project, including their roles.


