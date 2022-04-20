const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.1,
	5000,
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.setClearColor(0xffffff);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enablePan = false;
controls.enableDamping = false;
controls.mouseButtons = {
	MIDDLE: THREE.MOUSE.DOLLY,
	LEFT: THREE.MOUSE.ROTATE,
};

window.onresize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.width / window.height;
	camera.updateProjectionMatrix();
};

const loader = new THREE.GLTFLoader();

loader.load(
	"antique_iron_safe/scene.gltf",
	function (gltf) {
		const inner = gltf.scene;

		controls.target.set(0, 0, -0.3);
		controls.update();

		scene.add(gltf.scene);
	},
	undefined,
	function (error) {
		console.error(error);
	},
);

// const light = new THREE.AmbientLight(0xffffff, 10); // soft white light
// scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff, 5);

light1.position.set(0, 0, 2);
light1.target.position.set(0, 0, 0);

scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 1);

light2.position.set(0, 5, 0);
light2.target.position.set(0, 0, 0);

scene.add(light2);

camera.position.set(2, 0, 0);
controls.update();

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();
