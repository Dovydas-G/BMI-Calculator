const checkBtnDOM = document.querySelector('.check-btn');
const resetBtnDOM = document.getElementById('reset');
const resultsDisplayDOM = document.getElementById('result');
const screenDOM = document.getElementById('screen');
const weightInputDOM = document.getElementById('weight');
const heightInputDOM = document.getElementById('height');

checkBtnDOM.addEventListener('click', function () {
    let count = 0;
    const weight = weightInputDOM.value;
    const height = heightInputDOM.value;

    const weightNum = (+ weight);
    const heightNum = (+ height);
    
    if (weight.length === 0 || height.length === 0) {
        count += 0;
    } else {
        count += (+ ((weightNum) / (((heightNum) / 100) ** 2)).toFixed(2));
    }
    
    screenDOM.style.display = 'flex';
    screenDOM.style.justifyContent = 'space-evenly';
    
    let text = '';
    
    if (count === 0 || isNaN(count)) {
        text += 'Please provide positive value !';
        screenDOM.style.color = 'red';
        screenDOM.style.backgroundColor = 'transparent';
        count = '';

    }else {
            screenDOM.style.color = 'black';

        if (count < 18.5) {
            text += 'Underweight';
            screenDOM.style.backgroundColor = 'yellow'; 
        }
        else if (count < 25) {
            text += 'Normal';
            screenDOM.style.backgroundColor = 'orange';
        }
        else if (count < 30) {
            text += 'Overweight';
            screenDOM.style.backgroundColor = '#ff6600';
        }
        else {
            text += 'Obesity'
            screenDOM.style.backgroundColor = 'red';
        }
        
    }
    
    
    resultsDisplayDOM.innerHTML = `${text} ${count}`;
    
});


resetBtnDOM.addEventListener('click', function () {
    screenDOM.style.display = 'none';
    weightInputDOM.value = '';
    heightInputDOM.value = '';
});