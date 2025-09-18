// You can use this JS file to add dynamic time if you like
// Here’s a simple example to update the time
window.onload = function() {
  const timeElem = document.querySelector('.time');

  function updateTime() {
    const now = new Date();
    let hrs = now.getHours().toString().padStart(2, '0');
    let mins = now.getMinutes().toString().padStart(2, '0');
    timeElem.textContent = `${hrs}:${mins}`;
  }

  updateTime();
  setInterval(updateTime, 60000);
};
