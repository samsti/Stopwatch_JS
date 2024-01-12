window.onload = function () {
    let milliseconds = "00";
    let seconds = "00";
    let minutes = "00";
    let displayMilliseconds = document.getElementById("millisecondsDisplay");
    let displaySeconds = document.getElementById("secondsDisplay");
    let displayMinutes = document.getElementById("minutesDisplay");
    let startButton = document.getElementById('startBtn');
    let pauseButton = document.getElementById('pauseBtn');
    let resetButton = document.getElementById('resetBtn');
    let timerInterval;

    startButton.onclick = function () {
        clearInterval(timerInterval);
        timerInterval = setInterval(startTimer, 10);
    };

    pauseButton.onclick = function () {
        clearInterval(timerInterval);
    };

    resetButton.onclick = function () {
        clearInterval(timerInterval);
        milliseconds = "00";
        seconds = "00";
        minutes = "00";
        displayMilliseconds.innerHTML = milliseconds;
        displaySeconds.innerHTML = seconds;
    };

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            displayMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            displayMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            displaySeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            displayMilliseconds.innerHTML = "0" + 0;
        }

        if (seconds > 59) {
            minutes++;
            displayMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            displaySeconds.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            displaySeconds.innerHTML = seconds;
        }
    }
};
