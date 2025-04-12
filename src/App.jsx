import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast, Toaster } from "react-hot-toast";
import { fetchData } from "./services/Api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [data, setData] = useState({ results: [], total_pages: 1 });
  const [query, setQuery] = useState("spring");
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(query, page, abortController.signal);
        setData((prev) => ({
          results: [...prev.results, ...data.results],
          total_pages: data.total_pages,
        }));
        if (data.results.length === 0) {
          toast.error("No images found...");
        }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setIsError(true);
          toast.error("Try again later...");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setData({ results: [], total_pages: 1 });
    setPage(1);
  };

  const nextPage = page + 1;
  const changeTotalPages = data.total_pages - nextPage;
  const handleLoadMore = () => {
    setPage(nextPage);
  };

  const openModal = (modalImageUrl) => {
    setModalImageUrl(modalImageUrl);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setModalImageUrl("");
    setIsOpenModal(false);
  };
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <Toaster position="top-right" />

      {data.results.length > 0 && (
        <ImageGallery results={data.results} onCardClick={openModal} />
      )}
      {isError && <ErrorMessage message={isError} />}
      {isLoading && <Loader />}
      {changeTotalPages > -1 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpenModal && (
        <ImageModal
          imageUrl={modalImageUrl}
          results={data.results}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
