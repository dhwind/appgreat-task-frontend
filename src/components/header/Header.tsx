import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderMenuList from './header-menu/HeaderMenuList';
import logo from './../../assets/images/logo.svg';

class Header extends React.Component<any> {
  render() {
    return (<header className="header">
        <div className="header-logo">
            <img className="header-logo__image" alt="logo" src={logo} />
            <NavLink to="/" className="header-logo__link">
                <p>eSHOP.com</p>
            </NavLink>
        </div>
        <div className="header-panel">
            <HeaderMenuList />
        </div>
    </header>);
  }
}

export default Header;
