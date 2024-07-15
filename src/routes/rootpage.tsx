import { Outlet, Link } from "react-router-dom";

export function Root() {
  return (
    <div className="container mx-auto p-4">
      <nav className="bg-white ">
        <ul className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">Spiceoil</h1>
          </div>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`products`}>Products</Link>
          </li>
          <li>
            <Link to={`contact`}>Contact</Link>
          </li>
          <li>
            <Link to={`signin`}>Sign in</Link>
          </li>
          <li>
            <Link to={`register`}>Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
