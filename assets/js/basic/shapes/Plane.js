import * as THREE from '../../three.js';

const geometry = new THREE.PlaneGeometry(10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x4285f4, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometry, material);

plane.rotation.x += Math.PI * 0.5;

export default plane;