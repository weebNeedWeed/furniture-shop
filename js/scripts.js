import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.1,
	5000,
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(1000, 500);

const canvas = document.getElementById('canvas');
renderer.setClearColor(0xffffff);

canvas.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

const loader = new GLTFLoader();

loader.load(
	"funko_test_model/scene.gltf",
	function (gltf) {
		const inner = gltf.scene.children[0];

		inner.scale.set(0.03, 0.03, 0.03);

		inner.position.set(0, -5, 0);

		scene.add(gltf.scene);
	},
	undefined,
	function (error) {
		console.error(error);
	},
);

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

camera.position.set(20, 0, 0);
console.log(controls.target);
controls.update();

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();
