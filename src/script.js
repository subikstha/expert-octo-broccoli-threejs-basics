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
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

group.add(cube2);
cube2.position.x = 2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

group.add(cube3);
cube3.position.x = -2;

group.position.y = 2;
group.rotation.y = Math.PI / 4;

//console.log("logging mesh", mesh.position.length()); // gives the position of the mesh from the center
// Axis helper
const axesHelper = new THREE.AxesHelper();

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.z = 2;
// mesh.scale.set(0.5, 1, 1);
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// console.log("Distance to camera", mesh.position.distanceTo(camera.position));
// camera.position.x = 2;
camera.position.z = 4;
camera.position.y = 0;
// camera.position.x = 1;
scene.add(camera);
scene.add(axesHelper);
// camera.lookAt(new THREE.Vector3(3, 0, 0));
camera.lookAt(group.position);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
