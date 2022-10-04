const btnChangeColorEl = document.querySelector('.change-color')
console.log(btnChangeColorEl);

const spanColorEl = document.querySelector('.change-color')
console.log(spanColorEl);

btnChangeColorEl.addEventListener('click', onBodyColorChange);

function onBodyColorChange(event){
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// Напиши скрипт, який змінює кольори фону
//  елемента <body> через інлайн-стиль
//   по кліку на button.change-color
//  і виводить значення кольору в span.color.