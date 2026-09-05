import { useState } from "react";

function DailyActivities() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Physical Activity",
      description: "Complete your recommended physical activity.",
      completed: false,
      image: null,
    },
    {
      id: 2,
      title: "Healthy Meal",
      description: "Follow your planned healthy meal.",
      completed: false,
      image: null,
    },
    {
      id: 3,
      title: "Medication",
      description: "Take your medication as prescribed.",
      completed: false,
      image: null,
    },
  ]);

  const handleComplete = (id) => {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              completed: !activity.completed,
            }
          : activity
      )
    );
  };

  const handleImage = (id, event) => {
    const file = event.target.files[0];

    if (!file) return;

    setActivities((current) =>
      current.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              image: file.name,
            }
          : activity
      )
    );
  };

  return (
    <div className="daily-activities-page">

      <div className="daily-activities-header">

        <p className="step-text">
          DAILY JOURNEY
        </p>

        <h1>Today's activities</h1>

        <p>
          Complete your daily activities and record
          your progress.
        </p>

      </div>

      <div className="activities-list">

        {activities.map((activity) => (

          <div
            className="activity-card"
            key={activity.id}
          >

            <div className="activity-content">

              <h2>{activity.title}</h2>

              <p>
                {activity.description}
              </p>

              <button
                type="button"
                className={
                  activity.completed
                    ? "activity-completed"
                    : "activity-button"
                }
                onClick={() =>
                  handleComplete(activity.id)
                }
              >
                {activity.completed
                  ? "✓ Completed"
                  : "Mark as completed"}
              </button>

              <label className="proof-button">

                Add image proof

                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    handleImage(activity.id, event)
                  }
                  hidden
                />

              </label>

              {activity.image && (
                <p className="proof-name">
                  Image added: {activity.image}
                </p>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DailyActivities;