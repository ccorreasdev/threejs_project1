class CustomCharacterController {

    constructor(object, moveControls, keyListener, keyUp, keyDown, keyLeft, keyRight) {
        this.object = object;
        this.moveControls = moveControls;
        this.keyListener = keyListener;
        this.keyUp = keyUp;
        this.keyDown = keyDown;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
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


        this.moveControls.update();
    }
}

export default CustomCharacterController;