
# Project Title: Event Management



## Project Code and Live Link:

Code Link: https://github.com/programming-hero-web-course-4/b8a9-event-management-moniru005

Live Link: https://mu-event-management2.firebaseapp.com/
## Project Features

Certainly! Here are five key features for an educational event project:

#### Project Design: 
- User-Friendly Interface: Create an intuitive and visually appealing user interface that promotes easy navigation and engagement.
- Responsive Design: Ensure the project is accessible on various devices, such as desktops, tablets, and mobile phones, by implementing responsive design principles.
- Modern UI Framework: Utilize a modern UI framework like React or Angular to build a dynamic and interactive user experience.
  

#### Authentication:
- Email/Password Authentication: Implement a secure email/password authentication system to allow users to create accounts and sign in securely.
- Google Popup Sign-in Authentication: Enable users to sign in using their Google accounts by integrating Google OAuth or Firebase Authentication for a seamless login experience.

#### Service Details in Private Route:
- Private Routes: Create protected routes that require authentication for access, ensuring that only authenticated users can view sensitive information.
- Service Details: Display educational event details, such as schedules, course descriptions, and instructor information, on private routes accessible only to authenticated users.

#### Context API:
- State Management: Utilize the Context API (or a state management library like Redux) to manage global application state efficiently.
- User Context: Create a User Context to manage user-related data and authentication status throughout the application.

#### HelmetProvider for Page Title:
- Dynamic Page Titles: Use the Helmet library (or a similar tool) to dynamically set page titles based on the content being viewed, improving SEO and user experience.


*These features will help create a robust and user-friendly educational event project with authentication, dynamic content presentation, and a focus on user experience and SEO.*



## Installation on this project

Install Project & React Router DOM
```bash
    npm create vite@latest my-project -- --template react
    cd my-project
    npm install react-router-dom localforage match-sorter sort-by
````
Install Tailwind CSS with Vite
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
Install PropTypes for prop validation
```bash
    npm install --save prop-types
```
Install sweetalert2 for showing beautiful messages
```bash
    npm install sweetalert2
```
Install AOS Animation
```bash
    npm install aos --save
```

## Importing on this project

Import for PropTypes validtion
```bash
    import PropTypes from 'prop-types'; // ES6
```
Import for Icons in sweetalert2
```bash
    import Swal from 'sweetalert2'
```
Import for AOS Animation
```bash
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..
    AOS.init();
```




### Project Created By:
Md. Monir Uddin

