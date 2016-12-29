/*
 * @Author: dontry
 * @Date:   2016-12-29 21:02:41
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-12-29 21:50:12
 */

'use strict';
(function() {
    var hourHand = document.querySelector('.hour-hand');
    var minHand = document.querySelector('.min-hand');
    var secondHand = document.querySelector('.second-hand');


    function setDate() {
        let now = new Date();
        let second = now.getSeconds();
        let min = now.getMinutes();
        let hour = now.getHours() % 12;

        let secondDeg = second / 60 * 360;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        let minDeg = (min + second / 60) / 60 * 360;
        minHand.style.transform = `rotate(${minDeg}deg)`;

        let hourDeg = (hour + (min + second / 60) / 60) / 12 * 360;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

    }
    setDate();
    setInterval(setDate, 1000);
})();
