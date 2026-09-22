# User Authentication Endpoints

- [POST /user/register](#post-userregister)
- [POST /user/login](#post-userlogin)
- [GET /user/userProfile](#get-useruserprofile)
- [GET /user/logout](#get-userlogout)

---

## `POST /user/register`

Registers a new user in the system. Validates input, hashes the password, creates the user document in MongoDB, and returns a JWT auth token along with the created user.

---

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

#### ✅ 200 OK

Returned when login succeeds. The JWT is also set as a `token` cookie on the response (via `response.cookie('token', token)`), in addition to being returned in the JSON body.

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

**Response Cookie**

| Cookie  | Value        | Notes                                    |
|---------|--------------|-------------------------------------------|
| `token` | JWT auth token | Set via `response.cookie('token', token)`; no `httpOnly`, `secure`, or `sameSite` options are currently set. |

#### ❌ 400 Bad Request

Intended to be returned when validation fails, required fields are missing, or the email/password combination is invalid:

```json
{ "message": "all fields are required" }
```
```json
{ "message": "enter a email and password" }
```
```json
{ "message": "invalid email and password" }
```

#### ❌ 500 Internal Server Error

Returned when an unexpected error occurs inside the `try` block — including the "user not found" case described below.

```json
{ "message": "internal server error", "error": {} }
```
## Authentication

Both endpoints below are protected by `authMiddleware`. Requests must supply a valid JWT, either as a `token` cookie or as a Bearer token in the `Authorization` header.

| Header / Cookie          | Value                          | Required |
|---------------------------|---------------------------------|----------|
| `Cookie: token`            | JWT issued by register/login    | One of these two |
| `Authorization`            | `Bearer <JWT>`                  | One of these two |

`authMiddleware` verifies the token, checks it against a token blacklist (used for logout), and attaches the matched user document to `request.user` before calling `next()`.

---

## `GET /user/userProfile`

Returns the profile of the currently authenticated user.

### Description

1. `authMiddleware` verifies the JWT and attaches the authenticated user to `request.user`.
2. The controller returns that user object in the response.

### Request

| Header / Cookie          | Value                | Required |
|---------------------------|-----------------------|----------|
| `Cookie: token` or `Authorization: Bearer <JWT>` | Valid JWT | Yes |

No request body.

### Responses

#### ✅ 200 OK

```json
{
  "user": {
    "_id": "652f1b2e8a1c2d3e4f5a6b7c",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2026-09-22T10:00:00.000Z",
    "updatedAt": "2026-09-22T10:00:00.000Z",
    "__v": 0
  }
}
```

#### ❌ 404 Not Found

Returned by `authMiddleware` when no token is supplied, or when token verification fails.

```json
{ "message": "token is not found!" }
```
```json
{ "message": "unauthorized user", "error": {} }
```

#### ❌ 401 Unauthorized

Returned by `authMiddleware` when the supplied token is on the blacklist (i.e. the user already logged out).

```json
{ "message": "user unauthorized" }
```

---

## `GET /user/logout`

Logs the authenticated user out by clearing the auth cookie and blacklisting the token so it can no longer be used.

### Description

1. `authMiddleware` verifies the JWT and attaches the authenticated user to `request.user`.
2. The controller clears the `token` cookie.
3. The token (from the cookie or the `Authorization` header) is added to the blacklist collection.
4. A success message is returned.

### Request

| Header / Cookie          | Value                | Required |
|---------------------------|-----------------------|----------|
| `Cookie: token` or `Authorization: Bearer <JWT>` | Valid JWT | Yes |

No request body.

### Responses

#### ✅ 200 OK

```json
{ "message": "user logout is successful" }
```

#### ❌ 404 Not Found

Returned by `authMiddleware` when no token is supplied, or when token verification fails.

```json
{ "message": "token is not found!" }
```
```json
{ "message": "unauthorized user", "error": {} }
```

#### ❌ 401 Unauthorized

Returned by `authMiddleware` when the supplied token is already blacklisted.

```json
{ "message": "user unauthorized" }
```

#### ❌ 500 Internal Server Error

Returned if blacklisting the token fails.

```json
{ "message": "internal server error", "error": {} }
```
