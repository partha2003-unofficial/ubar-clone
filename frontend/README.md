# Uber Clone – Frontend

A responsive ride-booking frontend built with **React**, **React Router** and **Tailwind CSS**. It includes a landing page plus separate login and signup flows for **riders** and **drivers**. Every page works on mobile and switches to a split-screen layout on desktop.

> This repository currently contains the frontend only. Form data is held in component state and is not yet sent to a backend.

<!-- Add screenshots here, e.g.
![Home – desktop](./docs/home-desktop.png)
![Login – desktop](./docs/login-desktop.png)
![Login – mobile](./docs/login-mobile.png)
-->

## Features

- Landing page with a "Get Started" call to action
- Separate authentication pages for users and drivers
  - User login and signup
  - Driver login and signup
- One-click switching between the user and driver login pages
- Mobile-first design that adapts to tablet and desktop
- Controlled forms with built-in browser validation (`required`, `type="email"`)
- Accessible forms: real `<label>` elements, `autoComplete` hints and visible focus rings

## Tech Stack

| Area | Tool |
| --- | --- |
| UI library | React |
| Routing | React Router (`react-router-dom`) |
| Styling | Tailwind CSS v4 |

## Pages and Routes

| Page | File | Route |
| --- | --- | --- |
| Home | `Home.jsx` | `/` |
| User login | `UserLogin.jsx` | `/login` |
| User signup | `UserSignUp.jsx` | `/signup` |
| Driver login | `DriverLogin.jsx` | `/driver-login` |
| Driver signup | `DriverSignUp.jsx` | `/driver-signup` |

The pages link to each other with these paths, so keep them the same in your router:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import DriverLogin from './pages/DriverLogin'
import DriverSignUp from './pages/DriverSignUp'

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<UserLogin />} />
    <Route path='/signup' element={<UserSignUp />} />
    <Route path='/driver-login' element={<DriverLogin />} />
    <Route path='/driver-signup' element={<DriverSignUp />} />
  </Routes>
)

export default App
```

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── UserLogin.jsx
│   ├── UserSignUp.jsx
│   ├── DriverLogin.jsx
│   └── DriverSignUp.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Each page is a single self-contained file, so there are no shared components to import.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL printed in the terminal (Vite uses `http://localhost:5173` by default).

### Build for production

```bash
npm run build
```

## Responsive Behaviour

| Screen width | Home | Login and signup pages |
| --- | --- | --- |
| Below 768px (mobile) | Full-screen photo with a white bottom sheet | Single column, form at the top and the switch button or terms pinned to the bottom |
| 768px and up (`md`) | The sheet becomes a floating card at the bottom-left | Same as mobile |
| 1024px and up (`lg`) | Same as `md` | Split screen: photo panel with a caption on the left, form centred on the right |

## Global CSS Setup

Make sure the app fills the whole screen. If you started from the Vite template, remove the default rules in `App.css` and `index.css` (a `max-width` on `#root` and `display: flex` on `body`). Otherwise the Home background image won't reach the screen edges. A minimal `index.css`:

```css
@import "tailwindcss";

html, body, #root {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}
```

## Customisation

- **Background photo:** the image URL is set in the `bg-[url(...)]` class on `Home.jsx` and inside the desktop panel (`<aside>`) of the four auth pages. For sharp results on large screens, host a high-resolution image (1920px wide or more) in `public/` and use `bg-[url(/uber-bg.jpg)]`.
- **Logo:** the `<img>` at the top of each page. Replace the `src` with your own file.
- **Desktop caption:** the text inside the `<aside>` on each auth page.
- **Switch-role buttons:** green for "Sign in as driver" and yellow for "Sign in as user". Change the `bg-green-700` and `bg-yellow-600` classes to adjust them.
- **Tailwind v3:** the photo overlay uses `bg-linear-to-t`, which is v4 syntax. On Tailwind v3, change it to `bg-gradient-to-t`.

## How the Forms Work

Each login and signup page keeps the field values in `useState`. On submit, `handleSubmit` prevents the default page reload, stores the values in a state object (`userData` or `driverData`) and clears the inputs. Signup pages store the name as `{ fullName: { firstName, lastName }, email, password }`.

## Roadmap

- [ ] Connect the forms to a backend API (Node.js, Express and MongoDB, to complete the MERN stack)
- [ ] Add authentication with JWT and protected routes
- [ ] Add form error messages and loading states
- [ ] Add ride booking and driver dashboard pages

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes and open a pull request.

## License

Add a license file (for example MIT) and update this section.
