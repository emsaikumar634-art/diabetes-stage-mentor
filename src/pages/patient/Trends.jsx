import { useEffect, useState } from "react";

function Trends() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    setReadings(saved);
  }, []);

  const validReadings = readings
    .map((reading) => ({
      ...reading,
      value: Number(reading.value),
    }))
    .filter((reading) => !isNaN(reading.value))
    .slice(-7);

  const values = validReadings.map((reading) => reading.value);

  const average =
    values.length > 0
      ? Math.round(
          values.reduce((sum, value) => sum + value, 0) /
            values.length
        )
      : 0;

  const highest = values.length ? Math.max(...values) : 0;
  const lowest = values.length ? Math.min(...values) : 0;

  // Chart dimensions
  const chartWidth = 800;
  const chartHeight = 320;

  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 55;

  const graphWidth =
    chartWidth - paddingLeft - paddingRight;

  const graphHeight =
    chartHeight - paddingTop - paddingBottom;

  // Give the chart some space above and below the readings
  const minValue =
    values.length > 0
      ? Math.floor((lowest - 20) / 10) * 10
      : 0;

  const maxValue =
    values.length > 0
      ? Math.ceil((highest + 20) / 10) * 10
      : 200;

  const getX = (index) => {
    if (values.length === 1) {
      return paddingLeft + graphWidth / 2;
    }

    return (
      paddingLeft +
      (index / (values.length - 1)) * graphWidth
    );
  };

  const getY = (value) => {
    return (
      paddingTop +
      ((maxValue - value) / (maxValue - minValue)) *
        graphHeight
    );
  };

  const points = validReadings
    .map((reading, index) => {
      return `${getX(index)},${getY(reading.value)}`;
    })
    .join(" ");

  const baselineY = getY(average);

  return (
    <div className="trends-page">

      {/* HEADER */}
      <div className="trends-header">

        <p className="eyebrow">
          YOUR HEALTH DATA
        </p>

        <h1>
          Trends & Personal Baseline
        </h1>

        <p>
          Understand your glucose patterns and track your
          personal baseline over time.
        </p>

      </div>

      {values.length === 0 ? (

        <div className="trend-card">
          <h2>No glucose data yet</h2>

          <p>
            Add glucose readings to see your trends and
            personal baseline.
          </p>
        </div>

      ) : (

        <>

          {/* SUMMARY CARDS */}
          <div className="trend-summary">

            <div className="trend-card">
              <span>Personal Baseline</span>

              <h2>
                {average} mg/dL
              </h2>

              <p>
                Average glucose
              </p>
            </div>

            <div className="trend-card">
              <span>Highest Reading</span>

              <h2>
                {highest} mg/dL
              </h2>

              <p>
                Highest recorded
              </p>
            </div>

            <div className="trend-card">
              <span>Lowest Reading</span>

              <h2>
                {lowest} mg/dL
              </h2>

              <p>
                Lowest recorded
              </p>
            </div>

          </div>


          {/* LINE CHART */}
          <div className="trend-chart-card">

            <div className="chart-header">

              <div>
                <h2>
                  Glucose Trend
                </h2>

                <p>
                  Your recent glucose readings
                </p>
              </div>

              <div className="baseline-label">
                <span></span>
                Personal Baseline
              </div>

            </div>


            <div className="line-chart-container">

              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="line-chart"
                preserveAspectRatio="none"
              >

                {/* HORIZONTAL GRID LINES */}

                {[0, 1, 2, 3, 4].map((step) => {

                  const y =
                    paddingTop +
                    (step / 4) * graphHeight;

                  const value = Math.round(
                    maxValue -
                      (step / 4) *
                        (maxValue - minValue)
                  );

                  return (
                    <g key={step}>

                      <line
                        x1={paddingLeft}
                        y1={y}
                        x2={chartWidth - paddingRight}
                        y2={y}
                        className="grid-line"
                      />

                      <text
                        x={paddingLeft - 12}
                        y={y + 5}
                        textAnchor="end"
                        className="axis-label"
                      >
                        {value}
                      </text>

                    </g>
                  );
                })}


                {/* BASELINE LINE */}

                <line
                  x1={paddingLeft}
                  y1={baselineY}
                  x2={chartWidth - paddingRight}
                  y2={baselineY}
                  className="baseline-line"
                />


                {/* GLUCOSE LINE */}

                {values.length > 1 && (
                  <polyline
                    points={points}
                    fill="none"
                    className="glucose-line"
                  />
                )}


                {/* DATA POINTS */}

                {validReadings.map(
                  (reading, index) => (

                    <g key={reading.id || index}>

                      <circle
                        cx={getX(index)}
                        cy={getY(reading.value)}
                        r="7"
                        className="glucose-point"
                      />

                      <circle
                        cx={getX(index)}
                        cy={getY(reading.value)}
                        r="3"
                        className="glucose-point-inner"
                      />

                      {/* VALUE ABOVE POINT */}

                      <text
                        x={getX(index)}
                        y={getY(reading.value) - 15}
                        textAnchor="middle"
                        className="value-label"
                      >
                        {reading.value}
                      </text>

                      {/* X AXIS LABEL */}

                      <text
                        x={getX(index)}
                        y={chartHeight - 20}
                        textAnchor="middle"
                        className="axis-label"
                      >
                        {reading.type || `Reading ${index + 1}`}
                      </text>

                    </g>

                  )
                )}

              </svg>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default Trends;