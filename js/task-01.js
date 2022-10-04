const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach  (element=>{
    // h1
  console.log(`Category: ${element.firstElementChild.textContent}`); 
//   elements
console.log(`Elements: ${element.lastElementChild.children.length}`);
})