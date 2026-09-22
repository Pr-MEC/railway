import { useNavigate } from "react-router-dom";

function ExploreTrain() {

  const navigate = useNavigate();

  return (
    <div className="simple-page">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Home
      </button>

      <div className="simple-card">

        <div className="large-icon">
          🚆
        </div>

        <h1>
          Explore Train
        </h1>

        <p>
          Search for trains between your
          source and destination.
        </p>

        <input
          className="simple-input"
          placeholder="From station"
        />

        <input
          className="simple-input"
          placeholder="To station"
        />

        <button className="primary-btn">
          Search Trains
        </button>

      </div>

    </div>
  );
}

export default ExploreTrain;
