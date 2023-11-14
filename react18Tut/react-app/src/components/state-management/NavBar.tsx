import { useContext } from "react";
import { LoginStatus } from "./auth";
import TaskContext from "./tasks/taskContext";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
