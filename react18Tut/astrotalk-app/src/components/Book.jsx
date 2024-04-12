import React from "react";
import { useParams } from "react-router-dom";
import hindu_book from "../assets/hindu_book.jpg";

const Book = ({ category }) => {
  const { id } = useParams();
  return (
    <div className="book-details">
      <div className="product-container">
        <div className="product-image">
          <img src={hindu_book} alt={category} />
        </div>
        <div className="product-info">
          <h2>{category + " Book " + id}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            animi consectetur laborum unde cumque, officia porro omnis facilis,
            illo doloribus adipisci. Perspiciatis alias laboriosam nesciunt
            culpa, nihil veniam assumenda a?
          </p>
          <span className="price">${10}</span>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
