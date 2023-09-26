// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
console.log(btn);

// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id

clonedBtn.id = "magic-btn-2";


btn.addEventListener('click', () => {
  
  console.log("click");
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  console.log(clonedBtn);
  document.body.appendChild(clonedBtn);
  clonedBtn.style.color = "white";
  clonedBtn.style.borderRadius = "15px";
  clonedBtn.innerText = "Я изменю тебя";
  clonedBtn.style.background = "#a78b71";
})

clonedBtn.addEventListener('click' , () => {
  btn.style.background = "black";
  btn.style.color = "white";
})
