import React from 'react';
import NavBarStyled from './NavBarStyled';
import navigation from '../../config/navigation';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <NavBarStyled>
      <div style={{ paddingLeft: '50px' }}>
        <img src="./vite.svg" alt="logo-vite" />
      </div>
      {navigation.map((item) => {
        return (
          <Link key={item.key} to={item.url}>
            {item.label}
          </Link>
        );
      })}
    </NavBarStyled>
  );
};

export default NavBar;
