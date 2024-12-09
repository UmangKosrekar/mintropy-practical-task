# Library Management API

## Description

This is a simple Node.js application for managing a library of books. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on books in the library.

---

## Setup Instructions

1. Clone the repository to your local machine.
2. Install the dependencies by running:
   ```bash
   npm install
   ```
3. Configure your environment variables:
   - Copy the `sample_env` file to `.env`.
   - Fill in the required values in the `.env` file.
4. Run the application:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

---

## Environment Variables

Make sure to configure the following variables in your `.env` file (based on `sample_env`):

- Example:
  ```
  PORT=3000
  DATABASE_URL=your_database_url_here
  ```

---

## Response Example

### Success

```json
{
  "status": true,
  "message": "Book Added",
  "data": {
    "_id": "67572f361dee5785780cc992",
    "title": "Book Title",
    "author": "Author Name",
    "isbn": "1234567890",
    "createdAt": "2024-12-09T17:56:06.510Z",
    "updatedAt": "2024-12-09T17:56:06.510Z",
    "__v": 0
  }
}
```

### Error

```json
{
  "status": false,
  "message": "Book not found",
  "data": null,
  "errorCode": "BAD_REQUEST"
}
```

---

## Packages Used

### `cors`

- Usage: Enable CORS for handling cross-origin requests.

### `dotenv`

- Usage: Load environment variables from a `.env` file.

### `express`

- Usage: Create the server and define routes.

### `joi`

- Usage: Validate request data.

### `mongoose`

- Usage: Interact with MongoDB.

### `morgan`

- Usage: Log HTTP requests.

---

## License

This project is licensed under the MIT License.
