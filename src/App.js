import './App.css';
import {Home, About, ContactPage, Gallery, ReviewsPage, Services} from './pages/index.js'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RequestEstimateButton from './components/RequestEstimateButton/RequestEstimateButton';

function App() {
  return (
    <Router>
      <RequestEstimateButton/>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About/>}/>
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
