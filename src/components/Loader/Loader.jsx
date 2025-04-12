import BeatLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <BeatLoader color="#ff8484" height={80} width={80} aria-label="loading" />
    </div>
  );
};

export default Loader;
