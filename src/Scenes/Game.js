class Game extends Phaser.Scene {

    constructor(){
        super("game");
        this.my = {sprite: {}};

    }

    preload() {
        this.playerArrowGroup = new PlayerArrowGroup(this);
        this.load.setPath("./assets/");

        this.load.image("background", "background.png");
        this.load.image("player", "tile_0098.png");
        this.load.image("parrow", "tile_0131.png");
        this.load.image("earrow", "tile_0131_flipped.png")
    }

    create() {
        let my = this.my;
        console.log("looking good!");

        this.add.image(480, 380, "background");

        this.a_key = this.input.keyboard.addKey('A');
        this.d_key = this.input.keyboard.addKey('D');
        this.s_key = this.input.keyboard.addKey('S');
        this.space_key = this.input.keyboard.addKey('SPACE');

        my.sprite.player = this.add.sprite(400, 775, "player");
        my.sprite.player.setScale(3);

        my.sprite.playerProjectiles = [];


    }

    playerShoot() {
        let my = this.my;
        this.playerArrowGroup.fireArrow(my.sprite.player.x, my.sprite.player.y - 20);
    }

    update() {
        let my = this.my;

        if (Phaser.Input.Keyboard.JustDown(this.space_key)) {
            this.playerShoot();
        }

        if (this.a_key.isDown) {
            my.sprite.player.x -= 5;
        }

        if (this.d_key.isDown) {
            my.sprite.player.x += 5;
        }

    }

}

class PlayerArrowGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: PlayerArrow,
            active: false,
            visible: false,
            key: 'parrow'
        });
    }

    fireArrow(x, y) {
        let arrow = this.getFirstDead(true);
        if (arrow) {
            arrow.fire(x, y);
        }
    }
} 

class PlayerArrow extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'parrow')
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocity(0, -200);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.y <= 0) {
            this.setActive = false;
            this.setVisible = false;
        }
    }
}

class EnemyArrowGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: EnemyArrow,
            active: false,
            visible: false,
            key: 'earrow'
        });
    }

    fireArrow(x, y) {
        let arrow = this.getFirstDead(true);
        if (arrow) {
            arrow.fire(x, y);
        }
    }
} 

class EnemyArrow extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'earrow')
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocity(0, 200);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
 
        if (this.y >= 800) {
            this.setActive = false;
            this.setVisible = false;
        }
    }
}

class ArcherGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            classType: Archer,
            active: false,
            visible: false,
            key: 'earrow'
        });
    }

    Move() {
        let arrow = this.getFirstDead(true);
        if (arrow) {
            arrow.fire(x, y);
        }
    }
} 
