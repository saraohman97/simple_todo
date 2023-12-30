import { ITask } from "@/types/tasks";
import Table from "./ui/table";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
  <>
  <Table tasks={tasks} />
  </>
  )
};

export default TodoList;
