import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/MetroGlobal/Layout"
// import Loader from "./components/MetroGlobal/Loader";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', background: '#1a1a1a' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy-loaded components with error handling
const HomePage = lazy(() => import("./Routes/HeroSection").catch(err => {
  console.error('Error loading HomePage:', err);
  throw err;
}));
const AboutUs = lazy(() => import("./Routes/AboutUs").catch(err => {
  console.error('Error loading AboutUs:', err);
  throw err;
}));
const Projects = lazy(() => import("./Routes/Projects").catch(err => {
  console.error('Error loading Projects:', err);
  throw err;
}));
const Services = lazy(() => import("./Routes/services").catch(err => {
  console.error('Error loading Services:', err);
  throw err;
}));

// Define routes using createHashRouter
const router = createHashRouter([
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
      <AboutUs />
    </Layout>
  },
  {
    path: "/projects",
    element: 
    <Layout>
      <Projects />
    </Layout>
  },
  {
    path: "/services",
    element: 
    <Layout>
      <Services />
    </Layout>  
  }
]);

function App() {
  console.log('App component rendering');
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div style={{ 
          padding: '20px', 
          color: 'white', 
          background: '#1a1a1a',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Loading...
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
