import shortid from "shortid";

const Face = ({ cube }) => {
  const mouseOver = (data, idx) => {
    // console.log("data", data);
  };
  return (
    <div className="face">
      {cube &&
        cube.top.map((data, idx) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
          />
        ))}
      {cube &&
        cube.mid.map((data, idx) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
          />
        ))}
      {cube &&
        cube.mid.map((data, idx) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
            draggable
            onDrag={(e) => mouseOver(e, data, idx)}
          />
        ))}
    </div>
  );
};
export default Face;
