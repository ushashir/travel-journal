import React from 'react';
import './nav.css';
import logo from '../../assets/path.png';
import logo1 from '../../assets/Fill 213.svg';

function Nav (props) {
    return (
        <div className='nav'>
            <div className="nav-content">
                <div className="nav-log">
                    <img src={logo} alt="display log" />
                </div>
           My Travel Journal by Ushahemba Shir
            </div>
            
        </div>
    );
}

export default Nav;