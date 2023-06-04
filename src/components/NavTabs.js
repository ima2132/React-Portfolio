import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar sticky-top" style={{ backgroundColor: '#008080', height: '80px', width: '100%', lineHeight: '40px' }}>
      <h3 className="navbar-name">IRENE AKRAM</h3>

      <ul className="nav nav-tabs me-auto">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

