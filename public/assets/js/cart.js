const amounts = document.getElementsByClassName("amounts")[0];
const amount_items = document.getElementsByClassName("amount-items")[0];
const amount_inputs = document.getElementsByClassName('amount-input');
var sum = 0;

function checkValidAmount(element) {
	if (element.value < 1 || element.value == ' ') {
		element.value = 1;
	}
}

function removeItem(item_id) {
	let products = document.getElementsByClassName("products")[0];
	Array.from(amount_inputs).forEach(element => {
		if (element.id == item_id) {
			products.removeChild(element.parentElement.parentElement.parentElement);
			localStorage.removeItem(item_id.replace(/-/g, ' '));
			calculateInfo();
		}
	});
}

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
	product_price.innerHTML = `Giá tiền: ${formatVND(shopItem.price)} VND`;
	sum += shopItem.price;

	let product_quantity = document.createElement("p");
	product_quantity.className = "product-quantity";
	product_quantity.innerHTML = `Số lượng: <input min=\"1\" type=\"number\"  id=${item_name.replace(/\s/g, '-')} class=\"amount-input\" value=\"1\">`;
	let _input = product_quantity.getElementsByTagName('input')[0];
	_input.addEventListener('input', function() {
		checkValidAmount(_input);
	});

	let product_remove = document.createElement("p");
	product_remove.className = "product-remove";
	product_remove.onclick = function() { removeItem(item_name.replace(/\s/g, '-')) };

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

const loadCart = () => {
	let products = document.getElementsByClassName("products")[0];
	amount_items.innerHTML = localStorage.length;

	products.innerHTML = "";

	for (var i = 0; i < localStorage.length; i++) {
		products.appendChild(createItem(localStorage.key(i)));
	}

	amounts.innerHTML = `${formatVND(sum)} VND`;
};

loadCart();

// User presses pay button
document.getElementById("thanhtoan").onclick = () => {
	// Cart has items
	if (localStorage.length !== 0) {
		$("#exampleModal").modal("show");

		// Clear cart
		localStorage.clear();

		// Reload cart data after 100ms
		setTimeout(() => {
			loadCart();

			document.getElementsByClassName("products")[0].innerHTML = "";
			document.getElementsByClassName("amounts")[0].innerHTML = "0 VND";
		}, 100);

		return;
	}

	$("#modal-body").text("Giỏ hàng đang trống");
	$("#exampleModal").modal("show");
};

function calculateInfo() {
	sum = 0;
	var n_items = 0;

	Array.from(amount_inputs).forEach(element => {
		var item_name = element.id.replace(/-/g, ' ');
		let shopItem = SHOPITEMS.find((elm) => elm.name === item_name);

		n_items += parseInt(element.value);
		sum += element.value * shopItem.price;
	});
	amount_items.innerHTML = n_items;
	amounts.innerHTML = `${formatVND(sum)} VND`;
}

Array.from(amount_inputs).forEach(element => {
	element.addEventListener("input", debounce(() => {
		calculateInfo();
	}));
})
