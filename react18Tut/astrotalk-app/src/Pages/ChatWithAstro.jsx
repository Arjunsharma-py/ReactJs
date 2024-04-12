import React from "react";
import { FaSearch } from "react-icons/fa";
import AllAstroChat from "../components/AllAstroChat";

const ChatWithAstro = () => {
  return (
    <>
      <div className="heading-cwa common-padding-cwa">
        <h1>Chat With astrologer</h1>
      </div>
      <div className="filter-cwa common-padding-cwa">
        <select name="filter" id="filter">
          <option value="">Filter</option>
          <option value="exp-low-to-high">Experience: Low to High</option>
          <option value="exp-high-to-low">Experience: High to Low</option>
          <option value="total-low-to-high">Total Orders: Low to High</option>
          <option value="total-high-to-low">Total Orders: High to Low</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
        <select name="sort" id="sort">
          <option value="">Sort By</option>
          <option value="exp-low-to-high">Experience: Low to High</option>
          <option value="exp-high-to-low">Experience: High to Low</option>
          <option value="total-low-to-high">Total Orders: Low to High</option>
          <option value="total-high-to-low">Total Orders: High to Low</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
        <form action="/">
          <input type="text" placeholder="Seach name..." />
          <button type="button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="display-astros common-padding-cwa">
        <AllAstroChat />
      </div>
    </>
  );
};

export default ChatWithAstro;
