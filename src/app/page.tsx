import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-black text-white">
    
      <nav className="py-4 px-6 fixed w-full top-0 left-0 bg-black z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">Dua Ali Khan</a>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

   
      <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/BG.jpg')" }}>
  <div className="text-center"></div>
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">Hello, I'm Dua Ali Khan</h1>
          <p className="text-xl mb-6">A passionate Web Developer and Software Quality Assurance Engineer</p>
         
        </div>
      </section>

    
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-400">
            Hi, I'm Dua Ali Khan, a web developer who specializes in creating dynamic and responsive websites. 
            I'm passionate about utilizing modern web technologies like Next.js, TypeScript, and Tailwind CSS to create engaging user experiences.
          </p>
        </div>
      </section>

    
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/comforty.png" alt="Comforty Project" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Comforty</h3>
                <p className="text-gray-400 mb-4">
                  An e-commerce website for furniture sales built with Next.js, TypeScript, and Tailwind CSS.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

           
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/calculator.png" alt="Media Mart Project" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Media Mart</h3>
                <p className="text-gray-400 mb-4">
                  A platform for beauty products and home accessories built using modern tools.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/editable resume.jpeg" alt="Project 3" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-400 mb-4">
                  A custom application showcasing creativity and skills.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/flower.png" alt="Project 4" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 4</h3>
                <p className="text-gray-400 mb-4">
                  A responsive design project with a focus on UX/UI best practices.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

           
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/jewelry.png" alt="Project 5" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 5</h3>
                <p className="text-gray-400 mb-4">
                  A collaborative project showcasing teamwork and technical expertise.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src="/images/static resume.jpeg" alt="Project 6" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 6</h3>
                <p className="text-gray-400 mb-4">
                  A project focused on integrating APIs and third-party services.
                </p>
                <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Dua Ali Khan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;