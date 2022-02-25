// import navbar from "/script/nav.js"
// let nav=document.getElementById('hamcont');
// nav.innerHTML=navbar();

var mensDataGold = JSON.parse(localStorage.getItem("mensDataGold"));
console.log(mensDataGold);

var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

displayData(mensDataGold);

// var wishlist =JSON.parse(localStorage.getItem("WishlistItems"))||[]

// displayData(mensDataGold);


function handlePriceSort() {
  var selected = document.querySelector("#priceSort").value;
  console.log(selected);
  if (selected == "high") {
    mensDataGold.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (selected == "low") {
    mensDataGold.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  displayData(mensDataGold);
}

// displayData(mensDataGold)



function displayData(mensDataGold) {
  document.querySelector("#containermen").innerHTML = "";

  mensDataGold.map(function (data) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", data.image_link);

    var divr = document.createElement("div");
    divr.setAttribute("id", "divr");

    var rating = document.createElement("h4");
    rating.textContent = data.rating;

    var star = document.createElement("h3");
    star.textContent = " ★";
    star.style.color = "rgb(20,149,143)";

    divr.append(rating, star);

    var name = document.createElement("p");
    name.textContent = data.name;

    var brand = document.createElement("h4");
    brand.textContent = data.brandname;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.style.fontWeight = "700";
    p1.textContent = `Rs.${data.price}`;

    div2.append(p1);

    var btn = document.createElement("button");
    btn.setAttribute("id", "bagmen");
    btn.textContent = "MOVE TO BAG";

    btn.addEventListener("click", function () {
      addtocart(data);
    });

    div.append(img, divr, brand, name, div2, btn);

    document.querySelector("#containermen").append(div);
  });
}




function addtocart(data) {
  console.log(data, "data");
  cart.push({
    ...data,
    units:1,
  });
  localStorage.setItem("CartItems", JSON.stringify(cart));
  localStorage.setItem('cartLength', cart.length);

  alert("added successfully");
}
