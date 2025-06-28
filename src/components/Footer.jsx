import React from 'react';
import icon from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#090913]  text-white py-[120px] text-center">
      <img src={icon} alt="Rocket Academy Logo" className="w-80 mx-auto" />

      <p className="text-sm ">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
