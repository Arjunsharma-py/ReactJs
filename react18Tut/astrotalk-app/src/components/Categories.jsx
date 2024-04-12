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
            path: "/book/hindu/1",
          },
          {
            title: "Book 2",
            path: "/book/hindu/2",
          },
          {
            title: "Book 3",
            path: "/book/hindu/3",
          },
        ],
      },
      {
        title: "Islamic",
        submenu: [
          {
            title: "Book 1",
            path: "/book/islamic/1",
          },
          {
            title: "Book 2",
            path: "/book/islamic/2",
          },
        ],
      },
      {
        title: "Christian",
        submenu: [
          {
            title: "Book 1",
            path: "/book/chritian/1",
          },
          {
            title: "Book 2",
            path: "/book/chritian/2",
          },
        ],
      },
    ],
  },
  {
    title: "Spells",
    path: "/",
    submenu: [
      {
        title: "category1",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
          {
            title: "sub-category3",
            path: "/",
          },
          {
            title: "sub-category4",
            path: "/",
          },
          {
            title: "sub-category5",
            path: "/",
          },
          {
            title: "sub-category6",
            path: "/",
          },
        ],
      },
      {
        title: "category2",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category3",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category4",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category5",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category6",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Store",
    path: "/",
    submenu: [
      {
        title: "category1",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category2",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category3",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category4",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Products",
    path: "/",
    submenu: [
      {
        title: "category1",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
          },
        ],
      },
      {
        title: "category2",
        path: "/",
        submenu: [
          {
            title: "sub-category1",
            path: "/",
          },
          {
            title: "sub-category2",
            path: "/",
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
