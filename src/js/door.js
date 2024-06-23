import { Actor, Vector, SpriteSheet, Animation, range, CollisionType, Shape } from "excalibur";
import { Resources } from "./resources";

export class Door extends Actor {
    constructor(x, y){
        super({
            // width: width,
            // height: height, 
            pos: new Vector(x, y)
        });
        this.body.collisionType = CollisionType.Passive;

        const door = SpriteSheet.fromImageSource({
            image: Resources.ExitDoor,
            grid: {rows: 1, columns: 6, spriteWidth: 266.75, spriteHeight: 340}
        });
        

        const open = Animation.fromSpriteSheet(door, range(5, 5), 3000);

        this.graphics.add("exit", open);
        this.graphics.use("exit");
        this.isOpen = false;

        this.scale.setTo(0.4, 0.4);
        const exit = Shape.Box(165, 300, new Vector(0.5, 0.45));
        this.collider.set(exit); 
    }

    onInitialize(){
        this.z = 1;

    }
}