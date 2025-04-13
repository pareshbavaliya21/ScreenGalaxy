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
