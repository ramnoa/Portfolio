import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 * This prevents the entire app from going blank when a component fails.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh the page.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <SideBar />
      <Navbar />
      <main className="ml-0 md:ml-20 min-h-screen">
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
