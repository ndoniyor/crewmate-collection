import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <nav>
        <ul className="nav-btns">
          <li key="home-button">
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li key="create-button">
            <Link className="create-link" to="/create">
              Create a Crewmate
            </Link>
          </li>
          <li  key="gallery-button">
            <Link className="gallery-link" to="/gallery">
              Crewmate Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

