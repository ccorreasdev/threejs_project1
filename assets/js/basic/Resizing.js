import * as THREE from '../three.js';

//Resizing
const resizing = (camera, renderer) => {
    window.addEventListener("resize", (e) => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    })
};

export default resizing;