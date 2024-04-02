import * as THREE from "../../three.js";
import filelist from "../../FileList";
import PromiseLoader from "../../../basic/PromiseLoader";
import AnimationLoader from "../../../basic/animations/AnimationLoader";
const folder = "js/models/characters/XBot/";

const urlAnimations = {};
for (const [key, value] of Object.entries(filelist)) {
    urlAnimations[key] = folder + "animations/" + value;
}

const urlModel = folder + "X_Bot.fbx";

const X_BotLoader = () => {
    const animationLoader = new AnimationLoader(urlModel, urlAnimations);
    const promiseLoader = new PromiseLoader(THREE.FBXLoader, function (object) {
        const scale = 0.005;
        object.scale.set(scale, scale, scale);
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        object.castShadow = true;
        object.receiveShadow = true;
        return object;
    })
    animationLoader.addPromiseLoader(promiseLoader);
    return animationLoader.getModelWithAnimations();
}

export default X_BotLoader;