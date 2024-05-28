class Game extends Phaser.Scene {

    constructor(){
        super("game");
        this.my = {sprite: {}};

    }

    preload() {
        this.load.setPath("./assets/");


    }

    create() {
        let my = this.my;
        console.log("looking good!");

        this.a_key = this.input.keyboard.addKey('A');
        this.d_key = this.input.keyboard.addKey('D');
        this.s_key = this.input.keyboard.addKey('S');
        this.space_key = this.input.keyboard.addKey('SPACE');
    }

    update() {
        let my = this.my;
    }

}