const URL = "https://yanmer1.github.io/wdd230/chamber/json/data.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildBusinessCards(info, type) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");

    card.setAttribute("id", "section");
    h2.textContent = `${business.name}`;
    p.innerHTML = `${business.address}`;
    p2.innerHTML = `${business.phone}`;
    a.innerHTML = `${business.site}`;
    p3.textContent = `Membership Level: ${business.membership}`;
    a.setAttribute("href", `${business.website}`);


      let img = document.createElement("img");
      img.setAttribute("src", `${business.imageurl}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);


    card.append(h2);
    card.append(p);
    card.append(p2);
    card.append(a);
    card.append(p3);

    display.classList.add(type);
    display.append(card);
  });
}

async function getBusinesses(type) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

function deleteItems() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("section").remove();
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getBusinesses("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getBusinesses("list");
  }
});
