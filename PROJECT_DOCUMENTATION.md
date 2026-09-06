Diabetes Type 2 Stage Mentor — Project Documentation

1. Executive Summary

Diabetes Type 2 Stage Mentor is a patient-focused digital health prototype designed to help people with Type 2 diabetes understand and track their daily health journey.

The application combines glucose logging, glucose history, trend visualization, daily activities, weekly review, diabetes education, and supportive AI insights in one responsive interface.

The system is designed as a supportive health companion and does not replace professional medical advice.

2. Problem Statement

People managing Type 2 diabetes may need to monitor several factors, including glucose readings, physical activity, food choices, medication adherence, weight, sleep, and symptoms.

Managing this information across different tools can make it difficult to identify patterns and maintain consistent daily tracking.

Diabetes Type 2 Stage Mentor provides a single patient-oriented interface for recording, reviewing, and understanding health information.

3. Objectives

- Provide a simple patient onboarding experience.
- Allow users to record glucose readings.
- Display glucose history and trends.
- Support personal baseline tracking.
- Encourage consistent daily health activities.
- Provide weekly health review functionality.
- Provide accessible diabetes education.
- Generate supportive, non-prescriptive AI insights.
- Prepare the application for future multi-user support.
- Follow privacy and AI-safety principles.

4. Target Users

The primary target users are people managing Type 2 diabetes who want a simple digital companion for organizing their daily health information and learning about diabetes management.

The system can later be extended to support pharmacist and healthcare-professional workflows.

5. Core Features

5.1 Patient Onboarding

The application provides an onboarding flow for collecting basic patient information and relevant health information.

5.2 Dashboard

The dashboard provides an overview of the user's health journey and provides navigation to the major application modules.

5.3 Glucose Logging

Users can record glucose readings along with relevant information such as date, time, and context.

5.4 Glucose History

Previously recorded glucose readings can be reviewed through the glucose history section.

5.5 Trends and Baseline

The application provides descriptive glucose statistics such as:

- Average glucose
- Highest reading
- Lowest reading
- Recent glucose variation

The trends page also provides a visual representation of recent readings.

A production implementation should use clinically validated rules for any medical risk classification.

5.6 Daily Journey

Daily Journey encourages users to complete important daily health check-ins, such as glucose recording and activity tracking.

In a production version, completion should be associated with both the authenticated user and the calendar date.

5.7 Daily Activities

Users can record daily activities such as:

- Physical activity
- Meals
- Sleep
- Weight
- Symptoms
- Other health-related observations

Optional image or camera evidence can be supported for activities. Such images represent user-submitted evidence and should not be treated as definitive medical proof.

5.8 Weekly Review

The weekly review provides a summary of available health information and allows the user to submit a weekly report.

5.9 Education Hub

The Education Hub provides educational material covering topics such as:

- Understanding glucose
- Healthy food choices
- Physical activity
- Medication awareness
- Hypoglycaemia awareness
- Foot care

5.10 AI Insights

The AI Insights module can identify simple patterns in recorded information and provide supportive educational explanations.

The AI must remain non-prescriptive.

6. User Flow

Landing Page
     ↓
Get Started
     ↓
Email / Account Identification
     ↓
Tell About Yourself
     ↓
Health Information
     ↓
Patient Dashboard
     ↓
 ┌──────────────────┬──────────────────┬─────────────────┐
 │ Daily Journey    │ Glucose Tracking │ Education       │
 └──────────────────┴──────────────────┴─────────────────┘
             ↓
       Trends / Review
             ↓
     Supportive Insights

7. Technology Stack

Frontend

- React
- JavaScript / JSX
- CSS

Build Tool

- Vite

Routing

- React Router

Icons

- Lucide React

Prototype Storage

- Browser localStorage

Future Backend

A production version should use a secure backend API and database with authenticated user accounts.

8. Application Structure

