const clock = () => {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();    
  let seconds = data.getSeconds();

  document.getElementById('hourValue').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minValue').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('secValue').innerText = seconds.toString().padStart(2, '0');
}



setInterval(clock, 1000);
