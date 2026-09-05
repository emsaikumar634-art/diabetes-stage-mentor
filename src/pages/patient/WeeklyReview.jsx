import { useEffect, useState } from "react";

function WeeklyReview() {
  const [readings, setReadings] = useState([]);
  const [activities, setActivities] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const glucoseData =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    const activityData =
      JSON.parse(localStorage.getItem("dailyActivities")) || [];

    setReadings(glucoseData);
    setActivities(activityData);

    const reportStatus =
      localStorage.getItem("weeklyReportSubmitted");

    if (reportStatus === "true") {
      setSubmitted(true);
    }
  }, []);

  /* --------------------------------
     GET CURRENT WEEK
  -------------------------------- */

  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(
    today.getDate() - today.getDay()
  );
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(
    startOfWeek.getDate() + 6
  );
  endOfWeek.setHours(23, 59, 59, 999);


  /* --------------------------------
     FILTER THIS WEEK'S READINGS
  -------------------------------- */

  const weeklyReadings = readings.filter((reading) => {

    const dateValue =
      reading.date ||
      reading.createdAt ||
      reading.timestamp;

    if (!dateValue) return true;

    const date = new Date(dateValue);

    return (
      date >= startOfWeek &&
      date <= endOfWeek
    );
  });


  /* --------------------------------
     FILTER THIS WEEK'S ACTIVITIES
  -------------------------------- */

  const weeklyActivities = activities.filter((activity) => {

    const dateValue =
      activity.date ||
      activity.createdAt ||
      activity.timestamp;

    if (!dateValue) return true;

    const date = new Date(dateValue);

    return (
      date >= startOfWeek &&
      date <= endOfWeek
    );
  });


  /* --------------------------------
     GLUCOSE AVERAGE
  -------------------------------- */

  const values = weeklyReadings
    .map((item) => Number(item.value))
    .filter((value) => !isNaN(value));

  const average =
    values.length > 0
      ? Math.round(
          values.reduce(
            (sum, value) => sum + value,
            0
          ) / values.length
        )
      : 0;


  /* --------------------------------
     SUBMIT REPORT
  -------------------------------- */

  const handleSubmit = () => {

    localStorage.setItem(
      "weeklyReportSubmitted",
      "true"
    );

    setSubmitted(true);
  };


  return (
    <div className="weekly-review-page">

      {/* HEADER */}

      <div className="weekly-review-header">

        <p className="step-text">
          WEEKLY REVIEW
        </p>

        <h1>
          Your week at a glance
        </h1>

        <p>
          Review your health progress before
          submitting your weekly report.
        </p>

      </div>


      {/* SUMMARY */}

      <div className="weekly-summary">

        <div className="summary-card">

          <span>
            Glucose readings
          </span>

          <strong>
            {weeklyReadings.length}
          </strong>

          <small>
            This week
          </small>

        </div>


        <div className="summary-card">

          <span>
            Average glucose
          </span>

          <strong>
            {average > 0
              ? `${average} mg/dL`
              : "--"}
          </strong>

          <small>
            Weekly average
          </small>

        </div>


        <div className="summary-card">

          <span>
            Activities completed
          </span>

          <strong>
            {weeklyActivities.length}
          </strong>

          <small>
            This week
          </small>

        </div>

      </div>


      {/* REPORT */}

      <div className="weekly-report-card">

        <div className="report-header">

          <div>

            <p className="step-text">
              SUMMARY
            </p>

            <h2>
              Weekly report
            </h2>

            <p>
              Your recorded health information
              from this week.
            </p>

          </div>

        </div>


        {/* GLUCOSE */}

        <div className="report-item">

          <div>
            <span>
              Glucose data
            </span>

            <small>
              Blood glucose readings
            </small>
          </div>

          <strong
            className={
              weeklyReadings.length > 0
                ? "status-available"
                : "status-empty"
            }
          >
            {weeklyReadings.length > 0
              ? "✓ Available"
              : "No data"}
          </strong>

        </div>


        {/* ACTIVITIES */}

        <div className="report-item">

          <div>
            <span>
              Daily activities
            </span>

            <small>
              Exercise, meals and activities
            </small>
          </div>

          <strong
            className={
              weeklyActivities.length > 0
                ? "status-available"
                : "status-empty"
            }
          >
            {weeklyActivities.length > 0
              ? "✓ Available"
              : "No data"}
          </strong>

        </div>


        {/* SUBMIT */}

        {!submitted ? (

          <button
            className="continue-button"
            onClick={handleSubmit}
          >
            Submit Weekly Report →
          </button>

        ) : (

          <div className="report-success">

            <span>✓</span>

            <div>
              <strong>
                Weekly report submitted
              </strong>

              <p>
                Your weekly health summary has
                been recorded successfully.
              </p>
            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default WeeklyReview;