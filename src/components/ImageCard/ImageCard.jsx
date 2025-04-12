const ImageCard = ({ urls, alt_description }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        width="270px"
        height="170px"
      />
    </div>
  );
};
export default ImageCard;
