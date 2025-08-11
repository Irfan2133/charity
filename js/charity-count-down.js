var elements = document.getElementById('s');
var elementm = document.getElementById('m');
var elementh = document.getElementById('h');
var elementd = document.getElementById('d');
var elementdmonth = document.getElementById('month');

var seconds = new ProgressBar.Circle(elements, {
    duration: 200,
    color: "#facc43",
    trailColor: "#787e81",
    strokeWidth: 4,
    trailWidth: 4
});
var minutes = new ProgressBar.Circle(elementm, {
    duration: 200,
    color: "#797f80",
    trailColor: "#9674ed",
    strokeWidth: 4,
    trailWidth: 4
});
var hours = new ProgressBar.Circle(elementh, {
    duration: 200,
    color: "#f28776",
    trailColor: "#7b8183",
    strokeWidth: 4,
    trailWidth: 4
});
var days = new ProgressBar.Circle(elementd, {
    duration: 200,
    color: "#787e7f",
    trailColor: "#21c2f8",
    strokeWidth: 4,
    trailWidth: 4
});

var months = new ProgressBar.Circle(elementdmonth, {
    duration: 200,
    color: "#6f7578",
    trailColor: "#0fdab2",
    strokeWidth: 4,
    trailWidth: 4
});


var shortcode_date = $('#countup').data('futuredate');
// console.log(shortcode_date);
 
setInterval(function() {
    now = new Date(); 
	countTo = new Date(shortcode_date);
	difference = (countTo-now);
    var second = Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
    seconds.animate(second / 60, function() {
        seconds.setText("<span class=\"number\">" + second + "</span>" + "<span class=\"label\">Seconds</span>");
    });
}, 1000);
setInterval(function() {
    now = new Date(); 
	countTo = new Date(shortcode_date);
	difference = (countTo-now);
    var minute = Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    minutes.animate(minute / 60, function() {
        minutes.setText("<span class=\"number\">" + minute + "</span>" + "<span class=\"label\">Minutes</span>");
    });
}, 1000);
setInterval(function() {
    now = new Date(); 
	countTo = new Date(shortcode_date);
	difference = (countTo-now);
    var hour = Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
    hours.animate(hour / 24, function() {
        hours.setText("<span class=\"number\">" + hour + "</span>" + "<span class=\"label\">Hours</span>");
    });
}, 1000);

setInterval(function() {
    now = new Date(); 
    countTo = new Date(shortcode_date);
    difference = (countTo-now);
    var day = Math.floor(difference/(60*60*1000*24)%12);
    days.animate(day / (day + 5), function() {
        days.setText("<span class=\"number\">" + day + "</span>" + "<span class=\"label\">Days</span>");
    });
}, 1000);

setInterval(function() {
    now = new Date(); 
	countTo = new Date(shortcode_date);
	difference = (countTo-now);
    var month = Math.floor(difference/(60*60*1000*24*30)*1);
	months.animate(month / (month + 5), function() {
        months.setText("<span class=\"number\">" + month + "</span>" + "<span class=\"label\">Months</span>");
    });
}, 1000);