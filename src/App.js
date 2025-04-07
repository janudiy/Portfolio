import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Home.css";
import "./styles/Projects.css";
import "./styles/Contact.css";

function App() {
  // Function to generate coding-like particles
  const generateParticles = () => {
    const particleWords = [
      "true", "false", "0b101", "0xFF", "1011101001", "111111", "0000000", "Myclass {", "@Override", 
      "10001101%", "570%7", "let i = 0; i < 100; i++", "`Math.random() * 100%`", "style={{", "return", 
      "const", "import", "export", "fetch", "json", "async", "await", "for", "if", "else", "new", 
      "class", "prototype", "window", "document", "console.log", "function", "let", "const", "string", 
      "boolean", "undefined", "null", "var", "this", "warning!", "error!", "ERROR", 
      "!!!!", "???", "Alert", "Error404", "FatalError", "Crash", "Exception", "Timeout", "Abort", 
      "Warning: Unhandled Exception", "File Not Found", "Out of Memory", "Permission Denied", 
      "Access Denied", "Segmentation Fault", "SyntaxError", "ReferenceError"
    ];
  
    let particles = [];
    for (let i = 0; i < 300; i++) {  // Increase the number of particles for a denser effect
      const randomWord = particleWords[Math.floor(Math.random() * particleWords.length)];
      const isError = randomWord === "warning!" || randomWord === "error!" || randomWord === "ERROR" ||
                      randomWord === "!!!!" || randomWord === "???" || randomWord === "Alert" ||
                      randomWord === "Error404" || randomWord === "FatalError" || randomWord === "Crash" ||
                      randomWord === "Exception" || randomWord === "Timeout" || randomWord === "Abort" ||
                      randomWord === "Warning: Unhandled Exception" || randomWord === "File Not Found" ||
                      randomWord === "Out of Memory" || randomWord === "Permission Denied" || 
                      randomWord === "Access Denied" || randomWord === "Segmentation Fault" ||
                      randomWord === "SyntaxError" || randomWord === "ReferenceError";
      
      // Apply the 'particle-error' class for error/warning words
      particles.push(
        <div 
          key={i} 
          className={`particle ${isError ? 'particle-error' : ''}`}  // Add error class if applicable
          style={{ 
            left: `${Math.random() * 100}%`,  // Spread particles across the entire width (0% to 100%)
            top: `${Math.random() * 100}%`,   // Spread particles vertically across the screen (0% to 100%)
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            transform: `scale(${Math.random() * 1.2 + 0.8})`, // Random scaling to keep particles of varied sizes
          }}
        >
          {randomWord}
        </div>
      );
    }
    return particles;
  };
  
  return (
    <Router>
      <Navbar />
      {generateParticles()}  {/* Add coding particles */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
