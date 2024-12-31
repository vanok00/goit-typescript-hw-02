import { Image, handleOpenImage } from "../App/App.types";

export interface ImageCardProps {
  image: Image;
  handleOpenImage: handleOpenImage;
}

export default function ImageCard({ image, handleOpenImage }: ImageCardProps) {
  return (
    <div onClick={() => handleOpenImage(image)}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
}
