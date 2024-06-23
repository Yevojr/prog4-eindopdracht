import {Actor, EdgeCollider, Vector, CollisionType} from "excalibur"


export class Lava extends Actor {
    constructor(){
        super()
        let gameBorder1 = new EdgeCollider({
            begin: new Vector(-500, 890),
            end: new Vector(1600, 890),
        });
        this.pos = new Vector(0, 0);
        this.body.collisionType = CollisionType.Fixed;
        this.collider.set(gameBorder1);

    }

}
