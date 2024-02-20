Show Tracker

Description
Show Tracker is a personal tracking tool designed to help users keep track of their favorite TV shows, movies, and other media content. It offers a user-friendly interface to add, monitor, and manage your personal watchlist.

Installation
To get the Show Tracker up and running on your local machine, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/showtracker.git
Navigate to the project directory:
bash
Copy code
cd showtracker
Install front-end dependencies:
Copy code
npm install
To start the front-end server:
sql
Copy code
npm start
Open a new terminal, navigate to the server directory within the project:
bash
Copy code
cd server
Install back-end dependencies:
Copy code
npm install

Configuration
Within the server directory, create a .env file to store your backend database configuration. Include the following information, customized to your setup:

Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
To start the backend server in development mode, use npm run dev

The application will be hosted on http://localhost:3000.

Usage
After installation and configuration, you can use Show Tracker to add and manage your personal show list. The interface is intuitive, allowing for easy navigation and management of your media content.

Dependencies
Show Tracker relies on several key dependencies to function:

Backend
cors: For enabling CORS.
dotenv: To load environment variables from a .env file.
express: As the web server framework.
mysql: For interacting with MySQL databases.
nodemon: For automatically restarting the node application when file changes are detected.

Frontend
axios: For making HTTP requests from the browser.

Contributing
Contributions are welcome! Please feel free to fork the repository, make your changes, and submit a pull request.

License
This project is open source and available under the MIT License.
