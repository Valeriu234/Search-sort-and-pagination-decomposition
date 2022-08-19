import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar__links'>
                <Link to='/about'>Despre sait</Link>
                <Link to='/posts'>Posturi</Link>
            </div>
        </div>
    );
};

export default Navbar;