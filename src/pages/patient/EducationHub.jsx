import { useState } from "react";

function EducationHub() {
  const [openTopic, setOpenTopic] = useState(null);

  const topics = [
    {
      icon: "🩸",
      title: "Understanding Glucose",
      text: "Learn how glucose readings can change throughout the day.",
      details:
        "Blood glucose can vary depending on meals, physical activity, stress, sleep and other factors. Tracking your readings consistently can help you and your healthcare team understand patterns over time."
    },
    {
      icon: "🥗",
      title: "Healthy Food Choices",
      text: "Learn simple ways to make balanced food choices.",
      details:
        "A balanced eating pattern can include vegetables, whole grains, protein sources and appropriate portions. Try to build regular, balanced meals and follow the nutrition advice provided by your healthcare professional."
    },
    {
      icon: "🚶",
      title: "Physical Activity",
      text: "Learn about the importance of regular activity.",
      details:
        "Regular physical activity can support overall health and can affect blood glucose levels. Choose activities that are appropriate for your abilities and follow your healthcare professional's recommendations."
    },
    {
      icon: "💊",
      title: "Medication Awareness",
      text: "Learn about following your prescribed medication plan.",
      details:
        "Take medicines exactly as prescribed by your healthcare professional. Do not change, stop or adjust medication on your own. If you have questions or experience problems, discuss them with your healthcare team."
    }
  ];

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <div className="education-page">

      {/* HEADER */}

      <div className="education-header">

        <p className="step-text">
          LEARN & GROW
        </p>

        <h1>Education Hub</h1>

        <p>
          Explore simple information to better understand
          your diabetes journey.
        </p>

      </div>


      {/* TOPICS */}

      <div className="education-grid">

        {topics.map((topic, index) => (

          <div
            className={`education-card ${
              openTopic === index ? "education-card-open" : ""
            }`}
            key={index}
          >

            <div className="education-icon">
              {topic.icon}
            </div>

            <h2>
              {topic.title}
            </h2>

            <p>
              {topic.text}
            </p>

            <button
              type="button"
              className="education-button"
              onClick={() => toggleTopic(index)}
            >
              {openTopic === index
                ? "Show less ↑"
                : "Learn more →"}
            </button>


            {/* DETAILS */}

            {openTopic === index && (

              <div className="education-details">

                <p>
                  {topic.details}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>


      {/* FOOTER NOTE */}

      <div className="education-note">

        <span>💡</span>

        <div>
          <strong>
            Remember
          </strong>

          <p>
            This information is for general education.
            For personal medical advice, always speak
            with your healthcare professional.
          </p>
        </div>

      </div>

    </div>
  );
}

export default EducationHub;