
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu';
import MenuPage from './container/Menu/MenuPage';
import MenuItem from './components/Menuitem/MenuItem';
import Chef from './container/Chef/Chef';
import ThankYou from './components/Navbar/thankyou'; 
import Login from './components/Navbar/login'; 
import SubscriptionThankYou from './components/Footer/subscription';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <AboutUs />
                <SpecialMenu />
                <MenuItem />
                <Chef />
                <Intro />
                <Laurels />
                <Gallery />
                <FindUs />
                <Footer />
              </>
            }
          />
          <Route path="/menu-page" element={<MenuPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/subscription-thank-you" element={<SubscriptionThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
