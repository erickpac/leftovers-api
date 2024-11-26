# LeftLovers Market API

API for the food waste reduction app, providing endpoints for managing store posts, real-time inventory updates, and location-based food search.

## Project Structure

```
left-lovers-api
├── src
│   ├── index.ts                # Main entry point of the application
│   ├── app.ts                  # Application setup and configuration
│   ├── middlewares.ts          # Custom middleware functions
│   ├── components              # Controllers for handling requests
│   │   ├── index.ts            # Exports all component controllers
│   │   ├── component           # Individual component controllers
│   │   │   ├── controller.ts   # Contains the logic for a specific component
│   │   │   ├── index.ts        # Exports component routes
│   │   │   └── network.ts      # Sets up component routes
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

## License

This project is licensed under the MIT License.
