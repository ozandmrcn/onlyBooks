import React from "react";
import { useSearchParams } from "react-router";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    searchParams.set("search", text);

    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    searchParams.set("sort", value);

    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between mt-4">
      {/* Select */}
      <select
        onChange={handleChange}
        defaultValue="sort"
        className="form-select w-25"
      >
        <option disabled>sort</option>
        <option>a-z</option>
        <option>z-a</option>
      </select>
      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="book name here ..."
        />
        <button className="btn btn-primary px-4">Search</button>
      </form>
    </div>
  );
};

export default Filter;
