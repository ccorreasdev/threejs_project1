class CharacterController {

    constructor(object, moveControls, keyListener) {
        this.object = object;
        this.moveControls = moveControls;
        this.keyListener = keyListener;
    }

    update() {
        if (this.keyListener.isKeyPressed("ArrowUp")) {
            this.moveControls.moveState.up = 1;
        } else {
            this.moveControls.moveState.up = 0;
        }

        if (this.keyListener.isKeyPressed("ArrowDown")) {
            this.moveControls.moveState.down = 1;
        } else {
            this.moveControls.moveState.down = 0;
        }

        if (this.keyListener.isKeyPressed("ArrowLeft")) {
            this.moveControls.moveState.left = 1;
        } else {
            this.moveControls.moveState.left = 0;
        }

        if (this.keyListener.isKeyPressed("ArrowRight")) {
            this.moveControls.moveState.right = 1;
        } else {
            this.moveControls.moveState.right = 0;
        }


        this.moveControls.update();
    }
}

export default CharacterController;