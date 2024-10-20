# Student Enrollment Form

## Project Overview
The Student Enrollment Form allows users to input student details and store them in a database. The application is built using HTML, Bootstrap for styling, and jQuery for AJAX requests to the [login2explore](http://api.login2explore.com:5577) API.

## Project Structure
- `resources/static/index.html`: Contains the HTML form for student enrollment.
- `resources/static/script.js`: Contains JavaScript code for handling form submission and AJAX requests.
- `resources/static/styles.css`: Contains CSS styles for the application (if any).

## Features
- Users can input the following student details:
  - Roll No (Primary Key)
  - Full Name
  - Class
  - Birth Date
  - Address
  - Enrollment Date
- The form includes three buttons:
  - **Save**: Saves student data to the database.
  - **Update**: Updates existing student data in the database.
  - **Reset**: Resets the form fields.
  
## API Integration
This project integrates with the [login2explore API](http://api.login2explore.com:5577) for data storage and retrieval. The API endpoints used are:
- **PUT**: To save new student data.
- **UPDATE**: To update existing student data.

## How to Run the Project
1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
