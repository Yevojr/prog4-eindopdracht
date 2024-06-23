import {Actor, Vector, CollisionType, SpriteSheet, range, Animation, Shape} from "excalibur"
import { Resources } from "./resources"

export class PowerUp extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y)
        })
        this.body.collisionType = CollisionType.Fixed;

        const powerUp = SpriteSheet.fromImageSource({
            image: Resources.PowerUp,
            grid: {rows: 1, columns: 3, spriteWidth: 256, spriteHeight: 256}
        });

        const pow = Animation.fromSpriteSheet(powerUp, range(1, 1),30000);

        this.graphics.add("score", pow);
        this.graphics.use("score");
        this.scale.setTo(.175, .175);

        const grab = Shape.Box(256, 256, new Vector(0.5, 0.5));
        this.collider.set(grab);
    }

    onInitialize() {
        this.z = 2;
    }

    removePowerUp(){
        this.kill();
    }
}