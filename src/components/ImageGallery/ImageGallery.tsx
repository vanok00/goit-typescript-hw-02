import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  handleOpenImage: (src: string, alt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenImage,
}) => {
  return (
    <ul className={styles.imageContainer}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} handleOpenImage={handleOpenImage} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
