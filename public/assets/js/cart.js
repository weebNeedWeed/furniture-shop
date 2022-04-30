function createItem(item_name) {
  let item = document.createElement("div");
  item.className = "card-item";
  item.id = item_name

  let item_image = document.createElement("div");
  item_image.className = "item-image";

  let price_tag = document.createElement("p");
  price_tag.className = "price-tag";

  let amount_container = document.createElement("div");
  amount_container.className = "amount-container";

  let item_amount = document.createElement("input");
  item_amount.className = "item-amount";
  item_amount.type = "number";

  amount_container.appendChild(item_amount);
  item.appendChild(item_image);
  item.appendChild(price_tag);
  item.appendChild(amount_container);

  return item;
}


cart_list_container = document.getElementsByClassName("cart-list-container")[0];

for (var i = 0; i < localStorage.length; i++) {
  cart_list_container.appendChild(createItem(i));
}
