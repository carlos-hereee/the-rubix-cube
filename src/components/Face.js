import shortid from "shortid";

const Face = ({ cube, name }) => {
  return (
    <div className={name}>
      {cube &&
        cube.map((data) => (
          <div key={shortid.generate()} className={`cube-square--${data}`} />
        ))}
    </div>
  );
};
export default Face;
