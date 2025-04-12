const ImageCard = ({ urls, alt_description, onClick }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        width="270px"
        height="170px"
        onClick={onClick}
      />
    </div>
  );
};
export default ImageCard;
