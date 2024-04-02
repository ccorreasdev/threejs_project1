class KeyController {

    constructor() {
        this.keys = {};

        window.addEventListener("keydown", (e) => {
            // console.log("KEYDOWN", e.key);
            this.keys[e.key] = true;
        });

        window.addEventListener("keyup", (e) => {
            // console.log("KEYUP");
            this.keys[e.key] = false;
        });
    }

    isKeyPressed(key) {
        // console.log("isKeyPressed?", key);
        // console.log(this.keys[key]);
        return this.keys[key];
    }

}

export default KeyController;