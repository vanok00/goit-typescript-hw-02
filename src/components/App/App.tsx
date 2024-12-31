import { useEffect, useState } from "react";
import { fetchArticles } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";
import { Image } from "./App.types";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [setIsOpen] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const getImage = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        if (data.results.length === 0) {
          toast.error("Sorry, there are no images found for your search!", {
            position: "top-right",
            duration: 3000,
          });
        }
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImage();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue: string) => {
    if (searchValue === query) return;
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const closeModal = () => {
    setIsOpen(null);
  };
  const handleOpenImage = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenImage={handleOpenImage} />
      )}
      {isLoading && <Loader />}
      {isError && query && <ErrorMessage />}
      {images.length > 0 && !isLoading && !isError && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} closeModal={closeModal} />
      )}
    </>
  );
};

export default App;
