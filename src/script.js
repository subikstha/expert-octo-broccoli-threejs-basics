import * as THREE from "three";

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
// Position of the mesh can be changed right before adding the mesh to the scene
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.x = 0.7;
// Setting all x,y and z at once
mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);
console.log("logging mesh", mesh.position.length()); // gives the position of the mesh from the center
// Camera

// Axis helper
const axesHelper = new THREE.AxesHelper();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
console.log("Distance to camera", mesh.position.distanceTo(camera.position));
// camera.position.x = 1;
camera.position.z = 2;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);
scene.add(axesHelper);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
