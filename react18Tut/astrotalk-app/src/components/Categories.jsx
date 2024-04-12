import React from "react";
import MenuItems from "./MenuItems";

const menuItems = [
  {
    title: "Scriptures",
    submenu: [
      {
        title: "Hindu Mythology",
        submenu: [
          {
            title: "Book 1",
            path: "/book1",
          },
          {
            title: "Book 2",
            path: "/book2",
          },
          {
            title: "Book 3",
            path: "/book3",
          },
        ],
      },
      {
        title: "Islamic",
        submenu: [
          {
            title: "Book 1",
            path: "/book1",
          },
          {
            title: "Book 2",
            path: "/book2",
          },
        ],
      },
      {
        title: "Christian",
        submenu: [
          {
            title: "Book 1",
            path: "/book1",
          },
          {
            title: "Book 2",
            path: "/book2",
          },
        ],
      },
    ],
  },
];

const Categories = () => {
  return (
    <ul className="menus">
      {menuItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
};

export default Categories;
