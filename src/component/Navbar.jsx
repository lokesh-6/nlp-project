import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='w-full p-4 flex justify-between px-12 py-4 shadow'>
      <div className='flex justify-center gap-8 font-semibold sm:text-lg text-sm h-full items-center'>
        <Link to="/">Home</Link>
      </div>
      <div className='flex justify-center gap-8'>
      </div>
    </div>
  );
}

export default Navbar;
