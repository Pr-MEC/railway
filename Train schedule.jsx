import { useNavigate } from "react-router-dom";

function TrainSchedule() {

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
          📅
        </div>

        <h1>
          Train Schedule
        </h1>

        <p>
          Find the route and schedule
          of your train.
        </p>

        <input
          className="simple-input"
          placeholder="Enter train number or name"
        />

        <button className="primary-btn">
          View Schedule
        </button>

      </div>

    </div>
  );
}

export default TrainSchedule;
