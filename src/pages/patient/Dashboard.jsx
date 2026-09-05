import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* Welcome Section */}
      <section className="welcome-section">
        <div>
          <p className="eyebrow">GOOD MORNING 👋</p>
          <h1>Welcome back, Patient!</h1>
          <p className="welcome-text">
            Let's take one step at a time toward better diabetes management.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/patient/log-entry")}
        >
          + Log Glucose
        </button>
      </section>


      {/* Today's Overview */}
      <section className="section-block">
        <div className="section-heading">
          <div>
            <h2>Today's Overview</h2>
            <p>Your health journey for today</p>
          </div>
        </div>

        <div className="overview-grid">

          <div className="overview-card glucose-card">
            <div className="card-icon">🩸</div>

            <div>
              <span>Latest Glucose</span>
              <h3>—</h3>
              <small>No reading recorded today</small>
            </div>

            <button onClick={() => navigate("/patient/log-entry")}>
              Record
            </button>
          </div>


          <div className="overview-card">
            <div className="card-icon">✓</div>

            <div>
              <span>Daily Progress</span>
              <h3>0%</h3>
              <small>Start today's journey</small>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "0%" }}></div>
            </div>
          </div>


          <div className="overview-card">
            <div className="card-icon">📊</div>

            <div>
              <span>This Week</span>
              <h3>Getting Started</h3>
              <small>Track readings to see your trends</small>
            </div>

            <button onClick={() => navigate("/patient/trends")}>
              View Trends
            </button>
          </div>

        </div>
      </section>


      {/* Daily Journey */}
      <section className="journey-section">

        <div className="section-heading">
          <div>
            <h2>Start Your Daily Journey</h2>
            <p>Complete small steps to build healthy habits.</p>
          </div>

          <button
            className="text-button"
            onClick={() => navigate("/patient/daily-journey")}
          >
            View Journey →
          </button>
        </div>


        <div className="journey-card">

          <div className="journey-progress">
            <div className="journey-circle">
              0%
            </div>

            <div>
              <h3>Today's Progress</h3>
              <p>Complete your daily activities to make progress.</p>
            </div>
          </div>


          <div className="journey-steps">

            <div className="journey-step">
              <div className="step-number">1</div>
              <div>
                <strong>Log your glucose</strong>
                <span>Record today's reading</span>
              </div>
              <button onClick={() => navigate("/patient/log-entry")}>
                Start
              </button>
            </div>


            <div className="journey-step">
              <div className="step-number">2</div>
              <div>
                <strong>Complete activities</strong>
                <span>Track your daily activities</span>
              </div>
              <button onClick={() => navigate("/patient/daily-activities")}>
                Start
              </button>
            </div>


            <div className="journey-step">
              <div className="step-number">3</div>
              <div>
                <strong>Review your progress</strong>
                <span>Understand your weekly journey</span>
              </div>
              <button onClick={() => navigate("/patient/weekly-review")}>
                View
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* Quick Access */}
      <section className="section-block">

        <div className="section-heading">
          <div>
            <h2>Quick Access</h2>
            <p>Everything you need in one place.</p>
          </div>
        </div>


        <div className="quick-grid">

          <button
            className="quick-card"
            onClick={() => navigate("/patient/glucose-history")}
          >
            <span>📋</span>
            <strong>Glucose History</strong>
            <small>View previous readings</small>
          </button>


          <button
            className="quick-card"
            onClick={() => navigate("/patient/trends")}
          >
            <span>📈</span>
            <strong>Trends & Baseline</strong>
            <small>Understand your patterns</small>
          </button>


          <button
            className="quick-card"
            onClick={() => navigate("/patient/education")}
          >
            <span>📚</span>
            <strong>Education</strong>
            <small>Learn about diabetes care</small>
          </button>


          <button
            className="quick-card"
            onClick={() => navigate("/patient/ai-insights")}
          >
            <span>✨</span>
            <strong>AI Insights</strong>
            <small>View personalized insights</small>
          </button>

        </div>

      </section>


      {/* Bottom Insight */}
      <section className="mentor-card">
        <div className="mentor-icon">💚</div>

        <div>
          <span>Your Stage Mentor</span>
          <h3>Small steps create lasting progress.</h3>
          <p>
            Keep recording your readings and activities. Your dashboard
            will become more personalized as you add information.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;