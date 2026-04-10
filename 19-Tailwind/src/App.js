import React from "react";
import ReactDOM from "react-dom/client";

function App(){

    return(
        <>
        <div className="bg-gray-900 text-white font-sans min-h-screen">

      {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
            <h1 className="text-2xl font-bold text-blue-400">MyPortfolio</h1>
            <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>

      {/* Hero Section */}
        <section id="home" className="text-center py-20">
            <h2 className="text-5xl font-bold mb-4">Hi, I'm a Developer</h2>
            <p className="text-gray-400 mb-6">I build modern and responsive web applications</p>
            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600">Hire Me</button>
        </section>

       {/* About */}
        <section id="about" className="px-10 py-20 bg-gray-800">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400">
            I am a passionate developer skilled in Tailwind CSS, React, and modern frameworks.
            I love building clean UI and solving real-world problems.
            </p>
        </section>

      {/* Projects */}
        <section id="projects" className="px-10 py-20">
            <h2 className="text-3xl font-bold mb-10">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
                <div key={project} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-400">Description of your project.</p>
                </div>
            ))}
            </div>
        </section>

      {/* Contact */}
         <section id="contact" className="px-10 py-20 bg-gray-800">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="flex flex-col gap-4 max-w-md">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-700" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-700" />
            <textarea placeholder="Your Message" className="p-3 rounded bg-gray-700" />
            <button className="bg-blue-500 py-3 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-900 border-t border-gray-700">
        <p className="text-gray-500">© 2026 MyPortfolio. All rights reserved.</p>
      </footer>
        </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);