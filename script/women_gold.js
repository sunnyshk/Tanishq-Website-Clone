// import navbar from "/script/nav.js"
// let nav=document.getElementById('hamcont');
// nav.innerHTML=navbar();

var WomenDataGold = JSON.parse(localStorage.getItem("WomenDataGold"));
console.log(WomenDataGold);

var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

displayData(WomenDataGold);

function handlePriceSort() {
  var selected = document.querySelector("#priceSort").value;
  console.log(selected);
  if (selected == "high") {
    //decending
    WomenDataGold.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (selected == "low") {
    //accending
    WomenDataGold.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  displayData(WomenDataGold);
}

function displayData(WomenDataGold) {
  document.querySelector("#containermen").innerHTML = "";

  WomenDataGold.map(function (data) {
    var div = document.createElement("div");

    //create image
    var img = document.createElement("img");
    img.setAttribute("class","ham")
    img.setAttribute("src", data.image_link);

    //name creation
    var name = document.createElement("p");
    name.textContent = data.name;

    var divr = document.createElement("div");
    divr.setAttribute("id", "divr");

    var rating = document.createElement("h4");
    rating.textContent = data.rating;

    var star = document.createElement("h3");
    star.textContent = " ★";
    star.style.color = "rgb(20,149,143)";

    divr.append(rating, star);

    var brand = document.createElement("h4");
    brand.textContent = data.brandname;

    //price  creation;
    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.style.fontWeight = "700";
    p1.textContent = `Rs.${data.price}`;

    div2.append(p1);
    //  add to bag
    var btn = document.createElement("button");
    btn.setAttribute("id", "bagmen");
    btn.textContent = "MOVE TO BAG";

    btn.addEventListener("click", function () {
      addtocart(data);
    });

    //append
    div.append(img, divr, name, div2, btn);

    document.querySelector("#containermen").append(div);
  });
}

function addtocart(data) {
  console.log(data, "data");
  cart.push(data);
  localStorage.setItem("CartItems", JSON.stringify(cart));
  alert("added successfully");
}
