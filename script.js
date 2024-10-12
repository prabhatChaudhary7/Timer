const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const dateInput = document.getElementById('dateInput');
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

let countdownInterval;

function calculateTimeDifference(endDate) {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = '';
        messageElement.textContent = 'Count finished';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

startBtn.addEventListener('click', function () {
    const selectedDate = new Date(dateInput.value).getTime();

    if (isNaN(selectedDate)) {
        alert('Please select a valid date.');
        return;
    }

    messageElement.textContent = '';
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        calculateTimeDifference(selectedDate);
    }, 1000);
});

resetBtn.addEventListener('click', function () {
    clearInterval(countdownInterval);
    timerElement.textContent = '0 Days 0 Hours 0 Minutes 0 Seconds';
    messageElement.textContent = '';
});
