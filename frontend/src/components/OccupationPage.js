import { React } from 'react';

import '../styles/OccupationPage.scss';
import welcomeImage from '../assets/WelocmeImage1.jpg';

function OccupationPage() {
    return (
        <div className="OccupationPage">
            <div className='occupation_body'>
                <div className='nav_section'>
                    <span className='logo'>Recturine</span>
                </div>
                <h1>Let's get Connecting.</h1>
                <div className="occupationBodyLF">
                    <div className="occupationBodyLeft">
                        <div><span>You are...</span></div>
                        <button>A student</button>
                        <button>A working professional</button>
                    </div>
                    <div className="occupationBodyRight">
                        <div><span>Log back in!</span></div>
                        <input type="text" />
                        <input type="text" />
                        <button>Log in</button>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default OccupationPage;