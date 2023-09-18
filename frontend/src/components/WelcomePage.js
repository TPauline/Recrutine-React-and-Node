import { React } from 'react';
import { Link } from 'react-router-dom';


import logo from '../logo.svg';
import '../styles/WelcomePage.scss';
import welcomeImage from '../assets/WelocmeImage1.jpg' ;

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <div> <h1>Welcome Page</h1></div>

      <div className='section2'>
        <span className='logo'>Recturine</span> <div className="navbar"> <span>Product</span> <span>Resources</span> <span>Careers</span> <span className='pipe'>&#124;</span> <span>Log In</span> <span>Sign Up</span> </div>
      </div>

      <div className='body'>
        <h1>Enter the chatroom, <br /> to your future career.</h1>
        <p>Linking students with experts</p>
        <button>TRY IT NOW</button>
        <img src={welcomeImage} alt="..." />
      </div>


    </div>
  );
}

export default WelcomePage;