import { useEffect, useState } from "react";
import { calculateBaseline } from "../services/baselineCalculator";

function BaselineCard() {
  const [baseline, setBaseline] = useState(null);

  useEffect(() => {
    const savedReadings =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    const result = calculateBaseline(savedReadings);

    setBaseline(result);
  }, []);

  if (!baseline) {
    return (
      <section className="baseline-card">
        <p className="baseline-label">
          PERSONAL BASELINE
        </p>

        <h2>Not enough data yet</h2>

        <p>
          Add glucose readings to build your personal
          glucose baseline.
        </p>
      </section>
    );
  }

  return (
    <section className="baseline-card">

      <div className="baseline-top">

        <div>
          <p className="baseline-label">
            PERSONAL BASELINE
          </p>

          <h2>
            {baseline.average} mg/dL
          </h2>

          <p>
            Based on {baseline.readingsCount} recorded
            readings
          </p>
        </div>

      </div>

      <div className="baseline-stats">

        <div>
          <span>Lowest</span>
          <strong>
            {baseline.lowest}
          </strong>
          <small>mg/dL</small>
        </div>

        <div>
          <span>Average</span>
          <strong>
            {baseline.average}
          </strong>
          <small>mg/dL</small>
        </div>

        <div>
          <span>Highest</span>
          <strong>
            {baseline.highest}
          </strong>
          <small>mg/dL</small>
        </div>

      </div>

    </section>
  );
}

export default BaselineCard;