import * as THREE from '../../three.js';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const materialOff = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.MeshStandardMaterial({ color: 0x34a753 });
const cube = new THREE.Mesh(geometry, material);

export default cube;