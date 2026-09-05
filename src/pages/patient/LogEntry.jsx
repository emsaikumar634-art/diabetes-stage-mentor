import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogEntry() {
  const navigate = useNavigate();

  const [glucose, setGlucose] = useState("");
  const [readingType, setReadingType] = useState("Fasting");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (!glucose) {
      setMessage("Please enter your glucose value.");
      return;
    }

    const value = Number(glucose);

    if (value <= 0) {
      setMessage("Please enter a valid glucose value.");
      return;
    }

    const newReading = {
      id: Date.now(),
      value: value,
      type: readingType,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const existingReadings =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    localStorage.setItem(
      "glucoseReadings",
      JSON.stringify([newReading, ...existingReadings])
    );

    setMessage("Glucose reading saved successfully!");

    setGlucose("");

    setTimeout(() => {
      navigate("/patient/glucose-history");
    }, 800);
  };

  return (
    <div className="page-container">

      <div className="form-card">

        <div className="form-icon">🩸</div>

        <p className="eyebrow">DAILY HEALTH TRACKING</p>

        <h1>Log Glucose Reading</h1>

        <p className="form-description">
          Record your glucose reading to track your progress and understand
          your patterns over time.
        </p>

        <div className="form-group">
          <label>Glucose Level</label>

          <div className="input-with-unit">
            <input
              type="number"
              placeholder="Enter glucose value"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
            />

            <span>mg/dL</span>
          </div>
        </div>


        <div className="form-group">
          <label>Reading Type</label>

          <select
            value={readingType}
            onChange={(e) => setReadingType(e.target.value)}
          >
            <option value="Fasting">Fasting</option>
            <option value="Before Meal">Before Meal</option>
            <option value="After Meal">After Meal</option>
            <option value="Bedtime">Bedtime</option>
            <option value="Random">Random</option>
          </select>
        </div>


        {message && (
          <div className="form-message">
            {message}
          </div>
        )}


        <button
          className="save-reading-button"
          onClick={handleSave}
        >
          Save Reading
        </button>


        <button
          className="secondary-button"
          onClick={() => navigate("/patient/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default LogEntry;