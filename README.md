# E-commerce Project

This is an E-commerce project built using AdonisJS, a fully-featured web framework for Node.js. The project includes basic functionalities for managing products and users, including user authentication.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/ecommerce.git
   cd ecommerce

1. **Install dependencies:**

    npm install
   
3. **Install AdonisJS CLI:**

    npm install -g @adonisjs/cli
   
Configuration
1.**Environment Variables:**

Create a .env file in the root directory and add the following environment variables:

NODE_ENV=development
PORT=3333
APP_KEY=your_app_key
HOST=127.0.0.1
LOG_LEVEL=info

DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name

2.**Configure the Hash Module:**

Ensure the hash.ts configuration file exists in the config directory. If it doesn't, you can generate it using the following command: node ace configure @adonisjs/hash

Running the Project

1.**Run Migrations:**

node ace migration:run

2.**Start the Server:**

node ace serve --watch - The server will start on http://localhost:3333.

**Project Structure**
app/Controllers/Http/: Contains the HTTP controllers.
app/Models/: Contains the database models.
config/: Contains the configuration files.
database/migrations/: Contains the database migration files.
start/: Contains the entry point of the application.
**API Endpoints**
Products
GET /api/products: Get all products.
POST /api/products: Create a new product.
GET /api/products/:id: Get a product by ID.
PUT /api/products/:id: Update a product by ID.
DELETE /api/products/:id: Delete a product by ID.
Users
GET /api/users: Get all users.
POST /api/users: Create a new user.
GET /api/users/:id: Get a user by ID.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.
POST /api/users/signin: Sign in a user.
**Environment Variables**
The environment variables are defined and validated in the env.ts file:

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string()
})


**Author**
This project was created by Sergio.


This README provides a comprehensive overview of the project, including installation instructions, configuration details, and information about the API endpoints. It also includes a section on environment variables, explaining how they are defined and validated in the `env.ts` file.This README provides a comprehensive overview of the project, including installation instructions, configuration details, and information about the API endpoints. It also includes a section on environment variables, explaining how they are defined and validated in the `env.ts` file.
