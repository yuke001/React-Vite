# React Vite Routers Project

## Summary

This project demonstrates a basic setup of a React application using Vite as the build tool and React Router for navigation. The application includes multiple components and nested routes.

## Project Structure

- **src**
  - **components**
    - `Home.jsx`: Displays the home page.
    - `Cart.jsx`: Displays the cart page.
    - `Order.jsx`: Displays the order page with nested routes.
    - `Routers.jsx`: Contains the main navigation links and renders the `Outlet` for nested routes.
    - `Shoes.jsx`: Displays the shoes page under the order route.
    - `About.jsx`: Displays the about page.
  - `App.jsx`: Sets up the router and defines the routes.
  - `App.css`: Contains the CSS styles for the application.

## Routing

The routing is set up using `createBrowserRouter` and `RouterProvider` from `react-router-dom`. The main routes are defined in `App.jsx` and include nested routes for the order page.

## Styles

Basic styles are defined in `App.css` for the navigation links and layout.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
