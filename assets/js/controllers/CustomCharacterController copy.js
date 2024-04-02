class CustomCharacterController {

    constructor(object, moveControls, keyListener, keyUp, keyDown, keyLeft, keyRight) {
        this.object = object;
        this.moveControls = moveControls;
        this.keyListener = keyListener;
        this.keyUp = keyUp;
        this.keyDown = keyDown;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
        this.isMoving = 0;
    }

    getIsMoving() {
        return this.isMoving;
    }

    update() {
        if (this.keyListener.isKeyPressed(this.keyDown)) {
            this.moveControls.moveState.up = 1;

        } else {
            this.moveControls.moveState.up = 0;

        }

        if (this.keyListener.isKeyPressed(this.keyUp)) {
            this.moveControls.moveState.down = 1;

        } else {
            this.moveControls.moveState.down = 0;

        }

        if (this.keyListener.isKeyPressed(this.keyLeft)) {
            this.moveControls.moveState.left = 1;

        } else {
            this.moveControls.moveState.left = 0;

        }

        if (this.keyListener.isKeyPressed(this.keyRight)) {
            this.moveControls.moveState.right = 1;

        } else {
            this.moveControls.moveState.right = 0;

        }

        if (this.moveControls.moveState.up) {
            this.isMoving = 1;
        } else if (this.moveControls.moveState.down) {
            this.isMoving = 4;
        } else if (this.moveControls.moveState.left) {
            this.isMoving = 2;
        } else if (this.moveControls.moveState.right) {
            this.isMoving = 3;
        } else {
            this.isMoving = 0
        }



        this.moveControls.update();
    }
}

export default CustomCharacterController;