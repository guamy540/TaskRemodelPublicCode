import './App.css';
import Navbar from './components/Navbar/Navbar';
import ReviewsPage from './pages/Reviews/ReviewsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RequestEstimateButton from './components/RequestEstimateButton/RequestEstimateButton';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <Router>
      <RequestEstimateButton/>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/contact" element= {<ContactPage/>}/>
        <Route path="/reviews" element={<ReviewsPage/>}/>
        <Route path="*" element= {<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
