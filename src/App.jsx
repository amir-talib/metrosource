import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/MetroGlobal/Layout"
// import Loader from "./components/MetroGlobal/Loader";

// Lazy-loaded components
const HomePage = lazy(() => import("./Routes/HeroSection"));
const AboutUs = lazy(() => import("./Routes/AboutUs"));
const Projects = lazy(() => import("./Routes/Projects"));
const Services = lazy(() => import("./Routes/services"));

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout>
      <HomePage />
    </Layout>
  },
  {
    path: "/about",
    element: 
    <Layout>
      <AboutUs />,
    </Layout>
  },
  {
    path: "/projects",
    element: 
    <Layout>
      <Projects />,
    </Layout>
  },
  {
    path: "/services",
    element: 
    <Layout>
      <Services />,
    </Layout>  
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
