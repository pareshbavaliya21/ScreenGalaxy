import { useNavigate, useParams } from "react-router-dom";
import GetPoster from "./GetPoster";
import MovisePoster2 from "./MovisePoster";
import AllCast2 from "./AllCast";
import styles from "./MovisePosterCast.module.css"; // Import CSS module
import { ArrowLeft } from "lucide-react"; // Using Lucide-react for the back icon

const MovisePosterCast = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.container}>
      {/* Back Icon in the top-left corner */}
      <button
        onClick={handleBack}
        className={styles.backButton}
        aria-label="Go Back"
      >
        <ArrowLeft size={24} />
      </button>
      {/* Movie Details */}
      <GetPoster id={id} />
      <MovisePoster2 id={id} />
      <AllCast2 id={id} />
    </div>
  );
};

export default MovisePosterCast;
