﻿
# Product Management APP

## Introduction
A mern stack application for managing products lists with user authentication.The application allows users to create, view, update, and delete products.

## Features
The key features of the application.

- validation and error handling for API requests
- authentication and authorization mechanisms to ensure secure access to the API endpoints
- APIs for retrieving product statistics, such as updating and deleting

## Deployed link
[https://kyz-frontend.vercel.app/]()


## Demo link
[https://drive.google.com/file/d/1wmMq2BKx9gismauXi04O-YlBbD-oXvBH/view?usp=sharing]()

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone our repository ``
- Open the code in your VS code, open Backend folder in the terminal by running `cd Backend`
-Now run `npm install` or `npm i` which will install all the required packages of node
- After installation, now run `npm run server` and  you will see `server is listening on 5550` 
- Simlutaniously, open a new terminal and run `cd frontend` by which you get into frontend folder
- Now here, run `npm install` or `npm i` which will install all the required packages of react aswell
- After installation, now run `npm run dev` and  you will see a new window will be opening in the default browser which is running on port `http://localhost:5173`
- Open MongoDb compass and url `mongodb://localhost:27017/product` which will create database collection named product
- Now you see app running, you can click on `Register` to sign in and after that you will be redirected to login page where you explore more.


## Usage
As there are some validations please follow this when using -
 - Register first with name, username, email and password
 - After registering anytime you can logout and login with your credentials


## API Endpoints
Backend Applications provide a list of API endpoints
- POST /api/user/register
- POST /api/user/login 
- GET /api/product/${id} 
- POST /api/product/create 
- DELETE /api/product${id} 
- GET /api/product
- POST /api/product/schedule

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- MySql Database
- Express JS
- React JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- `mongoose`<br/>
  connecting MongoDB to the Node js server
- `jsonwebtoken`<br/>
  generate a token for securely transmitting information
- `nodemon`<br/>
  It monitors your project and automatically restarts when detects any changes.
- `cors`<br/>
  allowing browser should permit loading resources
- `dotenv`<br/>
  to store “environment variables”
- `bycryptjs`<br/>
to hash the passwords of users

#### Frontend
- `axios`<br/>
  JavaScript library to make HTTP requests or fetching data
- `react-router-dom`<br/>
  implementaion of dynamic routing 

#### Cloud Deployment

- `render`
used render for deploying the node js (Backend)
- `vercel`
used vercel for deploying the react js (frontend)
