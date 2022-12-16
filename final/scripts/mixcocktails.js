const total = document.getElementById("totalDrinks");

const totalJuiceCreated = localStorage.getItem("totalDrinks");
localStorage.setItem("totalDrinks", total);

console.log(totalJuiceCreated)



const counter = document.querySelector("#totalDrinks");

let exist = localStorage.getItem("drinks");

if (exist) {
  drinkList = JSON.parse(localStorage.getItem("drinks"));
  counter.textContent = drinkList.length;
} 

else {
  counter.textContent = 0;
}
