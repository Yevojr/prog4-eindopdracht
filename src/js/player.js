import {Actor, SpriteSheet, Vector, Animation, range, Keys, CollisionType, DegreeOfFreedom, BoundingBox, Shape,} from "excalibur";
import { Resources } from "./resources";
import { PlatformNormal, PlatformSmall, Wall } from "./platformTypes";
import { CrystalB, CrystalY } from "./crystal";
import { Lava } from "./lavaPit";
import { Door } from "./door";
import { PowerUp } from "./powerup";


export class Player extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y)
        });
        this.body.collisionType = CollisionType.Active;
        this.collisionCount = 0;
        this.maxCollisions = 2;

        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {rows: 8, columns: 5, spriteWidth: 50, spriteHeight: 50}
        });
        
        const idle = Animation.fromSpriteSheet(runSheet, range(10, 10), 3000);
        const runRight = Animation.fromSpriteSheet(runSheet, range(16, 19), 150);
        const runLeft = Animation.fromSpriteSheet(runSheet, range(31, 34), 150);

        this.graphics.add("idle", idle);
        this.graphics.add("runRight", runRight);
        this.graphics.add("runLeft", runLeft);

        this.graphics.use("idle");
        this.standing = false;

        this.scale.setTo(1.8, 1.8);
        const touch = Shape.Box(15, 50, new Vector(0.45, 0.5))
        this.collider.set(touch)

        console.log("player initialized")
    }

    resetPosition(x, y) {
        this.pos.setTo(x, y);
    }

    onInitialize(engine) {
       
        this.z = 2;

        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.body.mass = 12;
    
        this.on("collisionstart", (event) => this.collisionStartHandler(event));
        this.on("collisionend", (event) => this.collisionEndHandler(event));
        this.on("collisionstart", (event) => this.hazardCollisionHandler(event));
        this.on("collisionstart", (event) => this.powerUpHandler(event));
        this.on("collisionstart", (event) => this.doorHandler(event));
        this.on("collisionstart", (event) => this.outOfBoundsHandler(event));

        engine.currentScene.camera.strategy.lockToActor(this);
        engine.currentScene.camera.strategy.limitCameraBounds(
            new BoundingBox(0, -900, 1600, 900)
        );
        engine.currentScene.camera.zoom = 1.25;
        console.log("player added to scene")

    }

    collisionStartHandler(event) {
        if(event.other instanceof PlatformNormal || event.other instanceof PlatformSmall || event.other instanceof Wall) {
            this.standing = true;
            console.log("standing")
        }
    }

    collisionEndHandler(event) {
        if(event.other instanceof PlatformNormal || event.other instanceof PlatformSmall || event.other instanceof Wall) {
            this.standing = false;
            console.log("jumping")
        }
    }

    hazardCollisionHandler(event) {
        if(event.other instanceof CrystalB || event.other instanceof CrystalY) {
            this.collisionCount++;
            this.scene.hazardHit();
            if(this.collisionCount >= this.maxCollisions) {
               
                console.log("Player got stabbed by shiny.")
            }
        }
    }

    powerUpHandler(event) {
        if(event.other instanceof PowerUp) {
            this.scene.poweredUp();
            
        }
    }

    doorHandler(event) {
        if(event.other instanceof Door) {
            this.scene.engine.goToScene("victory");
            console.log("Way to go!!")
        }
    }

    outOfBoundsHandler(event) {
        if(event.other instanceof Lava) {
            this.kill();
            this.scene.engine.goToScene("gameOver");
            console.log("Player fell, and burned alive.")
        }
    }

    onPreUpdate(engine) {
        this.graphics.use("idle");
        let moveSpeed = 0;

        if(engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            moveSpeed = -300;
            this.graphics.use("runLeft");
        }

        if(engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            moveSpeed = 300;
            this.graphics.use("runRight");
        }

        if(engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            if(this.standing) {
                this.body.applyLinearImpulse(new Vector(0, -6500));
            }
        }

        if(moveSpeed === 0 && this.standing) {
            this.graphics.use("idle");
        } 

        this.vel.x = moveSpeed


    }


}
