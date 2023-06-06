import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const navLinkStyle = {
    color: '#000000', // set the font color to black
    fontFamily: 'Press Start 2P', // set the font family
    fontSize: '15px', // set the font size
    backgroundColor: '#c3c3c3', // set background color to #c3c3c3 for all tabs
    border: '6px solid #c3c3c3', // set a solid border with the same color as the background
    borderRadius: '0px', // remove the border radius
  };
  
  return (
    <nav className="navbar sticky-top" style={{ backgroundColor: 'transparent', height: '80px', width: '100%', lineHeight: '40px', position: 'relative', borderBottom: 'none' }}>
      <h3 className="navbar-name" style={{ position: 'absolute', top: '20px', left: '11px', fontWeight: 'bold', fontSize: '35px' }}>IRENE AKRAM</h3>

      <menu role="tablist" style={{ outline: 'none', display: 'flex', gap: '10px', position: 'absolute', top: '4px', left: '469px' }}>
        <li role="tab" aria-selected={currentPage === 'About'}>
          <a href="#about" onClick={() => handlePageChange('About')} className={`nav-link ${currentPage === 'About' ? 'active' : ''}`} style={navLinkStyle}>
            About
          </a>
        </li>
        <li role="tab" aria-selected={currentPage === 'Portfolio'}>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`} style={navLinkStyle}>
            Portfolio
          </a>
        </li>
        <li role="tab" aria-selected={currentPage === 'Contact'}>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`} style={navLinkStyle}>
            Contact
          </a>
        </li>
        <li role="tab" aria-selected={currentPage === 'Resume'}>
          <a href="#resume" onClick={() => handlePageChange('Resume')} className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`} style={navLinkStyle}>
            Resume
          </a>
        </li>
      </menu>
    </nav>
  );
}

export default NavTabs;






    

