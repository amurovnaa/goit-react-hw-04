import Modal from "react-modal";
import s from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};
Modal.setAppElement("#root");
const ImageModal = ({ results, closeModal, imageUrl }) => {
  console.log(results);
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };
  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
      onKeyDown={handleKeyDown}
    >
      <img src={imageUrl} alt="Modal Image" className={s.image}></img>
      <button className={s.button} onClick={closeModal}>
        close
      </button>
    </Modal>
  );
};
export default ImageModal;
