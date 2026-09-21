# User Authentication Endpoints

- [POST /user/register](#post-userregister)
- [POST /user/login](#post-userlogin)

---

## `POST /user/register`

Registers a new user in the system. Validates input, hashes the password, creates the user document in MongoDB, and returns a JWT auth token along with the created user.

## Description

This endpoint creates a new user account. It performs the following steps:

1. Validates the incoming request body using `express-validator` rules defined on the route.
2. Checks that `fullName`, `email`, and `password` are present in the request body.
3. Hashes the plain-text password using `bcrypt`.
4. Creates a new user document in the database.
5. Generates a JWT authentication token for the newly created user.
6. Returns the token and the created user object.

---

## Request

### Headers

| Header         | Value              | Required |
|----------------|--------------------|----------|
| Content-Type   | `application/json` | Yes      |

### Body Parameters

| Field                 | Type   | Required | Validation Rules                                      |
|-----------------------|--------|----------|--------------------------------------------------------|
| `fullName.firstName`  | String | Yes      | Minimum 3 characters                                    |
| `fullName.lastName`   | String | No       | Minimum 2 characters (only validated at schema level)   |
| `email`                | String | Yes      | Must be a valid email format, minimum 5 characters      |
| `password`             | String | Yes      | Minimum 6 characters (enforced at schema level)          |

### Example Request Body

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

---

## Responses

### ✅ 201 Created

Returned when the user is successfully created.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "createUser": {
    "_id": "652f1b2e8a1c2d3e4f5a6b7c",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$hashedPasswordString...",
    "createdAt": "2026-09-22T10:00:00.000Z",
    "updatedAt": "2026-09-22T10:00:00.000Z",
    "__v": 0
  }
}
```
---

### ❌ 400 Bad Request

Returned when `express-validator` validation fails (e.g. invalid email format or `firstName` shorter than 3 characters).

```json
{
  "errors": [
    {
      "type": "field",
      "value": "jo",
      "msg": "enter a minimum length of 3 character of name",
      "path": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

---

### ❌ 500 Internal Server Error

Returned when an unexpected error occurs during user creation (e.g. duplicate email causing a MongoDB unique constraint error, database connection failure, etc.).

```json
{
  "message": "internal server error",
  "error": {}
}
```
---

## Field Validation Summary

| Field                | Enforced By          | Rule                                      |
|----------------------|-----------------------|--------------------------------------------|
| `email`               | Route (`express-validator`) | Must be a valid email |
| `fullName.firstName`  | Route (`express-validator`) | Minimum 3 characters |
| `fullName.firstName`  | Schema (Mongoose)     | Minimum 3 characters |
| `fullName.lastName`   | Schema (Mongoose)     | Minimum 2 characters (not validated at route level) |
| `email`                | Schema (Mongoose)     | Required, unique, minimum 5 characters |
| `password`             | Schema (Mongoose)     | Required, minimum 6 characters (not validated at route level) |

---

## Notes for Improvement

- Add route-level validation for `password` (e.g. `body('password').isLength({ min: 6 })`) since it's currently only enforced at the schema level, which produces a less user-friendly Mongoose validation error rather than a clean `400` response.
- Add route-level validation for `fullName.lastName` if it should be required or length-checked before hitting the database.
- Exclude `password` from the `createUser` object in the success response.
- Move the "required fields" check inside the `try/catch` block, or replace `throw new Error(...)` with `return response.status(400).json({ message: "enter all required fields" })`.

---

## `POST /user/login`

Authenticates an existing user by email and password, and returns a JWT auth token along with the user object.

### Description

This endpoint logs in a user. It performs the following steps:

1. Validates the incoming request body using `express-validator` rules defined on the route.
2. Checks that `email` and `password` are present in the request body.
3. Looks up the user by `email` in the database.
4. Compares the provided password against the stored hashed password using `bcrypt`.
5. Generates a JWT authentication token for the matched user.
6. Returns the token and the user object.

### Request

#### Headers

| Header         | Value              | Required |
|----------------|--------------------|----------|
| Content-Type   | `application/json` | Yes      |

#### Body Parameters

| Field      | Type   | Required | Validation Rules                    |
|------------|--------|----------|---------------------------------------|
| `email`    | String | Yes      | Must be a valid email format          |
| `password` | String | Yes      | Minimum 6 characters                  |

#### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

### Responses

#### ✅ 200 ok

Returned when login succeeds.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userFind": {
    "_id": "652f1b2e8a1c2d3e4f5a6b7c",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$hashedPasswordString...",
    "createdAt": "2026-09-22T10:00:00.000Z",
    "updatedAt": "2026-09-22T10:00:00.000Z",
    "__v": 0
  }
}
```