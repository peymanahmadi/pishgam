const Zigzag = ({ title, desc, color }) => {
  return (
    <div className={`zigzag ${color === "white" ? "white" : "grey"}`}>
      {color === "white" && <div>Image</div>}
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      {color === "grey" && <div>Image</div>}
    </div>
  );
};

export default Zigzag;
