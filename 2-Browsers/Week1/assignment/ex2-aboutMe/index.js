function updateProfile() {
  // Replace the span elements with my personal information
  document.getElementById('nickname').textContent = 'Promin';
  document.getElementById('fav-food').textContent = 'Pizza';
  document.getElementById('hometown').textContent = 'Dhaka';

  // Loop through all list items and apply the 'list-item' class to each
  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    item.className = 'list-item';
  });
}

// Wait until the page fully loads before running the function
window.addEventListener('load', updateProfile);
