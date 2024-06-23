import {Actor, Vector, CollisionType, Shape} from "excalibur"
import { Resources } from "./resources"

export class Hazard extends Actor {
    constructor(x, y) {
        super({
            height: 50,
            width : 50,
            pos: new Vector(x, y),
            
        });

        this.body.collisionType = CollisionType.Fixed;
        
    }

    onInitialize(engine){
        this.z = 2;
        const collider = Shape.Box(72, 55, new Vector(.55, -0.15))
        this.collider.set(collider)
    }
}