function addCurrentTime() {
  const timeContainer = document.getElementById('time');

  const updateTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeContainer.textContent = currentTime;
  };

  // Update the time immediately
  updateTime();

  // Keep updating every second
  setInterval(updateTime, 1000);
}

// Run the function once the page has fully loaded
window.addEventListener('load', addCurrentTime);
