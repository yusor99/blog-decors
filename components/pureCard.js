const PureCard = () => {
  return (
    <div className="card">
      <h4 style={{ marginTop: 10, marginBottom: 20 }}>Title</h4>
      <img
        src="/img/card.png"
        style={{ width: 300, height: 200, margin: "auto" }}
      />
      <div className="container-card">
        <div style={{ color: "silver", marginTop: 20, marginBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          malesuada non libero ac dapibus. Pellentesque semper eros non sagittis
          gravida.
        </div>
        <button className="button">More Info</button>
      </div>
    </div>
  );
};
export default PureCard;
