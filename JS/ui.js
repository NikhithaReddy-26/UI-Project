const heading = document.getElementById('heading');
const clickMeBtn = document.getElementById('click-me');

clickMeBtn.addEventListener('click', function() {
    heading.style.color = 'red';
});
