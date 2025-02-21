import React from "react";
import { Link } from "react-router";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-2">
      <img src={book.image} alt="" />

      <div className="card-body">
        <h4>{book.title}</h4>
        <h4 className="text-secondary fs-5">{book.author}</h4>
      </div>

      <Link to={`/detail/${book.id}`} className="btn btn-primary text-white">
        Details
      </Link>
    </div>
  );
};

export default Card;
