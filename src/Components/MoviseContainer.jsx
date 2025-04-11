import TeluguMoviseContainer from "./TeluguMoviseContainer";
import style from "./MoviseContainer.module.css";
import { useSelector } from "react-redux";
import HollywoodMovise from "./HollywoodMovise";
import TamilMovise from "./TamilMovise";
import MalayalamMovise from "./MalayalamMovise";
import KannadaMovise from "./KannadaMovise";
import BollywoodMovise from "./BollywoodMovise";
const MoviseContainer = () => {
  const telugu = useSelector((store) => store.teluguMovises);
  const tamil = useSelector((store) => store.tamilMovises);
  const hollywood = useSelector((store) => store.hollywoodMovises);
  const bollywood = useSelector((store) => store.bollywoodMovises);
  const malayalam = useSelector((store) => store.malayalamMovises);
  const kannada = useSelector((store) => store.kannadaMovises);

  // if (!telugu) {
  //   return (
  //     <div class="d-flex justify-content-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }
  // if (!tamil) {
  //   return (
  //     <div class="d-flex justify-content-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }
  // if (!hollywood) {
  //   return (
  //     <><div class="spinner-grow text-primary" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-secondary" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-success" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-danger" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-warning" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-info" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-light" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div>
  //   <div class="spinner-grow text-dark" role="status">
  //     <span class="visually-hidden">Loading...</span>
  //   </div></>
  //   );
  // }
  // if (!bollywood) {
  //   return (
  //     <div class="d-flex justify-content-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }
  // if (!malayalam) {
  //   return (
  //     <div class="d-flex justify-content-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }
  // if (!kannada) {
  //   return (
  //     <div class="d-flex justify-content-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  const handleOnClick = () => {};
  return (
    <div className={style.bodycontainer} onClick={handleOnClick}>
      <HollywoodMovise movises={hollywood} />
      <TeluguMoviseContainer movises={telugu} />
      <TamilMovise movises={tamil} />
      <KannadaMovise movises={kannada} />
      <MalayalamMovise movises={malayalam} />
      <BollywoodMovise movises={bollywood} />
    </div>
  );
};
export default MoviseContainer;
