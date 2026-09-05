import { useEffect, useState } from "react";

function AIInsights() {
  const [readings, setReadings] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const glucoseData =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    const activityData =
      JSON.parse(localStorage.getItem("dailyActivities")) || [];

    setReadings(glucoseData);
    setActivities(activityData);
  }, []);

  const values = readings
    .map((reading) => Number(reading.value))
    .filter((value) => !isNaN(value));

  const average =
    values.length > 0
      ? Math.round(
          values.reduce((sum, value) => sum + value, 0) /
            values.length
        )
      : null;

  const highest =
    values.length > 0 ? Math.max(...values) : null;

  const lowest =
    values.length > 0 ? Math.min(...values) : null;

  let glucoseInsight = "";
  let trendStatus = "Not enough data";

  if (values.length === 0) {
    glucoseInsight =
      "Start recording your glucose readings regularly to receive useful insights.";
  } else if (values.length === 1) {
    glucoseInsight =
      "You have recorded your first glucose reading. Continue tracking consistently so patterns can become clearer.";
  } else {
    const difference = highest - lowest;

    if (difference <= 30) {
      trendStatus = "Relatively stable";

      glucoseInsight =
        "Your recent readings are relatively close to each other. Continue tracking consistently to understand your longer-term pattern.";
    } else {
      trendStatus = "Some variation";

      glucoseInsight =
        "Your readings show some variation. Keep recording consistently and discuss significant or persistent changes with your healthcare professional.";
    }
  }

  return (
    <div className="ai-insights-page">

      {/* HEADER */}

      <div className="ai-header">

        <p className="step-text">
          PERSONALIZED INSIGHTS
        </p>

        <h1>
          Your AI Insights
        </h1>

        <p>
          A simple summary of patterns found in
          your recorded health data.
        </p>

      </div>


      {/* MAIN INSIGHT */}

      <div className="ai-main-card">

        <div className="ai-main-icon">
          ✨
        </div>

        <div>

          <p className="ai-label">
            WHAT WE NOTICED
          </p>

          <h2>
            {trendStatus}
          </h2>

          <p>
            {glucoseInsight}
          </p>

        </div>

      </div>


      {/* DATA CARDS */}

      <div className="ai-data-grid">

        <div className="ai-data-card">

          <span>
            Average glucose
          </span>

          <strong>
            {average !== null
              ? `${average} mg/dL`
              : "--"}
          </strong>

          <small>
            Based on recorded readings
          </small>

        </div>


        <div className="ai-data-card">

          <span>
            Highest reading
          </span>

          <strong>
            {highest !== null
              ? `${highest} mg/dL`
              : "--"}
          </strong>

          <small>
            Recorded value
          </small>

        </div>


        <div className="ai-data-card">

          <span>
            Lowest reading
          </span>

          <strong>
            {lowest !== null
              ? `${lowest} mg/dL`
              : "--"}
          </strong>

          <small>
            Recorded value
          </small>

        </div>


        <div className="ai-data-card">

          <span>
            Activities logged
          </span>

          <strong>
            {activities.length}
          </strong>

          <small>
            Recorded activities
          </small>

        </div>

      </div>


      {/* RECOMMENDATION */}

      <div className="ai-recommendation">

        <div className="recommendation-icon">
          💡
        </div>

        <div>

          <h2>
            Helpful next step
          </h2>

          <p>
            Continue recording your glucose readings
            and daily activities consistently. More
            complete data can help you understand
            your patterns over time.
          </p>

        </div>

      </div>


      {/* DATA STATUS */}

      <div className="ai-data-status">

        <div>
          <strong>
            Data used for insights
          </strong>

          <p>
            {readings.length} glucose reading
            {readings.length !== 1 ? "s" : ""} and{" "}
            {activities.length} activit
            {activities.length !== 1 ? "ies" : "y"} recorded.
          </p>
        </div>

        <span>
          ✓ Updated
        </span>

      </div>


      {/* DISCLAIMER */}

      <p className="ai-disclaimer">
        These insights are for educational and
        tracking purposes only. They are not a
        medical diagnosis or a replacement for
        professional medical advice.
      </p>

    </div>
  );
}

export default AIInsights;