import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Menu from "./Menu";

describe("Menu", () => {
  it("renders menu items correctly", () => {
    const menuItems = [
      { path: "/", label: "Home" },
      { path: "/modal", label: "Modal" },
      { path: "/custom-controls", label: "With Custom Controls" },
      { path: "/videos", label: "2 videos" },
      { path: "/default-demo", label: "Default Demo" },
      { path: "/carousel", label: "Carousel" },
    ];

    const wrapper = shallow(<Menu menuItems={menuItems} />);
    const linkElements = wrapper.find(Link);

    expect(linkElements.length).toEqual(menuItems.length);

    linkElements.forEach((link, index) => {
      expect(link.prop("to")).toEqual(menuItems[index].path);
      expect(link.text()).toEqual(menuItems[index].label);
    });
  });

  it("renders default menu items if no menuItems prop is provided", () => {
    const wrapper = shallow(<Menu />);
    const linkElements = wrapper.find(Link);

    expect(linkElements.length).toEqual(menuItemsDefault.length);

    linkElements.forEach((link, index) => {
      expect(link.prop("to")).toEqual(menuItemsDefault[index].path);
      expect(link.text()).toEqual(menuItemsDefault[index].label);
    });
  });
});
