import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogoPath } from '../store/logoSlice';

const Logo = () => {
  const logoPath = useSelector(selectLogoPath); 

  return (
    <div>
      <img src={logoPath} alt="Logo" />
    </div>
  );
};

export default Logo;
