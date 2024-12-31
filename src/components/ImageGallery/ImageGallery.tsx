import { Image, handleOpenImage } from "../App/App.types";
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export interface ImageGalleryProps {
  images: Image[];
  handleOpenImage: handleOpenImage;
}

export default function ImageGallery({
  images,
  handleOpenImage,
}: ImageGalleryProps) {
  return (
    <ul className={styles.imageContainer}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} handleOpenImage={handleOpenImage} />
        </li>
      ))}
    </ul>
  );
}
