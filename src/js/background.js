import {Actor, Vector, CollisionType} from "excalibur"
import { Resources} from "./resources"


export class Background extends Actor {
    constructor(x, y) {
        super({
            width: 1280,
            height: 720,
            pos: new Vector(x, y),
        });
        this.body.collisionType = CollisionType.Passive;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite());
        this.pos.x = 0;
        this.pos.y = 0;
        this.scale.setTo(2.5, 2.5);
        this.z = 0;
        

    }

}