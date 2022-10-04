let counterValue = 0;

const decrementBtnEl= document.querySelector('[data-action="decrement"]');
const incrementBtnEl= document.querySelector('[data-action="increment"]');
const counterValueEl= document.querySelector('[id="value"]')

decrementBtnEl.addEventListener('click', onDecrementClick );
incrementBtnEl.addEventListener('click', onIncrementClick );

function onDecrementClick(){
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function onIncrementClick(){
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}




