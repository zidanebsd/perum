import "../style/Components.scss"

const ContentDashboard = () => {
  return (
    <div className="contentDashboard-admin">
      <div className="section-one">
        <p>House Sold</p>
        <div className="section-one-box">
          <div>
            <p>8</p>
            <p>subsidy</p>
          </div>
          <div>
            <p>6</p>
            <p>commercial</p>
          </div>
          <div>
            <p>5</p>
            <p>shop</p>
          </div>
          <div>
            <p>12</p>
            <p>cluster</p>
          </div>
        </div>
      </div>
      <p>Analysis</p>
      <div className="section-two">
        <div>
          <p>Interested</p>
          <p>25</p>
        </div>
        <div>
          <p>Occupants</p>
          <p>85</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
