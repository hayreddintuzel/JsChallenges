window.setInterval(function () {
    var date = new Date;
    var hour = date.getHours();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    //Hour
    var hourAngle = hour * 360 / 12;
    var hourDiv = document.getElementById('hour');
    if (hourAngle == 354) {
        secondDiv.classList.add('notransition'); // Disable transitions
    }
    if (hourAngle == 360) {
        secondDiv.classList.remove('notransition'); // Disable transitions
    }
    hourDiv.style.webkitTransform = 'rotate(' + hourAngle + 'deg)';
    hourDiv.style.mozTransform = 'rotate(' + hourAngle + 'deg)';
    hourDiv.style.msTransform = 'rotate(' + hourAngle + 'deg)';
    hourDiv.style.oTransform = 'rotate(' + hourAngle + 'deg)';
    hourDiv.style.transform = 'rotate(' + hourAngle + 'deg)';

    //Minute
    var minuteAngle = minute * 360 / 60;
    var minuteDiv = document.getElementById('minute');
    if (minuteAngle == 354) {
        secondDiv.classList.add('notransition'); // Disable transitions
    }
    if (minuteAngle == 360) {
        secondDiv.classList.remove('notransition'); // Disable transitions
    }
    minuteDiv.style.webkitTransform = 'rotate(' + minuteAngle + 'deg)';
    minuteDiv.style.mozTransform = 'rotate(' + minuteAngle + 'deg)';
    minuteDiv.style.msTransform = 'rotate(' + minuteAngle + 'deg)';
    minuteDiv.style.oTransform = 'rotate(' + minuteAngle + 'deg)';
    minuteDiv.style.transform = 'rotate(' + minuteAngle + 'deg)';

    //Second
    var secondAngle = second * 360 / 60;
    var secondDiv = document.getElementById('second');
    if (secondAngle == 354) {
        secondDiv.classList.add('notransition'); // Disable transitions
    }
    if (secondAngle == 360) {
        secondDiv.classList.remove('notransition'); // Disable transitions
    }
    secondDiv.style.webkitTransform = 'rotate(' + secondAngle + 'deg)';
    secondDiv.style.mozTransform = 'rotate(' + secondAngle + 'deg)';
    secondDiv.style.msTransform = 'rotate(' + secondAngle + 'deg)';
    secondDiv.style.oTransform = 'rotate(' + secondAngle + 'deg)';
    secondDiv.style.transform = 'rotate(' + secondAngle + 'deg)';

}, 1000);