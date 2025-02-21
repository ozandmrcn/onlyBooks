import React from "react";
import { NavLink, Outlet } from "react-router";

const Category = () => {
  return (
    <div className="d-flex align-items-center gap-4 p-5 aside">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to="/category/story">Story</NavLink>
        <NavLink to="/category/novel">Novel</NavLink>
      </aside>

      <Outlet />
    </div>
  );
};

export default Category;
