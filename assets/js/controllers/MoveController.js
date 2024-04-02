import * as THREE from "../three.js";

class MoveController {

    constructor(object, domElement) {
        this.VELOCITY = 10.0;
        this.object = object;
        this.domElement = (domElement !== undefined) ? domElement : document;
        this.moveState = { up: 0, down: 0, left: 0, right: 0 };
        this.velocity = new THREE.Vector3();
    }

    update() {
        const delta = 0.1;
        this.velocity.set(0, 0, 0);

        if (this.moveState.up) {
            this.velocity.y += this.VELOCITY * delta;
        }

        if (this.moveState.down) {
            this.velocity.y -= this.VELOCITY * delta;
        }

        if (this.moveState.left) {
            this.velocity.x -= this.VELOCITY * delta;
        }

        if (this.moveState.right) {
            this.velocity.x += this.VELOCITY * delta;
        }



        this.object.translateY(this.velocity.y * delta);
        this.object.translateX(this.velocity.x * delta);
    }
}

export default MoveController;