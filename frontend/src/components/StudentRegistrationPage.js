import { React } from 'react';
import { Link } from 'react-router-dom';


import '../styles/studentRegistration.scss';
import welcomeImage from '../assets/WelocmeImage1.jpg';

function studentRegistration() {
    return (
        <div className="studentRegistrationRegistration">

            <div className='studentRegistrationNavSection'>
                <span className='studentRegistrationLogo'>Recturine</span> <div className="studentRegistrationNavBar"> <span>Product</span> <span>Resources</span> <span>Careers</span> <span className='pipe'>&#124;</span> <span>Log In</span> <span>Sign Up</span> </div>
            </div>
            <div className='studentRegistrationBody'>
                <div className="studentRegistrationBodyLeft">
                    <h1>Enter the chatroom, <br /> to your future career.</h1>
                    <p>Linking studentRegistrations with experts</p>
                    <button>TRY IT NOW</button>
                </div>
                <div className="studentRegistrationBodyRight">
                    <img src={welcomeImage} alt="..." />
                </div>

            </div>
        </div>
    );
}

export default studentRegistration;