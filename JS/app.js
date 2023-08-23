const allProducts = document.getElementsByClassName("card");

for (const product of allProducts) {
  product.addEventListener("click", function (event) {
    const card = event.currentTarget;
    const text = card.childNodes[3].childNodes[3].innerText;
    const price = card.childNodes[3].childNodes[5].childNodes[1].innerText;

    card.addEventListener("click", displayProduct(text, price));
  });
}

function displayProduct(productName, productPrice) {
  const displayProductId = document.getElementById("product-list");

  const pElement = document.createElement("li");
  pElement.classList.add("font-semibold");
  pElement.innerText = productName;

  displayProductId.appendChild(pElement);

  const totalPriceId = document.getElementById("total-price").innerText;
  const oldPrice = parseFloat(totalPriceId);
  const pPrice = parseFloat(productPrice);
  // console.log(totalPriceId, pPrice);
  const totalPrice = oldPrice + pPrice;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}
