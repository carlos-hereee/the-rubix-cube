import { useContext } from "react";
import { CubeContext } from "../utils/context/CubeState";

const Controller = () => {
  let { turnCube } = useContext(CubeContext);
  return (
    <div className="controller">
      <button type="button" onClick={turnCube}>
        Rotate Side
      </button>
    </div>
  );
};

export default Controller;
