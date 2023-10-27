interface Props {
  total: number;
}

const Navbar = ({ total }: Props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Expense Tracker</span>
        <div className="navbar-brand">Total: {total}</div>
      </div>
    </nav>
  );
};

export default Navbar;
