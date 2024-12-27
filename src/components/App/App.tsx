import { useEffect, useState } from "react";
import { fetchArticles } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

interface FetchArticlesResponse {
  results: Image[];
  total_pages: number;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const getImage = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data: FetchArticlesResponse = await fetchArticles(page, query);
        if (data.results.length === 0) {
          toast.error("Sorry, there are no images found for your search!", {
            position: "top-right",
            duration: 3000,
          });
          return;
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

  const handleSetQuery = (searchValue: string): void => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOpenImage = (src: string, alt: string): void => {
    setModalImage(src);
    setAlt(alt);
    setIsOpen(true);
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
      <ImageModal
        openModal={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={alt}
      />
    </>
  );
};

export default App;
