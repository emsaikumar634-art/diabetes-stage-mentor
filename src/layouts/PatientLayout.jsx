import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function PatientLayout() {
  return (
    <div className="patient-app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">♡</div>

          <div>
            <h2>Diabetes Care</h2>
            <span>Patient Portal</span>
          </div>
        </div>

        <nav className="sidebar-nav">

          <NavLink to="/patient/dashboard">
            <span>⌂</span>
            Dashboard
          </NavLink>

          <NavLink to="/patient/daily-journey">
            <span>✦</span>
            Daily Journey
          </NavLink>

          <NavLink to="/patient/log-entry">
            <span>🩸</span>
            Log Glucose
          </NavLink>

          <NavLink to="/patient/glucose-history">
            <span>▣</span>
            Glucose History
          </NavLink>

          <NavLink to="/patient/trends">
            <span>⌁</span>
            Trends & Baseline
          </NavLink>

          <NavLink to="/patient/daily-activities">
            <span>♧</span>
            Daily Activities
          </NavLink>

          <NavLink to="/patient/weekly-review">
            <span>▤</span>
            Weekly Review
          </NavLink>

          <NavLink to="/patient/education">
            <span>▧</span>
            Education
          </NavLink>

          <NavLink to="/patient/ai-insights">
            <span>✧</span>
            AI Insights
          </NavLink>

        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/">
            <span>↪</span>
            Logout
          </NavLink>
        </div>

      </aside>


      {/* MAIN AREA */}
      <div className="main-area">

        <header className="top-header">

          <div>
            <h3>Diabetes Type 2 Stage Mentor</h3>
            <p>Your gentle daily companion</p>
          </div>

          <div className="profile-area">
            <button className="notification">🔔</button>

            <div className="profile">
              <div className="profile-avatar">T</div>

              <div>
                <strong>Patient</strong>
                <small>My Profile</small>
              </div>
            </div>
          </div>

        </header>


        {/* PAGE CONTENT */}
        <main className="page-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default PatientLayout;