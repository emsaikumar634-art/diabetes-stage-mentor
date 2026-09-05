import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Droplets } from "lucide-react";

function HealthData() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    glucose: "",
    timing: "Fasting",
    weight: "",
    activity: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/patient/dashboard");
  };

  return (
    <div className="patient-info-page">
      <div className="patient-info-card">

        <button
          className="back-button"
          onClick={() => navigate("/patient/info")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="step-text">STEP 2 OF 4</div>

        <div className="health-title-icon">
          <Droplets size={28} />
        </div>

        <h1>Your health data</h1>

        <p className="info-description">
          Add your latest information so Stage Mentor
          can understand your starting point.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Glucose reading (mg/dL)</label>

          <input
            type="number"
            name="glucose"
            placeholder="Example: 120"
            value={data.glucose}
            onChange={handleChange}
            required
          />

          <label>When was it measured?</label>

          <select
            name="timing"
            value={data.timing}
            onChange={handleChange}
          >
            <option>Fasting</option>
            <option>Before meal</option>
            <option>After meal</option>
            <option>Random</option>
          </select>

          <label>Weight (kg)</label>

          <input
            type="number"
            name="weight"
            placeholder="Example: 65"
            value={data.weight}
            onChange={handleChange}
          />

          <label>Today's activity</label>

          <input
            type="text"
            name="activity"
            placeholder="Example: 30 minute walk"
            value={data.activity}
            onChange={handleChange}
          />

          <button className="continue-button" type="submit">
            Continue
            <ArrowRight size={18} />
          </button>

        </form>
      </div>
    </div>
  );
}

export default HealthData;