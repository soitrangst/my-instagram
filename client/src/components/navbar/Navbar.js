import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Navbar = () => {
  const state = useSelector(state => state.signinReducer)
  const [logout, setLogout] = useState(false)

  useEffect(() => { }, [state.loading, logout])

  const _logOut = () => {
    localStorage.clear()
    setLogout(true)
  }

  const renderList = () => {
    if (localStorage.getItem('auth')) {
      return [
        <Link to="/post"><i className="material-icons large">add</i></Link>,
        <Link to="/profile">Profile</Link>,
        <Link to="/myfollowing">My Following</Link>,
        <Link to="#" onClick={() => _logOut()}>Logout</Link>,
      ]
    } else {
      return [
        <Link to="/signin" >Signin</Link>,
        <Link to="/signup">Signup</Link>
      ]
    }
  }

  const renderSearch = () => {
    if (localStorage.getItem('auth')) {
      return (
        <div className="search-input">
        <form>
          <div className="input-field " style={{ padding: '10px' }}>
            <input placeholder="search" style={{ borderBottom: '0.5px ridge ' }} id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons black-text">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
      )
    } else {
      return ''
    }
  }
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper white">
          <div className='nav-left'>
            <Link to="" className="brand-logo left">instagram</Link>
          </div>
          {renderSearch()}
          <div className="nav-right">
            <ul id="nav-mobile" className="right ">
              {renderList().map((element, index) => {
                return (<li key={index}>{element}</li>)
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
