import * as THREE from '../three.js';

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

export { ambientLight, directionalLight };