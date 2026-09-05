import { calculateBaseline } from "./baselineCalculator";

export function detectPattern(readings) {
  if (!readings || readings.length === 0) {
    return {
      status: "No Data",
      message: "Add glucose readings to detect patterns.",
    };
  }

  const baseline = calculateBaseline(readings);

  if (!baseline) {
    return {
      status: "No Data",
      message: "Not enough data to detect a pattern.",
    };
  }

  const latest = Number(readings[0].value);

  const difference = latest - baseline.average;

  const percentageDifference =
    (Math.abs(difference) / baseline.average) * 100;

  if (percentageDifference <= 10) {
    return {
      status: "Near Baseline",
      message:
        "Your latest reading is close to your personal baseline.",
      difference,
    };
  }

  if (difference > 0) {
    return {
      status: "Above Baseline",
      message:
        "Your latest reading is higher than your personal baseline.",
      difference,
    };
  }

  return {
    status: "Below Baseline",
    message:
      "Your latest reading is lower than your personal baseline.",
    difference,
  };
}