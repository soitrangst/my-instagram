import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper white">
          <Link to="" className="brand-logo left">instagram</Link>
          <ul id="nav-mobile" className="right ">
            <li><Link to="/signin" >Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post"><i className="material-icons large">add</i></Link></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;
