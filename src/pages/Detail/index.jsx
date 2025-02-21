import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api";
import Info from "../../components/Info";

const Detail = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    api.get(`/data/${id}`).then((res) => setBook(res.data));
  }, []);

  return (
    <div className="row container my-5 p-5 mx-auto">
      {/* Image */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="rounded img-fluid shadow"
          src={book?.image}
          alt="book-image"
        />
      </div>

      {/* Info */}
      <div className="col-md-6 d-flex flex-column my-3 justify-content-start align-items-center">
        <h1 className="text-center">{book?.title}</h1>
        <div>
          <Info title="Author" value={book?.author} />
          <Info title="Year" value={book?.year} />
          <Info title="Page" value={book?.page} />
          <Info title="Price" value={book?.price} />
          <Info title="Description" value={book?.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
