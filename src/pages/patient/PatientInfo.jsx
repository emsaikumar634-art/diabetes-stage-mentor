import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PatientInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    diabetesType: "Type 2",
    diagnosisYears: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    navigate("/patient/health-data");
  };

  return (
    <div className="patient-info-page">

      <div className="patient-info-card">

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="step-text">
          STEP 1 OF 4
        </div>

        <h1>Tell us about you</h1>

        <p className="info-description">
          This helps us personalize your Diabetes Stage Mentor
          experience.
        </p>

        <form onSubmit={handleContinue}>

          <label>
            Your name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>
            Age
          </label>

          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label>
            Diabetes type
          </label>

          <select
            name="diabetesType"
            value={formData.diabetesType}
            onChange={handleChange}
          >
            <option value="Type 2">Type 2</option>
            <option value="Type 1">Type 1</option>
            <option value="Prediabetes">Prediabetes</option>
          </select>

          <label>
            Years since diagnosis
          </label>

          <input
            type="number"
            name="diagnosisYears"
            placeholder="Example: 3"
            value={formData.diagnosisYears}
            onChange={handleChange}
            min="0"
          />

          <button
            type="submit"
            className="continue-button"
          >
            Continue
            <ArrowRight size={18} />
          </button>

        </form>

      </div>

    </div>
  );
}

export default PatientInfo;