# API Documentation

## User Routes

Base path: `/user` 

### POST /register

Registers a new user.

**Required Data (body):**
```json
{
  "fullName": {
    "firstName": "string, min 3 characters, required",
    "lastName": "string, optional"
  },
  "email": "string, valid email, required",
  "password": "string, required"
}
```

**Status Codes:**
- `201` - User created successfully. Returns `{ token, createUser }`
- `400` - Validation error (invalid email / firstName < 3 chars) or user already exists. Returns `{ errors: [...] }` or `{ message }`
- `404` - Missing required field (fullName, email, or password). Returns `{ message }`
- `500` - Internal server error. Returns `{ message, error }`

---

### POST /login

Logs in an existing user.

**Required Data (body):**
```json
{
  "email": "string, valid email, required",
  "password": "string, min 6 characters, required"
}
```

**Status Codes:**
- `200` - Login successful. Returns `{ token, userFind }`. Sets `token` cookie
- `400` - Validation error, missing email/password, or invalid email/password. Returns `{ message }` or `{ errors: [...] }`
- `500` - Internal server error. Returns `{ message, error }`

---

### GET /userProfile

Fetches the authenticated user's profile.

**Required Data:**
- Auth token (cookie `token` or `Authorization: Bearer <token>` header) via `authMiddleware_user`

**Status Codes:**
- `200` - Returns `{ user }`

---

### GET /logout

Logs out the authenticated user and blacklists the token.

**Required Data:**
- Auth token (cookie `token` or `Authorization: Bearer <token>` header) via `authMiddleware_user`

**Status Codes:**
- `200` - Logout successful. Returns `{ message }`. Clears `token` cookie
- `500` - Internal server error. Returns `{ message, error }`

---

## Driver Routes

Base path: `/driver` (assumed prefix)

### POST /register

Registers a new driver.

**Required Data (body):**
```json
{
  "fullName": {
    "firstName": "string, min 3 characters, required",
    "lastName": "string, optional"
  },
  "email": "string, valid email, required",
  "password": "string, required",
  "status": "string, enum ['active', 'inactive'], required",
  "vehical": {
    "color": "string, min 3 characters, required",
    "NumberPlate": "string, min 3 characters, required",
    "capacity": "number, integer, min 1, required",
    "vehicalType": "string, enum ['car', 'motorcycle', 'auto'], required"
  },
  "location": {
    "lat": "number, required",
    "lng": "number, required"
  }
}
```

**Status Codes:**
- `200` - Driver created successfully. Returns `{ token, createDriver }`
- `400` - Validation error, missing required field, driver already exists, or password not hashed. Returns `{ message, error }` or `{ message }`
- `500` - Internal server error. Returns `{ message, error }`

---

### POST /login

Logs in an existing driver.

**Required Data (body):**
```json
{
  "email": "string, valid email, required",
  "password": "string, min 6 characters, required"
}
```

**Status Codes:**
- `200` - Login successful. Returns `{ message, token, findDriver }`. Sets `token` cookie
- `400` - Validation error. Returns `{ message, error }`
- `404` - Invalid email or password. Returns `{ message }`
- `500` - Internal server error. Returns `{ message }`

---

### GET /driverprofile

Fetches the authenticated driver's profile.

**Required Data:**
- Auth token (cookie `token` or `Authorization: Bearer <token>` header) via `authMiddleware_driver`

**Status Codes:**
- `200` - Returns `{ driver }`

---

### GET /logout

Logs out the authenticated driver and blacklists the token (uses `userLogout` controller).

**Required Data:**
- Auth token (cookie `token` or `Authorization: Bearer <token>` header) via `authMiddleware_driver`

**Status Codes:**
- `200` - Logout successful. Returns `{ message }`. Clears `token` cookie
- `500` - Internal server error. Returns `{ message, error }`
