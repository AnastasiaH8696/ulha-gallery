import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact"

// Create a Layout component that defines the structure of the web page
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Define the application routes and components using the createBrowserRouter function
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Remember that Home, Single post and Write are the pages that will have a Navbar and a Footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// Define the App function that returns the RouterProvider component that provides the routing context to the entire app
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />{" "}
      </div>{" "}
    </div>
  );
}

// Export the App component as the default export
export default App;
