function timing() {
    const date1 = new Date("2028-07-14");
    const date2 = new Date();
    const date = date1-date2;
    const days = Math.floor(date/(1000*60*60*24)); // conversion -> sec min hour days
    const hours = Math.floor((date/(1000*60*60))%24);
    const minutes = Math.floor((date/(1000*60))%60);
    const seconds = Math.floor((date/1000)%60);
    let Box1 = document.getElementsByClassName('box1')[0];
    Box1.innerHTML = days;
    let Box2 = document.getElementsByClassName('box2')[0];
    Box2.innerHTML = hours;
    let Box3 = document.getElementsByClassName('box3')[0];
    Box3.innerHTML = minutes;
    let Box4 = document.getElementsByClassName('box4')[0];
    Box4.innerHTML = seconds;
}
setInterval(timing, 1000)
console.log(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`);