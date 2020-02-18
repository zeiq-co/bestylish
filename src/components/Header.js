import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header className="page_header header_darkgrey bordered_items">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <nav className="mainmenu_wrapper">
            <ul className="mainmenu nav sf-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
