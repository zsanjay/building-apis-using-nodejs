# Node JS MongoDB with Mongoose: Async CRUD Operations

This project demonstrates how to interact with a MongoDB database using Mongoose in a Node.js application to perform CRUD (Create, Read, Update, Delete) operations asynchronously.

### Requirements

Node.js (v16.20.x or higher)
MongoDB (either locally or using a cloud service like MongoDB Atlas)

### Setup

#### 1. Install Dependencies

Make sure you have Node.js installed. Then, clone the repository or create a new Node.js project and install the necessary dependencies.

##### Initialize a new Node.js project (if not already initialized)
```npm init -y```

##### Install dependencies
```npm install```

##### To start the project in dev environment 
```npm run dev```


#### 2. MongoDB Setup

Ensure MongoDB is running locally or you can use a MongoDB Atlas cluster.

If running MongoDB locally, the default connection string is usually 
```mongodb://localhost:27017/yourDatabaseName```.

For MongoDB Atlas, you can obtain the connection string from your Atlas cluster and 
replace <username>, <password>, and <dbname> accordingly.

### Testing the Application

You can test the CRUD operations using Postman or cURL by making HTTP requests to the following endpoints:

##### Employee API endpoints

POST /employees - Create a new employee.
GET /employees - Fetch all employees.
PUT /employees - Update an employee by ID.
DELETE /employees - Delete an employee by ID.
GET /employees/:id - Get an employee by ID.

##### User API endpoints

GET /users - Fetch all users.
PUT /users - Update a user by ID.
DELETE /users - Delete a user by ID.
GET /users/:id - Get a user by ID.

##### Auth API endpoints

POST /register - Create a new user.
POST /auth - Get the access token and refresh token in cookie using user username and password.
GET /refresh - Get the access token using refresh token which is stored in cookie.
GET /logout - Removes the refresh token from the database and clear the cookie.

### Application Logs

Every request is logged and data is maintained in the reqLog.txt file.


Thank you, give star and fork the repository if you want to learn, how to build APIs using Nodejs.





