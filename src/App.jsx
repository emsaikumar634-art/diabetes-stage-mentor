import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import LoginWithEmail from "./pages/LoginWithEmail";
import PatientInfo from "./pages/patient/PatientInfo";
import HealthData from "./pages/patient/HealthData";
import Trends from "./pages/patient/Trends";
import PatientLayout from "./layouts/PatientLayout";

import Dashboard from "./pages/patient/Dashboard";
import DailyJourney from "./pages/patient/DailyJourney";
import LogEntry from "./pages/patient/LogEntry";
import GlucoseHistory from "./pages/patient/GlucoseHistory";
import DailyActivities from "./pages/patient/DailyActivities";
import WeeklyReview from "./pages/patient/WeeklyReview";
import EducationHub from "./pages/patient/EducationHub";
import AIInsights from "./pages/patient/AIInsights";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />
       <Route path="/login/email" element={<LoginWithEmail />}/>
        {/* ONBOARDING */}
        <Route path="/patient/info" element={<PatientInfo />} />
        <Route path="/patient/health-data" element={<HealthData />} />
        
        {/* PATIENT APPLICATION */}
        <Route path="/patient" element={<PatientLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="daily-journey" element={<DailyJourney />} />

          <Route path="log-entry" element={<LogEntry />} />

          <Route path="glucose-history" element={<GlucoseHistory />} />
          <Route path="trends" element={<Trends />} />



          <Route
            path="daily-activities"
            element={<DailyActivities />}
          />

          <Route
            path="weekly-review"
            element={<WeeklyReview />}
          />

          <Route
            path="education"
            element={<EducationHub />}
          />

          <Route
            path="ai-insights"
            element={<AIInsights />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;