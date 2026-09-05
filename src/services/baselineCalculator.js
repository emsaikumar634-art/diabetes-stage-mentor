export function calculateBaseline(readings) {
  if (!readings || readings.length === 0) {
    return null;
  }

  const values = readings
    .map((reading) => Number(reading.value))
    .filter((value) => !isNaN(value));

  if (values.length === 0) {
    return null;
  }

  const total = values.reduce(
    (sum, value) => sum + value,
    0
  );

  const average = total / values.length;

  const roundedAverage = Math.round(average);

  return {
    average: roundedAverage,
    readingsCount: values.length,
    lowest: Math.min(...values),
    highest: Math.max(...values),
  };
}