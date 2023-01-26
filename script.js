document.body.onload = activeTraffic;

const circles = document.querySelectorAll('.circle');
console.log(circles);
const btnDelete = document.getElementById('btnId');

let activeLight = 0;
let interval;

function activeTraffic() {
    interval = setInterval(() => {
        circles[activeLight].className = "circle";
    activeLight++

    if(activeLight>2){
        activeLight = 0;
    }
    
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
},5000);
};

btnDelete.disabled = false;

btnDelete.addEventListener('click', () => {
clearInterval(interval);
    let counter = 10;
    let numberOfCounter = document.querySelector('.counter__num');
    let countPointer = setInterval(() => {
        counter--;
        numberOfCounter.innerHTML = counter;

        if (counter > 0) {
            circles[activeLight].classList.remove(circles[activeLight].getAttribute('color'));
            circles[0].classList.add(circles[0].getAttribute('color'));
            return btnDelete.disabled = true;
        } else {
            clearInterval(countPointer);
            circles[0].classList.remove(circles[0].getAttribute('color'));
            return btnDelete.disabled = false;
        }
    }, 1000);
    
        setTimeout(() => {
        counter = 0;
        activeTraffic();
    }, 10000);
});
