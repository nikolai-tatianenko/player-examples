import React from 'react';

export const Menu = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/modal">modal</Link>
        </li>
        <li>
          <Link to="/custom-controls">With Custom Controls</Link>
        </li>
        <li>
          <Link to="/videos">2 videos</Link>
        </li>
        <li>
          <Link to="/default-demo">Default Demo</Link>
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
      </ul>
    </nav>
  );
};
