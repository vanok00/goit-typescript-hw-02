interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  handleOpenImage: (src: string, alt: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleOpenImage }) => {
  return (
    <div
      onClick={() =>
        handleOpenImage(image.urls.regular, image.alt_description || "Image")
      }
    >
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
