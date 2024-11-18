import * as THREE from "three";

// create a scene
const scene = new THREE.Scene();

// create a geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// create a material
const material = new THREE.MeshBasicMaterial({ color: "red" });

// create a mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes for aspect-ratio
const sizes = {
  height: 600,
  width: 800,
};

// create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

// move camera out of the object to make object visible
camera.position.z = 3
camera.position.y = -1.1
camera.position.x = 1.2

// grab canvas from html
const canvas = document.getElementById("projection");


// create renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

// set renderer size same as aspect-ratio
renderer.setSize(sizes.width,sizes.height)

// render the scene
renderer.render(scene,camera)