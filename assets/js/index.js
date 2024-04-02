//https://cdn.jsdelivr.net/npm/three@v0.163.0/build/three.module.js
//Imports
import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cube.js";
import { ambientLight, directionalLight } from "./basic/Light.js";
import resizing from "./basic/Resizing.js";
import plane from "./basic/shapes/Plane.js";
import KeyController from "./controllers/KeyController.js";
import MoveController from "./controllers/MoveController.js";
import CharacterController from "./controllers/CharacterController.js";
import CustomCharacterController from "./controllers/CustomCharacterController copy.js";

const keyController1 = new KeyController();
const moveController1 = new MoveController(cube);
const characterController1 = new CharacterController(cube, moveController1, keyController1);

const moveController2 = new MoveController(plane);
const characterController2 = new CustomCharacterController(plane, moveController2, keyController1, "w", "s", "a", "d");

//Tutorial youtube
//https://www.youtube.com/watch?v=UqX0Jc04vio
//49:07www

//Resizing method
resizing(camera, renderer);

//Cube settings
cube.name = "cube";

//Light settings
directionalLight.position.set(-10, 10, 10);

//Add elements to the scene
scene.add(cube);
scene.add(plane);
scene.add(ambientLight);
scene.add(directionalLight);

//Camera settings
camera.position.set(2, 2, 2);
camera.lookAt(cube.position);

function render() {
    requestAnimationFrame(render);
    characterController1.update();
    characterController2.update();
    renderer.render(scene, camera);
}

render();