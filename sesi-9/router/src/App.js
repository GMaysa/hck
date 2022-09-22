import Navbar from './components/Navbar';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutMe from './pages/AboutMe';
import AboutCompany from './pages/AboutCompany';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} >
                <Route path='about-company' element={ <AboutCompany/> } /> 
                <Route path='about-me' element={ <AboutMe/> } />
            </Route>
        </Routes>
      </Router>
    </> 
  );  
}

export default App;
