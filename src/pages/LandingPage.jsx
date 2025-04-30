import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const tags = [
    { label: "🧑‍🎨 Designer", gradient: "from-[#fceabb] to-[#f8b500]" },
    { label: "💻 Developer", gradient: "from-[#d4fc79] to-[#96e6a1]" },
    { label: "✍️ Writer", gradient: "from-[#fbc2eb] to-[#a6c1ee]" },
    { label: "📈 Marketer", gradient: "from-[#ffecd2] to-[#fcb69f]" },
    { label: "🎥 Video Editor", gradient: "from-[#a1c4fd] to-[#c2e9fb]" },
    { label: "🧑‍💼 Assistant", gradient: "from-[#fddb92] to-[#d1fdff]" },
  ];


const FloatingTag = ({ tag, delay }) => {
return (
    <motion.div
    initial={{ x: 0 }}
    animate={{ x: [0, 10, -10, 0] }}
    transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay,
    }}
    whileHover={{ scale: 1.1 }}
    className={`px-6 py-3 text-[#213547] text-md font-semibold rounded-full shadow-md bg-gradient-to-r ${tag.gradient}`}
    >
    {tag.label}
    </motion.div>
);
};

function LandingPage() {
    return (
        <div className="text-center bg-pastel-cream min-h-screen">
        
        {/*header*/}
        <header className="bg-[#fefef2] fixed flex justify-between top-0 left-0 py-2 w-full z-10">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#60a09b]">
                <span>Jobsy</span>
            </div>

            

            {/* CTA Button */}
            <div className='flex items-center'>
                {/* Navigation Links */}
                <nav className="space-x-6 mx-5">
                    <a href="#post-a-job" className="text-[#60a09b] hover:text-[#8e82b4]">Post a Job</a>
                    <a href="#signup" className="text-[#60a09b] hover:text-[#8e82b4]">Find Jobs</a>
                    <a href="#about" className="text-[#60a09b] hover:text-[#8e82b4]">About</a>
                    <a href="#about" className="text-[#60a09b] hover:text-[#8e82b4]">contact</a>
                </nav>
                <a 
                    href="/app"
                    className="bg-[#60a09b] text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-[#8e82b4] transition-colors"
                >
                    Get Started
                </a>
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <section className="bg-[#fefef2] flex flex-row justify-between text-center h-150 my-10 ">
        {/* Headline */}
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl md:text-6xl font-bold text-[#60a09b] mb-4">
                Find Jobs Instantly. <br />Hire in Minutes.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#8e82b4] mb-10 max-w-2xl">
                Jobsy connects talent and employers faster than ever. <br />Post jobs or find your dream role with ease.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                to="/signup"
                className="bg-[#60a09b] hover:bg-[#8e82b4] text-white font-semibold rounded-full px-8 py-3 transition-colors duration-300"
                >
                Get Started
                </Link>
                <Link
                to="#learn"
                className="bg-[#fac6b1] hover:bg-[#d0c6de] text-[#213547] font-semibold rounded-full px-8 py-3 transition-colors duration-300"
                >
                Learn More
                </Link>
            </div>
        </div>
        <div className='w-100 mx-20 flex justify-center items-center' >
            <img src="src/assets/heropic.png" alt="" />
        </div>
        </section>
      
        <section className="bg-[#fefef2] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#60a09b] mb-12">Why Jobsy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#fac6b1] rounded-2xl shadow-md p-8 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#213547] mb-4">Post Jobs Instantly</h3>
            <p className="text-[#213547]">Easily post jobs and get visibility in seconds. It's fast and fun!</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-[#8e82b4] rounded-2xl shadow-md p-8 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Matching</h3>
            <p className="text-white">Jobsy connects you with the right candidates using smart logic.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-[#d0c6de] rounded-2xl shadow-md p-8 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#213547] mb-4">Real-Time Chat</h3>
            <p className="text-[#213547]">Communicate directly with applicants without leaving the platform.</p>
          </div>

        </div>
      </div>
    </section>
  
    <section className="relative py-24 px-6 bg-[#fefef2] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#60a09b] mb-6">Work that feels fun</h2>
        <p className="text-[#213547] mb-12">Explore a colorful world of job opportunities.</p>

        <div className="flex flex-wrap justify-center gap-6">
          {tags.map((tag, idx) => (
            <FloatingTag key={idx} tag={tag} delay={idx * 0.3} />
          ))}
        </div>
      </div>
    </section>

        {/* Footer */}
        <footer className="mt-24 text-gray-500 text-sm">
          © {new Date().getFullYear()} Jobsy. All rights reserved.
        </footer>
      </div>
    );
}
  
export default LandingPage;
  