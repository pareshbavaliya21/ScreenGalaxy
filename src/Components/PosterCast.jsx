import { useNavigate, useParams } from "react-router-dom";
import AllCast from "./AllCast";
import GetPoster from "./GetPoster";
import MovisePoster from "./MovisePoster";
import styles from "./MovisePosterCast.module.css";
import { ArrowLeft } from "lucide-react"; // Icon library

const PosterCast = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.container}>
      {/* Back icon in the top-left corner */}
      <button
        onClick={handleBack}
        className={styles.backButton}
        aria-label="Go Back"
      >
        <ArrowLeft size={24} />
      </button>
      <GetPoster id={id} />
      <MovisePoster />
      <AllCast />
    </div>
  );
};

export default PosterCast;
