import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow-md">
      <ul className="flex justify-end space-x-6 px-6 py-3 text-white">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
