const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (input.value.length === 0) {
    }   else{
let myItem = input.value;

const listItem = document.createElement("li");
const listText = document.createElement("span");
const listBtn = document.createElement("button");

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = " ❌ ";

list.appendChild(listItem);

input.value = "";

listBtn.addEventListener("click", function () {
    list.removeChild(listItem);
});

}
input.focus();
}
)

let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;
let date = new Date();
let year = date.getFullYear();
document.getElementById("curYr").innerHTML = year;