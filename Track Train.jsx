import { useNavigate } from "react-router-dom";

function TrackTrain() {

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
          📍
        </div>

        <h1>
          Track Train
        </h1>

        <p>
          Enter a train number to track
          its current journey.
        </p>

        <input
          className="simple-input"
          placeholder="Enter train number"
        />

        <button className="primary-btn">
          Track Train
        </button>

      </div>

    </div>
  );
}

export default TrackTrain;
