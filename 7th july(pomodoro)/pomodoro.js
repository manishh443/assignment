  let interval = null;
    let defaultTime = 25;
    let timeLeft = defaultTime * 60;
    let originalSetTime = timeLeft;

    let currentRound = 1;
    let totalRounds = 4;
    let isBreak = false;
    let DefaultShortTime = 5;
    let DefaultLongTime = 15;

    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const reset = document.querySelector('.reset');
    const timer = document.querySelector('.timer');

    const setTimebtn = document.querySelectorAll('.set-time');
    const timeInputs = document.querySelectorAll('#usertime');

    const setShortTime = document.querySelector('.setShort-time');
    const ShortVac = document.getElementById('ShortVac');

    const setLongTime = document.querySelector('.setLong-time');
    const LongVac = document.getElementById('LongVac');

    const roundDisplay = document.querySelector('.RoundNumeric');
    const visualDisplay = document.querySelector('.Roundvisual');

    const workFeature = document.querySelector('.WorkTimerFeature');
    const shortFeature = document.querySelector('.ShortBreakFeature');
    const longFeature = document.querySelector('.LongBreakFeature');

    function updateTimer() {
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        timer.innerHTML = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }

    function UpdateVisualsRounds() {
        let visual = '';
        for (let i = 1; i <= totalRounds; i++) {
            visual += (i <= currentRound) ? '🔴' : '⚪';
        }
        visualDisplay.innerText = visual;
    }

    function updateRoundText() {
        roundDisplay.innerHTML = `Round: <span id="roundnumber">${currentRound}</span>/${totalRounds}`;
    }

    function setPomodoroTime() {
        let val = parseInt(timeInputs[1].value.trim());
        if (!isNaN(val) && val >= 1 && val <= 60) {
            timeLeft = val * 60;
            originalSetTime = timeLeft;
            updateTimer();
        } else {
            alert("Please enter a valid Pomodoro time between 1 to 60");
        }
    }

    function setTotalRounds() {
        let val = parseInt(timeInputs[0].value.trim());
        if (!isNaN(val) && val >= 1 && val <= 10) {
            totalRounds = val;
            updateRoundText();
            UpdateVisualsRounds();
        } else {
            alert("Please enter a valid number of rounds between 1 to 10");
        }
    }

    function BreakShort() {
        let bs = parseInt(ShortVac.value.trim());
        if (!isNaN(bs) && bs >= 1 && bs <= 60) {
            DefaultShortTime = bs;
        } else {
            alert("Enter valid short break (1-60 min)");
        }
    }

    function BreakLong() {
        let bl = parseInt(LongVac.value.trim());
        if (!isNaN(bl) && bl >= 1 && bl <= 60) {
            DefaultLongTime = bl;
        } else {
            alert("Enter valid long break (1-60 min)");
        }
    }

    function highlightFeature(mode) {
        workFeature.style.backgroundColor = '';
        shortFeature.style.backgroundColor = '';
        longFeature.style.backgroundColor = '';

        if (mode === 'work') {
            workFeature.style.backgroundColor = '#10B981';
        } else if (mode === 'short') {
            shortFeature.style.backgroundColor = '#FBBF24';
        } else if (mode === 'long') {
            longFeature.style.backgroundColor = '#EF4444';
        }
    }

    function ongoingTimer() {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null;

            if (!isBreak) {
                isBreak = true;
                if (currentRound % 4 === 0) {
                    timeLeft = DefaultLongTime * 60;
                    highlightFeature('long');
                } else {
                    timeLeft = DefaultShortTime * 60;
                    highlightFeature('short');
                }
                updateTimer();
                interval = setInterval(ongoingTimer, 1000);
            } else {
                if (currentRound < totalRounds) {
                    currentRound++;
                    updateRoundText();
                    UpdateVisualsRounds();
                    isBreak = false;
                    timeLeft = originalSetTime;
                    highlightFeature('work');
                    updateTimer();
                    interval = setInterval(ongoingTimer, 1000);
                } else {
                    // Final round done
                    timer.innerHTML = `<div class="completed-message">🎉 All ${totalRounds} Pomodoro rounds complete!</div>`;
                    UpdateVisualsRounds();
                  
                }
            }
        }
    }

    function startTimer() {
        if (interval !== null) return;
        updateRoundText();
        highlightFeature('work');
        interval = setInterval(ongoingTimer, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

    function resetTimer() {
        clearInterval(interval);
        interval = null;
        timeLeft = originalSetTime;
        currentRound = 1;
        isBreak = false;
        updateTimer();
        updateRoundText();
        UpdateVisualsRounds();
       
    }

    setTimebtn[0].addEventListener('click', setTotalRounds);
    setTimebtn[1].addEventListener('click', setPomodoroTime);
    setShortTime.addEventListener("click", BreakShort);
    setLongTime.addEventListener("click", BreakLong);
    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);

    updateTimer();
    updateRoundText();
    UpdateVisualsRounds();