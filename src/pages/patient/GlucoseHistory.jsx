import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GlucoseHistory() {
  const navigate = useNavigate();
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    setReadings(saved);
  }, []);

  return (
    <div className="history-page">

      <div className="history-header">
        <div>
          <p className="eyebrow">YOUR HEALTH DATA</p>
          <h1>Glucose History</h1>
          <p>
            Review your previous glucose readings and track your progress.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/patient/log-entry")}
        >
          + Log Reading
        </button>
      </div>


      {readings.length === 0 ? (

        <div className="empty-history">
          <div className="empty-icon">🩸</div>

          <h2>No readings yet</h2>

          <p>
            Your glucose readings will appear here after you record them.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/patient/log-entry")}
          >
            Log Your First Reading
          </button>
        </div>

      ) : (

        <div className="history-list">

          {readings.map((reading) => (

            <div className="reading-card" key={reading.id}>

              <div className="reading-main">

                <div className="reading-icon">
                  🩸
                </div>

                <div>
                  <span className="reading-label">
                    {reading.type}
                  </span>

                  <h2>
                    {reading.value}
                    <small> mg/dL</small>
                  </h2>
                </div>

              </div>


              <div className="reading-date">
                <strong>{reading.date}</strong>
                <span>{reading.time}</span>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default GlucoseHistory;