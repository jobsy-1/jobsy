import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="text-center p-12 bg-pastel-cream min-h-screen">
        
        {/*header*/}
        <header className="bg-[#fefef2] fixed top-0 left-0 py-2 w-full z-10">
            <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#60a09b]">
            <span>Jobsy</span>
            </div>

            {/* Navigation Links */}
            <nav className="space-x-6">
                <a href="#home" className="text-[#60a09b] hover:text-[#8e82b4]">Home</a>
                <a href="#login" className="text-[#60a09b] hover:text-[#8e82b4]">Post a Job</a>
                <a href="#signup" className="text-[#60a09b] hover:text-[#8e82b4]">Find Jobs</a>
                <a href="#about" className="text-[#60a09b] hover:text-[#8e82b4]">About</a>
                <a href="#about" className="text-[#60a09b] hover:text-[#8e82b4]">contact</a>
            </nav>

        {/* CTA Button */}
        <div>
            <a 
                href="#getstarted"
                className="bg-[#60a09b] text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-[#8e82b4] transition-colors"
            >
                Get Started
            </a>
            </div>
        </div>
        </header>

        {/* Hero Section */}
        <h1 className="text-6xl font-semibold text-pastel-green mb-6">Welcome to Jobsy!</h1>
        <p className="text-xl text-pastel-lavender mb-12">
          Find Jobs. Hire Faster. Your career and your business start here.
        </p>
        
        {/* Buttons */}
        <div className="mb-16">
          <Link to="/login">
            <button className="bg-[#60a09b] text-white rounded-full py-3 px-8 text-lg mr-4">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#fac6b1] text-white rounded-full py-3 px-8 text-lg">
              Signup
            </button>
          </Link>
        </div>
  
        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-pastel-purple mb-6">Why Jobsy?</h2>
          <ul className="list-none space-y-4 text-lg text-pastel-lavender">
            <li>🚀 Post jobs in seconds</li>
            <li>🔎 Find great workers quickly</li>
            <li>⚡ Simple, fast, and effective platform</li>
          </ul>
        </div>
  
        {/* Footer */}
        <footer className="mt-24 text-gray-500 text-sm">
          © {new Date().getFullYear()} Jobsy. All rights reserved.
        </footer>
      </div>
    );
}
  
export default LandingPage;
  