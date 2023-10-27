const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="//localhost:3000">
          Navbar{" "}
          <span className="p-1 rounded text-white bg bg-dark">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
