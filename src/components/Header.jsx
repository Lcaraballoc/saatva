import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { ReactComponent as ShoppingCart } from '../assets/images/shopping-cart.svg'
import { ReactComponent as Logo } from '../assets/logo.svg'

import './styles/Header.scss'

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
      <header className="header">
        <div className="header__content">
          <a href="home">
            <Logo />
          </a>
          <div className="header__rightMenu">
            <ShoppingCart />
            {cart.length > 0 && (
              <div className="header__cartCounter">{cart.length}</div>
            )}
          </div>
        </div>
      </header>
    );
  };

export default Header;