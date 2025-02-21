import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-body text-dark d-flex py-2 text-center align-items-center justify-content-around ">
      <h1 className="">Only Books</h1>

      <nav className="d-flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/category">Category</NavLink>
      </nav>
    </header>
  );
};

export default Header;
