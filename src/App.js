import './App.css';
import Navbar from './components/Navbar/Navbar';
import ReviewsPage from './pages/Reviews/ReviewsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RequestEstimateButton from './components/RequestEstimateButton/RequestEstimateButton';
import ContactPage from './pages/Contact/ContactPage';
import About from './pages/About/About';
import Bathroom from './pages/Bathroom/Bathroom';
import Flooring from './pages/Flooring/Flooring';
import Exterior from './pages/Exterior/Exterior';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <RequestEstimateButton/>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bathroom" element={<Bathroom/>}/>
        <Route path="/flooring" element={<Flooring/>}/>
        <Route path="/exterior" element={<Exterior/>}/>
        <Route path="/services" element= {<Services/>}/>
        <Route path= "/gallery" element={<Gallery/>}/>
        <Route path="/reviews" element={<ReviewsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element= {<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
