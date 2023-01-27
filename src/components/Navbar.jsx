import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <h3>Grumpy's Blog</h3>
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=notes'>
            <h6>NOTES</h6>
          </Link>
          <Link className='link' to='/?cat=ml'>
            <h6>MACHINE LEARNING</h6>
          </Link>
          <Link className='link' to='/?cat=others'>
            <h6>OTHERS</h6>
          </Link>

          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )} */}
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
