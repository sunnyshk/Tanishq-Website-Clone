import {Men_Gold_Data} from "/Tanishq/data/men_gold.js"
let mdiv = document.getElementById("incon");
displayData(Men_Gold_Data, mdiv);

let cart = JSON.parse(localStorage.getItem("cartItms")) || [];

function displayData(data, target) {
  data.map((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image_link;
    let name = document.createElement("h2");
    name.innerText = el.name;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let atc = document.createElement("button");
    atc.setAttribute("class", "cartbtn");
    atc.innerText = "Add To Cart";

    div.append(img, name, price, atc);
    mdiv.append(div);
    atc.onclick = () => {
      addToCart(el);
    };
  });

  function addToCart(elem) {
    if (cart.some((item) => item.id == elem.id)) {
      alert("Items is already in the cart");
    } else {
      let item = Men_Gold_Data.find((product) => product.id === elem.id);
      cart.push({
        ...item,
        units: 1,
      });
      console.log(cart);
      localStorage.setItem("cartItms", JSON.stringify(cart));
    }
  }
}

export default displayData;
