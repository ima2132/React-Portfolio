import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const navLinkStyle = {
    color: '#000000', // set the font color to black
    backgroundColor: 'transparent', // set the background color for tabs as transparent
    border: 'none', // removed the border
  };

  return (
    <nav className="navbar sticky-top" style={{ backgroundColor: 'transparent', height: '80px', width: '100%', lineHeight: '40px', position: 'relative', borderBottom: 'none' }}>
      <h3 className="navbar-name" style={{ position: 'absolute', top: '20px', left: '11px', fontWeight: 'bold', fontSize: '35px' }}>IRENE AKRAM</h3>

      <ul className="nav nav-tabs" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={`nav-link ${currentPage === 'About' ? 'active' : ''}`}
            style={navLinkStyle}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}
            style={navLinkStyle}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
            style={navLinkStyle}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
            style={navLinkStyle}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;




