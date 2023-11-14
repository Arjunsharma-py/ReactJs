import { useContext } from "react";
import TaskContext from "../components/state-management/tasks/taskContext";

const useTasks = () => useContext(TaskContext);

export default useTasks;
