function generateShopCard(container, offset, length) {
	for (let index = offset; index < offset + length; ++index) {
		const shopItem = SHOPITEMS[index];

		const description = shopItem.description.split(" ");

		const newDescription = [...description].slice(0, 25).join(" ") + "...";

		const cardElement = `
    <div class="card">
      <img src='${shopItem.image}' class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${shopItem.vietnameseName}</h5>
        <p class="card-text">
          ${newDescription}
        </p>
        <a href="/preview.html" class="btn btn-primary">Xem thêm</a>
      </div>
    </div>
  `;

		container.append(cardElement);
	}
}

function generateNewsCard(container, offset, length) {
	for (let index = offset; index < offset + length; ++index) {
		const news = NEWS[index];

		const description = news.description.split(" ");

		const newDescription = description.slice(0, 15).join(" ") + "...";

		const newsCard = `
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${news.image}" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${newDescription}</p>
          </div>
        </div>
      </div>
    </div>
    `;

		container.append(newsCard);
	}
}

generateShopCard($("#moinhat"), 0, 3);
generateShopCard($("#noibat"), 3, 3);
generateShopCard($("#muanhieu"), 6, 3);

generateNewsCard($("#tinmoi"), 0, 5);
