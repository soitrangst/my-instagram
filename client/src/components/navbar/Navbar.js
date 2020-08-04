import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Navbar = () => {
  const state = useSelector(state => state.signinReducer)

  useEffect(() => { }, [state.loading])

  const renderList = () => {
    if (localStorage.getItem('auth')) {
      return [
        <Link to="/post"><i className="material-icons large">add</i></Link>,
        <Link to="/profile">Profile</Link>,
        <Link to="/setting">Setting</Link>,
        <Link to="/">Logout</Link>,
      ]
    } else {
      return [
        <Link to="/signin" >Signin</Link>,
        <Link to="/signup">Signup</Link>
      ]
    }
  }
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper white">
          <Link to="" className="brand-logo left">instagram</Link>
          <ul id="nav-mobile" className="right ">
            {renderList().map((element,index)=>{
              return (<li key={index}>{element}</li>)
            })}
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
