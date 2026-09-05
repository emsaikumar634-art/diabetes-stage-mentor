import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GlucoseChart() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const savedReadings =
      JSON.parse(localStorage.getItem("glucoseReadings")) || [];

    const chartData = savedReadings
      .slice(0, 7)
      .reverse()
      .map((reading) => ({
        date: reading.date,
        glucose: reading.value,
      }));

    setReadings(chartData);
  }, []);

  return (
    <section className="glucose-chart-card">

      <div className="chart-heading">
        <div>
          <p>GLUCOSE TREND</p>
          <h2>Recent readings</h2>
        </div>

        <span>mg/dL</span>
      </div>

      {readings.length === 0 ? (

        <div className="chart-empty">
          <div>📊</div>

          <h3>No glucose data yet</h3>

          <p>
            Add your first glucose reading to see
            your trend here.
          </p>
        </div>

      ) : (

        <div className="chart-container">

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={readings}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="date"
              />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="glucose"
                stroke="#16a77a"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      )}

    </section>
  );
}

export default GlucoseChart;