
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {

    navigate('/subscription-thank-you');
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
