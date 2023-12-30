import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  openModal: boolean;
  children: React.ReactNode;
  title: string;
  setOpenModal: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({
  openModal,
  children,
  title,
  setOpenModal,
}) => {
  return (
    <>
      <dialog
        id="my_modal_4"
        className={`modal ${openModal ? "modal-open" : ""}`}
      >
        <div className="modal-box w-11/12 max-w-lg">
          <div className="flex justify-end">
            <button onClick={() => setOpenModal(false)}>
              <AiOutlineClose size={18} />
            </button>
          </div>
            <h3 className="font-bold text-xl">{title}</h3>
          <div className="py-4">{children}</div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
