"use client";

import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.text);
  const [deleteTask, setDeleteTask] = useState<string>(task.id);

  const handleEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: editTask,
    });
    setEditTask("");
    setOpenModalEdit(false);
    location.reload();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    location.reload();
  };

  return (
    <>
      {/* row 1 */}
      <tr key={task.id}>
        <td>{task.text}</td>
        <td className="flex gap-2">
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            size={18}
            className="text-blue-500 cursor-pointer"
          />
          <Modal
            openModal={openModalEdit}
            setOpenModal={setOpenModalEdit}
            title="Update task"
          >
            <form onSubmit={handleEdit} className="modal-action">
              <input
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                type="text"
                placeholder="Type here..."
                className="input input-bordered w-full max-x-xs"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </Modal>
          <FiTrash
            onClick={() => setOpenModalDelete(true)}
            size={18}
            className="text-red-500 cursor-pointer"
          />
          <Modal
            openModal={openModalDelete}
            setOpenModal={setOpenModalDelete}
            title="Delete task"
          >
            <div>Are you sure you want to delete this task?</div>
            <div className="space-x-6  mt-4">
              <button onClick={() => setOpenModalDelete(false)} className="btn">
                Back
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default Task;
