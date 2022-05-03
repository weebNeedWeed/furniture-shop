item_list = document.getElementById("list");
localStorage.clear();

function setLoadingStatus(status) {
	if (status === "show") {
		$("#scene-container").html(`<div id="loading">
            <span id="loading-icon">
            </span>
          </div>`);
	} else if (status === "hide") {
		$("#loading").remove();
	}
}

function loadModel(path, config, lightColor) {
	const sceneWrapper = document.getElementById("scene-container");

	const width = sceneWrapper.offsetWidth;
	const height = sceneWrapper.offsetHeight;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		70,
		innerWidth / innerHeight,
		0.1,
		5000,
	);

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(width, height);

	renderer.setClearColor(0xffffff);

	sceneWrapper.innerHTML = "";

	setLoadingStatus("show");

	sceneWrapper.appendChild(renderer.domElement);

	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.autoRotate = true;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.mouseButtons = {
		MIDDLE: THREE.MOUSE.DOLLY,
		LEFT: THREE.MOUSE.ROTATE,
	};

	const loader = new THREE.GLTFLoader();

	loader.load(
		`${path}/scene.gltf`,
		function (gltf) {
			gltf.scene.children[0].scale.set(...Object.values(config.scale));

			controls.target.set(...Object.values(config.target));
			controls.update();

			scene.add(gltf.scene);

			setTimeout(() => setLoadingStatus("hide"), 2000);
		},
		undefined,
		function (error) {
			console.error(error);
		},
	);

	// const light = new THREE.AmbientLight(0x00ff55, 10); // soft white light
	// scene.add(light);

	// front to back
	const light1 = new THREE.DirectionalLight(lightColor, 5);

	light1.position.set(0, 0, 10);
	light1.target.position.set(0, 0, 0);

	scene.add(light1);

	// top to bottom (y)
	const light2 = new THREE.DirectionalLight(lightColor, 5);

	light2.position.set(0, 10, 0);
	light2.target.position.set(0, 0, 0);

	scene.add(light2);

	// right to left
	const light3 = new THREE.DirectionalLight(lightColor, 5);

	light3.position.set(10, 0, 0);
	light3.target.position.set(0, 0, 0);

	scene.add(light3);

	// left to right
	const light4 = new THREE.DirectionalLight(lightColor, 5);

	light4.position.set(-10, 0, 0);
	light4.target.position.set(0, 0, 0);

	scene.add(light4);

	// back to front
	const light5 = new THREE.DirectionalLight(lightColor, 5);

	light5.position.set(0, 0, -10);
	light5.target.position.set(0, 0, 0);

	scene.add(light5);

	camera.position.set(...Object.values(config.camera));
	controls.update();

	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}
	animate();
}

function createCard(item_name) {
	let shopItem = SHOPITEMS.find((elm) => elm.name === item_name);

	// Main card's elements
	let card = document.createElement("div");
	card.className = "item-card";
	// card.id = items[item_name]
	card.id = item_name;

	let card_image = document.createElement("div");
	card_image.className = "item-image";
	card_image.style.backgroundImage = `url('${shopItem.image}')`;

	let card_buttons = document.createElement("div");
	card_buttons.className = "item-buttons";

	// Card Buttons
	let upload_button = document.createElement("button");
	upload_button.onclick = () => {
		const textureWrapper = document.getElementById("textures-container");
		textureWrapper.innerHTML = "";

		// Generate textures card
		shopItem.texture.forEach((color) => {
			const newTextureCard = document.createElement("div");
			newTextureCard.className = "texture-card";

			const textureImage = document.createElement("div");
			textureImage.className = "texture-image";
			const { r, g, b } = hexToRGB(color);
			textureImage.style.backgroundColor = `rgb(${r},${g},${b})`;
			newTextureCard.appendChild(textureImage);

			const textureButtonWrapper = document.createElement("div");
			textureButtonWrapper.className = "texture-buttons";

			const uploadButton = document.createElement("button");
			uploadButton.innerHTML = '<i class="fa fa-upload"></i>';
			uploadButton.onclick = () => {
				loadModel(shopItem.modelFolder, shopItem.config, color);
			};

			textureButtonWrapper.appendChild(uploadButton);

			newTextureCard.appendChild(textureButtonWrapper);

			textureWrapper.appendChild(newTextureCard);
		});

		loadModel(shopItem.modelFolder, shopItem.config, shopItem.texture[0]);
	};

	let add_cart_button = document.createElement("button");
	add_cart_button.onclick = function add_cart(event) {
		localStorage.setItem("item-" + item_name, 1);
		console.log("Set Item " + item_name);
	};

	// Card Buttons' Icon
	let upload_button_icon = document.createElement("i");
	upload_button_icon.className = "fa fa-upload";

	let add_cart_button_icon = document.createElement("i");
	add_cart_button_icon.className = "fa fa-cart-plus";

	upload_button.appendChild(upload_button_icon);
	add_cart_button.appendChild(add_cart_button_icon);
	card_buttons.appendChild(upload_button);
	card_buttons.appendChild(add_cart_button);
	card.appendChild(card_image);
	card.appendChild(card_buttons);

	return card;
}

item_list.appendChild(createCard("Sofa"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));
item_list.appendChild(createCard("Office chair"));

// Click button to load model when user redirecting to home
$("#Sofa button:first-child").click();

// Ads logic
const adsText = $("#ads-text");
const adsBox = $("#ads-box");

const defaultTop = adsBox.height();

let offsetTop = defaultTop;
setInterval(() => {
	adsText.css("top", offsetTop + "px");

	offsetTop = offsetTop - 1;

	if (offsetTop === 0 - adsText.height()) {
		offsetTop = defaultTop;
	}
}, 10);
