import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function DailyJourney() {
  const navigate = useNavigate();

  const [glucoseDone, setGlucoseDone] = useState(false);
  const [activitiesDone, setActivitiesDone] = useState(false);

  useEffect(() => {
    const readings =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    const activities =
      JSON.parse(localStorage.getItem("dailyActivities")) || [];

    setGlucoseDone(readings.length > 0);
    setActivitiesDone(activities.length > 0);
  }, []);

  const completed = [glucoseDone, activitiesDone].filter(Boolean).length;
  const total = 2;
  const progress = Math.round((completed / total) * 100);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="daily-journey-page">

      {/* HEADER */}
      <div className="journey-header">

        <div>
          <p className="eyebrow">YOUR DAILY HEALTH JOURNEY</p>

          <h1>Today's Journey</h1>

          <p>{today}</p>
        </div>

        <div className="journey-status">
          <strong>{progress}%</strong>
          <span>{completed} of {total} completed</span>
        </div>

      </div>


      {/* PROGRESS */}
      <section className="journey-progress-card">

        <div className="progress-top">
          <div>
            <h2>Today's Progress</h2>
            <p>
              {completed === total
                ? "You've completed today's journey."
                : "Complete today's health check-ins."}
            </p>
          </div>

          <strong>
            {completed}/{total}
          </strong>
        </div>

        <div className="journey-progress-bar">
          <div
            className="journey-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="progress-bottom">
          <span>{progress}% complete</span>

          {completed === total && (
            <span className="journey-complete">
              ✓ Journey Completed
            </span>
          )}
        </div>

      </section>


      {/* DAILY CHECK-IN */}
      <section className="journey-section">

        <div className="journey-section-heading">
          <div>
            <p className="eyebrow">TODAY</p>
            <h2>Daily Check-in</h2>
          </div>

          <p>Keep your health journey updated.</p>
        </div>


        <div className="journey-tasks">

          {/* GLUCOSE */}
          <div
            className={`journey-task ${
              glucoseDone ? "task-completed" : ""
            }`}
          >

            <div className="task-icon glucose-icon">
              🩸
            </div>

            <div className="task-details">
              <h3>Glucose Reading</h3>

              <p>
                Record your glucose level for today.
              </p>
            </div>

            {glucoseDone ? (
              <div className="task-badge">
                ✓ Completed
              </div>
            ) : (
              <button
                className="task-button"
                onClick={() => navigate("/patient/log-entry")}
              >
                Log Now →
              </button>
            )}

          </div>


          {/* ACTIVITIES */}
          <div
            className={`journey-task ${
              activitiesDone ? "task-completed" : ""
            }`}
          >

            <div className="task-icon activity-icon">
              🚶
            </div>

            <div className="task-details">
              <h3>Daily Activities</h3>

              <p>
                Record exercise, meals and other activities.
              </p>
            </div>

            {activitiesDone ? (
              <div className="task-badge">
                ✓ Completed
              </div>
            ) : (
              <button
                className="task-button"
                onClick={() =>
                  navigate("/patient/daily-activities")
                }
              >
                Add Activity →
              </button>
            )}

          </div>

        </div>

      </section>


      {/* MOTIVATION */}
      <section className="journey-message">

        <div className="message-icon">
          ✨
        </div>

        <div>
          <h3>
            {completed === total
              ? "Wonderful work today!"
              : "You're making progress!"}
          </h3>

          <p>
            Every small step helps you understand your health
            journey better.
          </p>
        </div>

      </section>

    </div>
  );
}

export default DailyJourney;