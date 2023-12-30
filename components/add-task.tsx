"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./ui/modal";
import { FormEventHandler, useState } from "react";
import {createTodo} from '@/api'
import {v4 as uuidv4} from 'uuid'

const AddTask = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [addTask, setAddTask] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await createTodo({
        id: uuidv4(),
        text: addTask
    })
    setAddTask('')
    setOpenModal(false)
    location.reload()
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="btn my-6">
        <span className="text-lg font-light">Add new task</span>
        <AiOutlinePlus />
      </button>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Add new task"
      >
        <form onSubmit={handleSubmit} className="modal-action">
          <input
          value={addTask}
          onChange={e => setAddTask(e.target.value)}
            type="text"
            placeholder="Type here..."
            className="input input-bordered w-full max-x-xs"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddTask;
