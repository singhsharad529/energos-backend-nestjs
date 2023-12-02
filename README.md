# Backend Application for Blog Site using NestJs

This is a RESTful API example based on Nestjs and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for Nestjs.

This repository contains a Nestjs application that implements Rest APis for Blogs using MongoDB Atlas.

## Description

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
DB_URI=YOUR MONGODB URI
JWT_SECRET=ADD YOUR JWT SECRET
JWT_EXPIRE=ADD EXPIRE TIME FOR JWT TOKEN
```

Step 4: Start the API by

```bash
nest start
```

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

```bash
# Get all Blogs ( GET request ) with pagination

$ http://localhost:3000/blogs?page=2

# Get a single Blog by id( GET request )

$ http://localhost:3000/blogs/656b3d6b8ccc4906bd44a8ed

# Create a new Blog( POST request )

$ http://localhost:3000/blogs/new

{
	  "title": "blog 6",
    "content": "I was born to a single mother named Terri Mason on October 15,1993 in Arlington, Texas where I lived until I was a little over one year old. Now my birth was by no means natural as I was born through in vitro, for while my mom did want children, she never could find a man with whom she truly wanted to spend the rest of her life with.  We lived in a small house with my mom’s best friend, Linda Simons, who I referred to as, “Oma.”",
    "category": "Auto Biography"
}

# Update a blog by id( PUT request )

$ http://localhost:3000/blogs/6569f183011b033a311b169e

{
	  "title": "blog 6",
    "content": "I was born to a single mother named Terri Mason on October 15,1993 in Arlington, Texas where I lived until I was a little over one year old. Now my birth was by no means natural as I was born through in vitro, for while my mom did want children, she never could find a man with whom she truly wanted to spend the rest of her life with.  We lived in a small house with my mom’s best friend, Linda Simons, who I referred to as, “Oma.”",
    "category": "My Experiences"
}

# Delete a blog by id( DELETE request )

$ http://localhost:3000/blogs/65682c7752791f4d19417986

```

## Available API Endpoints For Users:

```bash
# Register with Name,Username,Password( POST request )

$ http://localhost:3000/auth/signup

{
	  "name": "sharad",
    "email": "sharad908@gmail.com",
    "password": "sharad890"
}

# Login with Username,Password( POST request )

$ http://localhost:3000/auth/signup

{
    "email": "singhsingh@gmail.com",
    "password": "sharad123"
}

```

**For each endpoints of blogs you should add Beare Token inside Authorization header**

## Deployment:

## Author

- [**Sharad Kumar Singh**](https://singhsharad529.github.io/sharad-portfolio/)

```

```
