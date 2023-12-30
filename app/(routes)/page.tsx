import { getAllTodos } from "@/api";
import AddTask from "@/components/add-task";
import TodoList from "@/components/todo-list";

const HomePage = async () => {
  const tasks = await getAllTodos();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-black bg-opacity-30 p-6 rounded-lg max-w-2xl w-full flex items-center flex-col">
        <h1 className="text-3xl font-semibold">Todo App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
};

export default HomePage;
