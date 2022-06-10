import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import MyProject from './components/MyProject';
import Skill from './components/Skill';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
      <About></About>
      <Skill></Skill>
     <MyProject></MyProject>
     <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
