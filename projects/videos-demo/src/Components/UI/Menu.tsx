import React from "react";
import { Link } from "react-router-dom";

/**
 * Default menu items for the Menu component.
 * Each item consists of a path and label.
 */
const menuItemsDefault = [
  { path: "/", label: "Home" },
  { path: "/modal", label: "Modal" },
  { path: "/custom-controls", label: "With Custom Controls" },
  { path: "/videos", label: "2 videos" },
  { path: "/default-demo", label: "Default Demo" },
  { path: "/carousel", label: "Carousel" },
];

/**
 * Menu component renders a navigation menu.
 * @param {Array} menuItems - Array of menu items with path and label.
 * @returns {JSX.Element} - Menu component JSX.
 */
export const Menu = ({ menuItems = menuItemsDefault }) => {
  return (
    <nav className="main-navigation">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
