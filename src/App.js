import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import SocialLinks from './Components/SocialLinks/SocialLinks.jsx';
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Skills from './Components/Skills/Skills.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      
      <SocialLinks/>
    </div>
    
  );
}

export default App;