Diabetes app/
└── client/
    ├── public/
    ├── src/
    │   ├── layouts/
    │   │   └── PatientLayout.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   └── patient/
    │   │       ├── PatientInfo.jsx
    │   │       ├── HealthData.jsx
    │   │       ├── Dashboard.jsx
    │   │       ├── DailyJourney.jsx
    │   │       ├── LogEntry.jsx
    │   │       ├── GlucoseHistory.jsx
    │   │       ├── Trends.jsx
    │   │       ├── DailyActivities.jsx
    │   │       ├── WeeklyReview.jsx
    │   │       ├── EducationHub.jsx
    │   │       └── AIInsights.jsx
    │   ├── App.jsx
    │   └── App.css
    ├── package.json
    └── vite.config.js

9. Application Routes

/patient/dashboard
/patient/daily-journey
/patient/log-entry
/patient/glucose-history
/patient/trends
/patient/daily-activities
/patient/weekly-review
/patient/education
/patient/ai-insights

10. Prototype Data Model

Example glucose record:

{
  value: number,
  date: string,
  time: string,
  context: string
}

Example activity record:

{
  type: string,
  description: string,
  date: string,
  proofImage: optional
}

A production implementation should additionally associate every record with an authenticated user ID and appropriate timestamps.

11. Pattern Detection

The prototype can calculate descriptive information including average, highest, lowest, and recent variation.

A future clinically validated system may classify patterns into categories such as:

- Stable
- Needs Attention
- Significant Change

Any medical risk classification must be based on validated clinical rules and reviewed by qualified healthcare professionals before real-world use.

12. AI Safety

The AI component is intended only for supportive and educational purposes.

The AI should:

- Explain observed patterns.
- Help users understand their recorded information.
- Encourage consistent tracking.
- Encourage professional review when appropriate.
- Clearly communicate uncertainty.

The AI should not:

- Diagnose medical conditions.
- Prescribe medication.
- Change medication dosage.
- Replace a doctor or healthcare professional.
- Present uncertain information as medical certainty.

13. Privacy and Security

The current application is a prototype and uses browser localStorage for demonstration purposes.

A production implementation should include:

- Secure authentication
- Authorization
- HTTPS
- Secure API communication
- Encryption where appropriate
- Input validation
- Access controls
- Audit logging
- Secure database storage
- Appropriate privacy and healthcare compliance

No passwords, API keys, access tokens, or other secrets should be committed to GitHub.

14. Multi-User Architecture

The current localStorage implementation is suitable only for prototype demonstration.

For production, every user's records should be associated with a unique authenticated user ID.

Daily Journey completion should be stored using:

userId + date

This ensures that one user's completed activities do not incorrectly appear as completed for another user.

15. Testing

Important testing areas include:

- Application startup
- Navigation between routes
- Form validation
- Glucose record creation
- Glucose history display
- Trend calculations
- Daily Journey completion
- Activity creation
- Weekly review submission
- Responsive mobile layout
- Production build

The production build was successfully verified using:

npm run build

16. Deployment

For deployment using Netlify with the React application located inside "client":

Base directory: client
Build command: npm run build
Publish directory: dist

Because the application uses React Router, the production host should also serve "index.html" for client-side routes.

17. Current Limitations

- Data is currently stored in browser localStorage.
- Production authentication is not yet implemented.
- A secure backend database is required for real multi-user deployment.
- Clinical risk classification requires professional validation.
- Some educational interactions are currently presentation-focused.
- User-submitted activity images are not medical proof.
- The AI component is educational and must not be used for medical diagnosis or prescription.

18. Future Enhancements

- Secure user authentication
- Multi-user database
- Role-based access
- Medication adherence tracking
- Camera/image activity evidence
- Pharmacist or clinician review
- Notifications and reminders
- Advanced glucose analytics
- Clinically validated risk classification
- Personalized educational content
- PWA/mobile packaging
- Production security and compliance

19. Conclusion

Diabetes Type 2 Stage Mentor demonstrates a patient-centered approach to diabetes self-management support.

The prototype combines health tracking, visualization, education, daily engagement, weekly review, and safe AI-assisted insights in a single responsive interface.

The architecture can be extended into a secure multi-user healthcare-support platform with authentication, backend storage, validated clinical logic, and professional review workflows.