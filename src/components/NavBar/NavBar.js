import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav bg-warning">
      <p>
        <Link className="nav-link ext-black" to="/">
          Home
        </Link>
      </p>

      <p>
        <Link className="nav-link ext-black" to="/snacks">
          All Snacks & Drinks
        </Link>
      </p>
      <p>
        <Link className="nav-link ext-black" to="/snacks/new">
          Add Favorites To The Lunchbox
        </Link>
      </p>
    </div>
  );
}

export default NavBar;