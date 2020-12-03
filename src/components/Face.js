import shortid from "shortid";

const Face = ({ cube }) => {
  return (
    <div className="face">
      {cube &&
        cube.top.map((data) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
          />
        ))}
      {cube &&
        cube.mid.map((data) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
          />
        ))}
      {cube &&
        cube.mid.map((data) => (
          <div
            key={shortid.generate()}
            className="cube-square"
            style={{ background: data }}
          />
        ))}
    </div>
  );
};
export default Face;
