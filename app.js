let circle = document.querySelector('.circle');
const moveCircle =(e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
}

const addPulse = () => {
    circle.classList.toggle('active');
}

window.addEventListener('mousemove', moveCircle);
window.addEventListener('mousedown', addPulse);
window.addEventListener('mouseup', addPulse);
