let amounts = document.getElementsByClassName("amounts")[0];
var sum = 0;

function createItem(item_name) {
  let shopItem = SHOPITEMS.find((elm) => elm.name === item_name);

  let item = document.createElement("div");
  item.className = "product";

  let item_image = document.createElement("img");
  item_image.src = shopItem.image;

  let product_info = document.createElement("div");
  product_info.className = "product-info";

  let product_name = document.createElement("h3");
  product_name.className = "product-name";
  product_name.innerHTML = `Tên hàng: ${item_name}`;

  let product_price = document.createElement("h4");
  product_price.className = "product-price";
  product_price.innerHTML = `Giá tiền: ${shopItem.price} VND`;
  sum += shopItem.price;

  let product_quantity = document.createElement("p");
  product_quantity.className = "product-quantity";
  product_quantity.innerHTML = "Số lượng: <input value=\"1\">";

  let product_remove = document.createElement("p");
  product_remove.className = "product-remove";

  let product_remove_icon = document.createElement("i");
  product_remove_icon.className = "fa fa-trash";
  product_remove_icon.ariaHidden = true;

  let product_span = document.createElement("span");
  product_span.className = "remove";

  product_remove.appendChild(product_remove_icon);
  product_remove.appendChild(product_span);

  product_info.appendChild(product_name);
  product_info.appendChild(product_price);
  product_info.appendChild(product_quantity);
  product_info.appendChild(product_remove);

  item.appendChild(item_image);
  item.appendChild(product_info);

  return item;
}

let products = document.getElementsByClassName("products")[0];
let amount_items = document.getElementsByClassName("amount-items")[0];
amount_items.innerHTML = localStorage.length;

for (var i = 0; i < localStorage.length; i++) {
  products.appendChild(createItem(localStorage.key(i)));
}

amounts.innerHTML = `${sum} VND`;
