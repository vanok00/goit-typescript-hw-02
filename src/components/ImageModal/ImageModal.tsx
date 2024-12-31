// import Modal from "react-modal";
// import styles from "./ImageModal.module.css";
// import { useEffect } from "react";
// import { Image } from "../App/App.types";

// Modal.setAppElement("#root");

// interface ImageModal {
//   image: Image;
//   openModal: boolean;
//   closeModal: () => void;
//   src: string;
//   alt: string;
// }
// const ImageModal: React.FC<ImageModal> = ({
//   image,
//   openModal,
//   closeModal,
//   src,
//   alt,
// }) => {

//   useEffect(() => {
//     if (openModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [openModal]);
//   return (
//     <div>
//       <Modal
//         isOpen={openModal}
//         onRequestClose={closeModal}
//         className={styles.modal}
//         contentLabel="Example Modal"
//         overlayClassName={styles.overlay}
//       >
//         <div>
//           <img className={styles.ImageModal} src={src} alt={alt} />
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ImageModal;
// import Modal from "react-modal";
// import styles from "./ImageModal.module.css";
// import { useEffect } from "react";
// import { Image } from "../App/App.types";

// Modal.setAppElement("#root");

// interface ImageModalProps {
//   image: Image | null;
//   openModal: boolean;
//   closeModal: () => void;
// }

// const ImageModal: React.FC<ImageModalProps> = ({
//   image,
//   openModal,
//   closeModal,
// }) => {
//   useEffect(() => {
//     if (openModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [openModal]);

//   if (!image) return null;

//   return (
//     <Modal
//       isOpen={openModal}
//       onRequestClose={closeModal}
//       className={styles.modal}
//       contentLabel="Image Modal"
//       overlayClassName={styles.overlay}
//     >
//       <div>
//         <img
//           className={styles.ImageModal}
//           src={image.urls.regular}
//           alt={image.alt_description || "Image"}
//         />
//         <p className={styles.ImageAuthor}>Photo by {image.user.name}</p>
//         <button className={styles.CloseButton} onClick={closeModal}>
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ImageModal;

import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { useEffect } from "react";
import { Image } from "../App/App.types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image | null;
  closeModal: () => void;
  openModal?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  closeModal,
  openModal,
}) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  if (!image) return null;

  return (
    <Modal
      isOpen={openModal ?? !!image}
      onRequestClose={closeModal}
      className={styles.modal}
      contentLabel="Image Modal"
      overlayClassName={styles.overlay}
    >
      <div>
        <img
          className={styles.ImageModal}
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
        />
        <p className={styles.ImageAuthor}>Photo by {image.user.name}</p>
        <button className={styles.CloseButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
