import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import App from './App';
import MovieDetails from './components/MovieDetails';
import ErrorPage from './components/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<ErrorPage/>,
  },
  {path:'movie/:id', element:<MovieDetails/>,}
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <RouterProvider router={router} />

  </>
);
