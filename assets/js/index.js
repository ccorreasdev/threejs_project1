//https://cdn.jsdelivr.net/npm/three@v0.163.0/build/three.module.js
//Imports
import * as THREE from 'three';
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
import { FBXLoader } from "./jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js";


const clock = new THREE.Clock();
const keyController1 = new KeyController();
const moveController1 = new MoveController(cube);
const characterController1 = new CharacterController(cube, moveController1, keyController1);

const moveController2 = new MoveController(plane);
const characterController2 = new CustomCharacterController(plane, moveController2, keyController1, "z", "x", "c", "v");


let characterController3;
//Tutorial youtube
//https://www.youtube.com/watch?v=UqX0Jc04vio
//1:02:00

//Modelos 3D
//https://www.mixamo.com/#/

//Resizing method
resizing(camera, renderer);

//Cube settings
cube.name = "cube";

//Light settings
directionalLight.position.set(0, 10, 0);
ambientLight.position.set(0, 0, 0);

//Add elements to the scene
// scene.add(cube);
//scene.add(plane);


//Camera settings
camera.position.set(0, 2, -10);
//camera.position.set(0, 0, 10);

//Load FBX Model
let mixer;
let characterObject;
// Crear una instancia de dat.gui


// Crear un objeto para almacenar las opciones de animaciones
const animations = {
    idle: function () {
        // Lógica para activar la animación "idle"
    },
    // Puedes agregar más opciones de animación aquí
};

// Agregar un folder para las animaciones

const fbxLoader = new FBXLoader();
let animationAction1;
let animationAction2;
let animationAction3;
let animationAction4;
let animationAction5;
fbxLoader.load(
    './assets/js/models/characters/XBot/X_Bot.fbx',
    (object) => {
        //Animation
        // mixer = new THREE.AnimationMixer(object)

        // const animationAction = mixer.clipAction(
        //     object.animations[0]
        // )
        // animationActions.push(animationAction)
        // animationsFolder.add(animations, 'default')
        // activeAction = animationActions[0]


        // object.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         // (child as THREE.Mesh).material = material
        //         if ((child as THREE.Mesh).material) {
        //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         }
        //     }
        // })
        characterObject = object;
        characterObject.position.y = -6;
        object.scale.set(.01, .01, .01)
        const moveController3 = new MoveController(object);
        characterController3 = new CustomCharacterController(object, moveController3, keyController1, "s", "w", "d", "a");

        scene.add(object)

        mixer = new THREE.AnimationMixer(object);
        mixer.timeScale = 1;

        loadAnimation('./assets/js/models/characters/XBot/animations/Idle.fbx', 'idle');
        loadAnimation('./assets/js/models/characters/XBot/animations/Running.fbx', 'running');
        loadAnimation('./assets/js/models/characters/XBot/animations/Left_Strafe.fbx', 'left');
        loadAnimation('./assets/js/models/characters/XBot/animations/Right_Strafe.fbx', 'right');
        loadAnimation('./assets/js/models/characters/XBot/animations/Running_Backward.fbx', 'back');
        // animationAction2.stop();

    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


fbxLoader.load(
    './assets/js/models/land/sky-land/source/prueba_land.fbx',
    (object) => {
        object.scale.set(10, 10, 10);
        object.position.y = -100;
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


function loadAnimation(url, animationName) {
    fbxLoader.load(
        url,
        (object) => {
            console.log(object.animations[0]);
            const animationAction = mixer.clipAction(object.animations[0]);

            if (animationName === "idle") {
                animationAction1 = animationAction;
            } else if (animationName === "running") {
                animationAction2 = animationAction;
            } else if (animationName === "left") {
                animationAction4 = animationAction;
            } else if (animationName === "right") {
                animationAction3 = animationAction;
            } else if (animationName === "back") {
                animationAction5 = animationAction;
            }

            animationAction.setLoop(true);
            // Reproducir la animación automáticamente
            animationAction.play();

            console.log(animationAction.isRunning());
            // Agregar la opción de animación al folder

        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
            console.error(error);
        }
    );
}

const loaderGLTF = new GLTFLoader();

let object2;

loaderGLTF.load(
    `./assets/js/models/fantasy_landscape/scene.gltf`,
    function (gltf) {
        object2 = gltf.scene;
        object2.position.z = 12;
        object2.scale.set(5000, 5000, 5000);

        // Recorrer todos los hijos del modelo cargado y desactivar las sombras
        object2.traverse(function (child) {
            if (child.isMesh) {
                // Desactivar las sombras en todas las luces que proyectan sombras
                child.castShadow = false;
            }
        });

        scene.add(object2);
    }
);



const cameraDistance = new THREE.Vector3(0, 3, -8);
scene.add(ambientLight);
scene.add(directionalLight);

function render() {
    requestAnimationFrame(render);
    const delta = clock.getDelta(); // clock es una instancia de THREE.Clock
    if (characterObject) {
        const relativeCameraPosition = characterObject.position.clone().add(cameraDistance);
        camera.position.copy(relativeCameraPosition);
        camera.lookAt(characterObject.position);
        // camera.position.x = 0;
        // camera.position.y = 0;
        // camera.position.z = 10;



        characterController3.update();
        mixer.update(delta);


        const isMoving = characterController3.getIsMoving();
        console.log("isMoving?: ", isMoving);
        if (isMoving == 0) {
            animationAction1.play();
            animationAction2.stop();
            animationAction3.stop();
            animationAction4.stop();
            animationAction5.stop();
        } else if (isMoving == 1) {
            animationAction2.play();
            animationAction1.stop();
            animationAction3.stop();
            animationAction4.stop();
            animationAction5.stop();
        } else if (isMoving == 2) {
            animationAction3.play();
            animationAction1.stop();
            animationAction2.stop();
            animationAction4.stop();
            animationAction5.stop();
        } else if (isMoving == 3) {
            animationAction4.play();
            animationAction1.stop();
            animationAction2.stop();
            animationAction3.stop();
            animationAction5.stop();
        } else if (isMoving == 4) {
            animationAction5.play();
            animationAction1.stop();
            animationAction2.stop();
            animationAction3.stop();
            animationAction4.stop();
        }
    }
    characterController1.update();
    characterController2.update();

    renderer.render(scene, camera);


}

render();