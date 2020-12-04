import { useContext, useEffect } from "react";
import { CubeContext } from "../utils/context/CubeState";
import Face from "../components/Face";
// import { Swiper, SwiperSlide } from "swiper/react";

const Cube = () => {
  const { cube, isTurned } = useContext(CubeContext);
  return (
    <div className="viewport">
      <div className="cube" id={isTurned ? "frontside-cube" : "backside-cube"}>
        <Face cube={cube.bottom_face} />
        <Face cube={cube.front_face} />
        <Face cube={cube.right_face} />
        <Face cube={cube.left_face} />
        <Face cube={cube.top_face} />
        <Face cube={cube.back_face} />
      </div>
    </div>
  );
};
export default Cube;
