import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "./../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();

  const params = {
    q: searchParams.get("search"),
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
  };

  useEffect(() => {
    api
      .get("/data", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, [searchParams]);

  return (
    <div className="container my-5">
      {/* Results */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-3 w-25 text-nowrap">
          The Book has not found
        </h3>
      ) : (
        <h3 className="p-3 rounded fs-3 w-25 text-nowrap">
          {books.length === 1
            ? "Finded a book"
            : `Finded ${books.length} books`}
        </h3>
      )}

      {/* Filter */}
      <Filter />

      {/* Cards */}

      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
