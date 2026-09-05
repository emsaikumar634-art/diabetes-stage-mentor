import { useNavigate } from "react-router-dom";
import { HeartPulse, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-circle">
          <HeartPulse size={42} />
        </div>

        <p className="app-label">
          DIABETES TYPE 2
        </p>

        <h1>Stage Mentor</h1>

        <p className="description">
          Your gentle companion for understanding,
          tracking and improving your health journey.
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/login/email")}
        >
          Get Started
          <ArrowRight size={19} />
        </button>

      </div>

    </div>
  );
}

export default Login;