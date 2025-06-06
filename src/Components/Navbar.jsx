import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

 const links = <>
 <NavLink to='/' className='mr-2'><li>Home</li></NavLink>
 <NavLink to='/signin'className='mr-2'><li>SignIn</li></NavLink>
 <NavLink to='/signup'className='mr-2'><li>SignUp</li></NavLink>
 <NavLink to='/collections'className='mr-2'><li>Collections</li></NavLink>
 <NavLink to='/users'className='mr-2'><li>Users</li></NavLink>
 
 </>   
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {links}
          
      </ul>
    </div>
    <NavLink className="btn btn-ghost text-xl">MyLogo</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
      
        
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className='btn btn-primary' to='/signup'>SignUp</NavLink>
  </div>
</div>
    );
};

export default Navbar;