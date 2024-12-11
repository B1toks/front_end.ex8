import React from 'react';
import { useSelector } from 'react-redux';
import { selectMenuItems } from '../store/menuslice';

const Menu = () => {
  const menuItems = useSelector(selectMenuItems); // Отримання елементів меню з Redux Store

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
