import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { useEffect } from "react";

Modal.setAppElement("#root");

interface ImageModal {
  openModal: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}
const ImageModal: React.FC<ImageModal> = ({
  openModal,
  closeModal,
  src,
  alt,
}) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
        overlayClassName={styles.overlay}
      >
        <div>
          <img className={styles.ImageModal} src={src} alt={alt} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
