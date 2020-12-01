import { useContext } from "react";
import { CubeContext } from "../utils/context/CubeState";
import Face from "../components/Face";

const Cube = () => {
  const { cube } = useContext(CubeContext);
  return (
    <div className="cube-container">
      <Face cube={cube.front_face} name="cube-front-face" />
      <Face cube={cube.right_face} name="cube-right-face" />
      <Face cube={cube.left_face} name="cube-left-face" />
    </div>
  );
};
export default Cube;
