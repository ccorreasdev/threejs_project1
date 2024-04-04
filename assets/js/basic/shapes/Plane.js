import * as THREE from '../../three.js';

const geometry = new THREE.PlaneGeometry(2, 4);
const material = new THREE.MeshBasicMaterial({ color: 0x4285f4, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometry, material);

plane.rotation.x += 0;

export default plane;