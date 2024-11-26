# LeftLovers Market API

API for the food waste reduction app, providing endpoints for managing store posts, real-time inventory updates, and location-based food search.

## Project Structure

```
left-lovers-api

├── prisma                      # Prisma ORM configuration and related files
│   ├── migrations              # Stores database migration files
│   ├── schema.prisma           # Defines the Prisma schema for the database
│   └── seeds.ts                # Script for seeding the database with initial data
├── src                         # Source code of the application
│   ├── index.ts                # Main entry point of the application
│   ├── app.ts                  # Sets up and configures the application
│   ├── middlewares.ts          # Custom middleware functions for the application
│   ├── components              # Contains application components
│   │   ├── index.ts            # Exports all component controllers
│   │   ├── component           # Individual component controllers
│   │   │   ├── controller.ts   # Contains the logic for a specific component
│   │   │   ├── index.ts        # Exports component routes
│   │   │   └── network.ts      # Sets up component routes
│   ├── database                # Contains database configuration and setup files
│   │   └── index.ts            # Initializes and configures the database connection
│   ├── router                  # Contains route definitions
│   │   └── index.ts            # Main router setup
│   └── types                   # Custom TypeScript types
│       └── index.ts            # Type definitions
├── package.json                # Project metadata and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Installation

To install the dependencies, run:

```
yarn install
```

## Running the Application

To start the application, use the following command:

```
yarn dev
```

## Databae

### Run Prisma Migrations

After defining the schema, run the following commands to generate the migrations and apply them to your database:

```
npx prisma migrate dev --name init
```

### Generate Prisma Client

Generate the Prisma Client to interact with your database in your Express app:

```
npx prisma generate
```

### Run the Seeding Script

Run the seeding script using Prisma:

```
npx prisma db seed
```

## License

This project is licensed under the MIT License.
