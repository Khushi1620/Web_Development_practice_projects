function timing() {
  const timer = document.getElementById('root');
  const now = new Date();
  const time = now.toLocaleTimeString();
  timer.innerHTML = time;
}
timer = document.getElementById('root');
setInterval(timing, 1000);
timer.style.height = '97vh';
timer.style.display = 'flex';
timer.style.justifyContent = 'center';
timer.style.alignItems = 'center';
timer.style.fontSize = '180px';
timer.style.fontWeight = 'bolder';