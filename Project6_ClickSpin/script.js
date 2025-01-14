document.addEventListener('click', (event)=> {

    // create dynamic circle
    const circle = document.createElement('div');
    circle.className = 'circle';

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-30}px`;
    circle.style.top = `${y-30}px`;

    const messages = [
        "Together","God","Bless",
        "Welcome","You","And",
        "Joy","Always",
        "Hello",
        "Hagemaru",
        "Hola","Get","Marry",
        "Fattu","Harshii",
        "Tiddu",
        "Smile","Both","Are","Looking",
        "Lovely",
        "Kittu","so","Cute",
        "Live","You",
        "Chillata Tidda"
      ];
    circle.textContent = messages[Math.floor(Math.random()*messages.length)];

    // colours array
    const colors = ['#ff5733','#33ff57','#3357ff','#f3f033','#8e44ad','#f44708','#faa613','#f0386b','#140d4f','#688e26','#c33c54','#d00000','#ffba08','#5603ad','#202c59','#0a2463','#3bc14a','#273b09','#01baef','#8367c7','#7f534b','#512d38','#fdb833','#417b5a','#550527','#96a13a','#f13030','#ff1b1c','#613f75','#d91e36'];
      
    circle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(circle);

    // remove circle div after 5 seconds
    setTimeout(()=> {
      circle.remove();
    }, 5000);
});