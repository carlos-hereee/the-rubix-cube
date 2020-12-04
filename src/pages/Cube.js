import { useContext, useEffect, useState, useRef, useCallback } from "react";
import { CubeContext } from "../utils/context/CubeState";
import Face from "../components/Face";
// import { Swiper, SwiperSlide } from "swiper/react";

const Cube = () => {
  const { cube } = useContext(CubeContext);

  const box = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [angle, setAngle] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [boxCenterPoint, setBoxCenterPoint] = useState({});

  // to avoid unwanted behaviour, deselect all text
  const deselectAll = () => {
    if (document.selection) {
      document.selection.empty();
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
  };

  // method to get the position of the pointer event relative to the center of the box
  const getPositionFromCenter = useCallback(
    (e) => {
      const fromBoxCenter = {
        x: e.clientX - boxCenterPoint.x,
        y: -(e.clientY - boxCenterPoint.y),
      };
      return fromBoxCenter;
    },
    [boxCenterPoint]
  );

  const mouseDownHandler = (e) => {
    e.stopPropagation();
    const fromBoxCenter = getPositionFromCenter(e);
    const newStartAngle =
      90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);
    setStartAngle(newStartAngle);
    setIsActive(true);
  };

  const mouseUpHandler = useCallback(
    (e) => {
      deselectAll();
      e.stopPropagation();
      if (isActive) {
        const newCurrentAngle = currentAngle + (angle - startAngle);
        setIsActive(false);
        setCurrentAngle(newCurrentAngle);
      }
    },
    [isActive, angle, currentAngle, startAngle]
  );

  const mouseMoveHandler = useCallback(
    (e) => {
      if (isActive) {
        const fromBoxCenter = getPositionFromCenter(e);
        const newAngle =
          90 - Math.atan2(fromBoxCenter.y, fromBoxCenter.x) * (180 / Math.PI);
        box.current.style.transform =
          "rotate(" +
          (currentAngle + (newAngle - (startAngle ? startAngle : 0))) +
          "deg)";
        setAngle(newAngle);
      }
    },
    [isActive, currentAngle, startAngle, getPositionFromCenter]
  );

  useEffect(() => {
    const boxPosition = box.current.getBoundingClientRect();
    // get the current center point
    const boxCenterX = boxPosition.left + boxPosition.width / 2;
    const boxCenterY = boxPosition.top + boxPosition.height / 2;
    // update the state
    setBoxCenterPoint({ x: boxCenterX, y: boxCenterY });
  }, []);

  useEffect(() => {
    // in case the event ends outside the box
    window.onmouseup = mouseUpHandler;
    window.onmousemove = mouseMoveHandler;
  }, [mouseUpHandler, mouseMoveHandler]);

  return (
    <div
      className="cube"
      ref={box}
      onMouseUp={mouseUpHandler}
      onMouseDown={mouseDownHandler}>
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
