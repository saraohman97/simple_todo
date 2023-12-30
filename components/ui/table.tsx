import { ITask } from "@/types/tasks";
import {FiEdit, FiTrash} from 'react-icons/fi'
import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import Task from "./task";

interface TableProps {
  tasks: ITask[];
}

const Table: React.FC<TableProps> = ({ tasks }) => {
  return (
    <>
    <div className="w-full px-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => <Task key={task.id} task={task} />)}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;
