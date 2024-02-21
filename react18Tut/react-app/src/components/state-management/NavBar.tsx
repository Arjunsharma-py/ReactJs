// import { useContext } from "react";
import { LoginStatus } from "./auth";
import useCounterStore from "./counter/store";
// import TaskContext from "./tasks/taskContext";

const NavBar = () => {
  // const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter);

  console.log("Navbar rendered!!");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
