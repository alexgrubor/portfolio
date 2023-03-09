import { BrowserRouter } from "react-router-dom";
import Header from './components/header/Header';
import SkillsBalls from "./components/SkillsBalls";

import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Education, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=' bg-primary'>
        <div>
          <Navbar />
          <Header/>
          
        </div>
        <About />
        <Experience />
        <Education />
        <SkillsBalls/>
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
       
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
