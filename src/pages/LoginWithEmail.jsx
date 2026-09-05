import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartPulse, ArrowRight } from "lucide-react";

function LoginWithEmail() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem(
      "currentUserEmail",
      trimmedEmail
    );

    navigate("/patient/info");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-circle">
          <HeartPulse size={42} />
        </div>

        <p className="app-label">
          DIABETES TYPE 2
        </p>

        <h1>Welcome</h1>

        <p className="description">
          Enter your email to continue your
          personal health journey.
        </p>

        <form onSubmit={handleContinue}>

          <div className="email-field">

            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

            {error && (
              <p className="email-error">
                {error}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="start-button"
          >
            Continue
            <ArrowRight size={19} />
          </button>

        </form>

        <p className="login-note">
          Your information is used to personalize
          your experience.
        </p>

      </div>

    </div>
  );
}

export default LoginWithEmail;