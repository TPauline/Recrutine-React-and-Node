import { React } from 'react';
import { Link } from 'react-router-dom';


import '../styles/WelcomePage.scss';
import welcomeImage from '../assets/WelocmeImage1.jpg';

function WelcomePage() {
  return (
    <div className="WelcomePage">

      <div className='welcomeNavSection'>
        <span className='welcomeLogo'>Recturine</span> <div className="welcomeNavBar"> <span>Product</span> <span>Resources</span> <span>Careers</span> <span className='pipe'>&#124;</span> <span>Log In</span> <span>Sign Up</span> </div>
      </div>
      <div className='welcomeBody'>
        <div className="welcomeBodyLeft">
          <h1>Enter the chatroom, <br /> to your future career.</h1>
          <p>Linking students with experts</p>
          <button>TRY IT NOW</button>
        </div>
        <div className="welcomeBodyRight">
          <img src={welcomeImage} alt="..." />
        </div>

      </div>
    </div>
  );
}

export default WelcomePage;