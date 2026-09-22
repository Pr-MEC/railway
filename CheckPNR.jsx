import { useNavigate } from "react-router-dom";

function CheckPNR() {

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
          🎫
        </div>

        <h1>
          Check PNR
        </h1>

        <p>
          Enter your 10-digit PNR number
          to check your booking status.
        </p>

        <input
          className="simple-input"
          placeholder="Enter PNR number"
          maxLength="10"
        />

        <button className="primary-btn">
          Check PNR
        </button>

      </div>

    </div>
  );
}

export default CheckPNR;
