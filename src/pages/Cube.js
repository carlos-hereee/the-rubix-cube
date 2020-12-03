import { useContext } from "react";
import { CubeContext } from "../utils/context/CubeState";
import Face from "../components/Face";
// import { Swiper, SwiperSlide } from "swiper/react";

const Cube = () => {
  const { cube } = useContext(CubeContext);
  return (
    <div className="cube">
      <Face cube={cube.bottom_face} />
      <Face cube={cube.front_face} />
      <Face cube={cube.right_face} />
      <Face cube={cube.left_face} />
      <Face cube={cube.top_face} />
      <Face cube={cube.back_face} />
    </div>
  );
};
export default Cube;
