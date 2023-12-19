import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// import App from "./App.jsx";
// import ErrorPage from "./pages/Error.jsx";
// import HomePage from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Portfolio from "./pages/Portfolio.jsx";
// import Contact from "./pages/Contact.jsx";
// import Resume from "./pages/Resume.jsx";
// 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/resume",
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
