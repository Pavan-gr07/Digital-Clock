function time(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    
    var h = ("0" + new Date().getHours() % 12).slice(-2);
    var m = ("0" + new Date().getMinutes()).slice(-2);
    var s = ("0" + new Date().getSeconds()).slice(-2);

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var interval = setInterval(time,500);