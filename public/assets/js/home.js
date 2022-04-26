item_list = document.getElementById('list');
localStorage.clear();

function createCard(item_name) {
  // Main card's elements
  let card = document.createElement('div');
  card.className = "item-card";
  card.id = items[item_name]

  let card_image = document.createElement('div');
  card_image.className = "item-image";

  let card_buttons = document.createElement('div');
  card_buttons.className = "item-buttons";

  // Card Buttons
  let upload_button = document.createElement('button');

  let add_cart_button = document.createElement('button');
  add_cart_button.onclick = function add_cart(event) {
    localStorage.setItem("item-" + item_name, 1);
    console.log("Set Item " + item_name);
  }

  // Card Buttons' Icon
  let upload_button_icon = document.createElement('i');
  upload_button_icon.className = "fa fa-upload";

  let add_cart_button_icon = document.createElement('i');
  add_cart_button_icon.className = "fa fa-cart-plus";

  upload_button.appendChild(upload_button_icon);
  add_cart_button.appendChild(add_cart_button_icon);
  card_buttons.appendChild(upload_button);
  card_buttons.appendChild(add_cart_button);
  card.appendChild(card_image);
  card.appendChild(card_buttons);

  return card;
}

for (var i = 0; i < 6; i++) {
  item_list.appendChild(createCard(i));
}
