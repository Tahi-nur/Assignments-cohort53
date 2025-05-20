function computeEarnings(tasks, rate) {
  // Step 1: Add up all task durations (in minutes)
  let totalMinutes = 0;

  for (let i = 0; i < tasks.length; i++) {
    totalMinutes += tasks[i].duration;
  }

  // Step 2: Convert minutes to hours
  const totalHours = totalMinutes / 60;

  // Step 3: Multiply by hourly rate
  const earnings = totalHours * rate;

  // Step 4: Format as Euro string with 2 decimal places
  return `€${earnings.toFixed(2)}`;
}

// Export so the test can use it
module.exports = computeEarnings;
