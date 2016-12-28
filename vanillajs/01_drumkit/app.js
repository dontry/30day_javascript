/*
 * @Author: dontry
 * @Date:   2016-12-28 20:31:54
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-12-28 22:19:34
 */

'use strict';

(function() {
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

    function playSound(e) {
        let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //when transition ends remove the playing class
    window.addEventListener('keydown', playSound);
})();
