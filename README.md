# RESTful API

This is a RESTful API example based on Nestjs and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for Nestjs.

This repository contains a Nestjs application that implements Rest APis for Blogs using MongoDB Atlas.

## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ nest start

# watch mode
$ nest start --watch

```

## Available API Endpoints For Blogs:

### Get all Blogs ( GET request ) with pagination

```bash

$ http://localhost:3000/blogs

### Create a new Blog( POST request )

- `http://localhost:3000/books`

{
"title": "Wings of Fire",
"author": "Dr.A.P.J Abdul Kalam",
"summary": "Biography of Dr.A.P.J Abdul Kalam"
}

### Get a single book by id( GET request )

- `http://localhost:3000/books/654b8e1f24ffce486c58b79d`

### Update a book by id( PATCH request )

- `http://localhost:3000/books/654b8e1f24ffce486c58b79ds`

{
"title":"Rich Dad, Poor Dad",
"author":"Robert T Kiosaki",
"summary":"Money Management"
}

### Delete a book by id( DELETE request )

- `http://localhost:3000/books/654b8e1f24ffce486c58b79ds`

```

## Available API Endpoints For Users:

### Get all Blogs ( GET request ) with pagination

```bash
$ npm install
```

## To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/singhsharad529/brewapps-assignment.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR MONGODB URI
DB_NAME=DATABASE NAME OF YOUR CHOICE
DB_USER=DATABASE USER
DB_PASS=DATABASE USER PASSWORD
```

Step 4: Start the API by

```bash
npm start
```

## Deployment:

## Author

- [**Sharad Kumar Singh**](https://singhsharad529.github.io/sharad-portfolio/)

## License

This project is licensed under the MIT License.

```

```
