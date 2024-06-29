import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div>
            <Logo />
        <nav className="flex justify-center gap-5 py-5 bg-blue-600">
          <NavLink to="/shop" className="text-white text-xl">
            Shop
          </NavLink>
          <NavLink to="/review" className="text-white text-xl">
            Review
          </NavLink>
          <NavLink to="/inventory" className="text-white text-xl">
            Manage Inventory
          </NavLink>
        </nav>
      </div>
    );
};

export default Navbar;