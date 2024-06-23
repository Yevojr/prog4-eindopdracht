import {Actor, CollisionType, Vector, Shape} from 'excalibur'


export class Platform extends Actor {
    constructor(x, y, width, height, scaleX, scaleY, spriteResource) {
        super({
            pos: new Vector(x, y),
            width: width,
            height: height,
        })
        // this.width = width;
        // this.height = height;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.spriteResource = spriteResource;
        this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(){
        this.graphics.use(this.spriteResource.toSprite());
        this.z = 3;
        this.scale.setTo(this.scaleX, this.scaleY);

        const floor = Shape.Box(this.width, this.height, new Vector(.5, .5));
        this.collider.set(floor);
    }
}