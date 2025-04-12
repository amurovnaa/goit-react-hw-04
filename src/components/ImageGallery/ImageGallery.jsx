import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ results }) => {
  return (
    <ul className={s.list}>
      {results.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.list}>
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
