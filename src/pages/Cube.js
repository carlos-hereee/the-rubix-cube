import { useContext } from "react";
import { CubeContext } from "../utils/context/CubeState";
import shortid from "shortid";

const Cube = () => {
  const { cube } = useContext(CubeContext);
  return (
    <div>
      <h1>Hello World</h1>
      {cube.front_face &&
        cube.front_face.map((data) => (
          <div key={shortid.generate()} className={`cube-square--${data}`} />
        ))}
      {cube.right_face &&
        cube.right_face.map((data) => (
          <div key={shortid.generate()} className={`cube-square--${data}`} />
        ))}
      {cube.left_face &&
        cube.left_face.map((data) => (
          <div key={shortid.generate()} className={`cube-square--${data}`} />
        ))}
    </div>
  );
};
export default Cube;
