import {Scene} from "excalibur"
import { Player } from "./player"
import { CrystalB, CrystalY } from "./crystal"
import { PlatformNormal, PlatformSmall, Wall } from "./platformTypes"
import { PowerUp } from "./powerup"
import { Lava } from "./lavaPit"
import { Door } from "./door"
import { Background } from "./background"
import { UI } from "./ui"

export class Level extends Scene {
    constructor(){
        super();
    }

    onInitialize(engine) {
        console.log("Level Start!")

        this.clearLevel();

        const background = new Background();
        this.add(background);

        const ui = new UI();
        this.add(ui);

        const runner = new Player(20, 0);
        this.add(runner);

        const wallPositions = [
            {x: 0, y: 800},
            {x: 0, y: 625},
            {x: 1500, y: 875},
        ];

        wallPositions.forEach((pos) => {
            const wallPlatforms = new Wall(pos.x, pos.y);
            this.add(wallPlatforms);
            console.log("Wall has been set.")
        });

        const normalPlatPositions = [
            {x:300, y: 750},
            {x: 760, y: 750},
            {x: 1220, y: 750}
        ];

        normalPlatPositions.forEach((pos) => {
            const normalPlatform = new PlatformNormal(pos.x, pos.y);
            this.add(normalPlatform)
            console.log("Normal Platform has been set.")
        });

        const smallPlatPositions = [
            {x: 530, y: 750},
            {x: 990, y: 750},
            {x: 449, y: 421},
            {x: 695, y: 375},
            {x: 1000, y: 300} 
        ];

        smallPlatPositions.forEach((pos) => {
            const smallPlatform = new PlatformSmall(pos.x, pos.y)
            this.add(smallPlatform)
        });

        const blueCrystalPositions = [
            {x: 495, y: 650},
            {x: 565, y: 650},
            {x: 655, y: 272},
        ];

        blueCrystalPositions.forEach((pos) => {
            const blueCrys = new CrystalB(pos.x, pos.y);
            this.add(blueCrys)
            this.hazardHit = () => {
                ui.score -=500
            }
        });
        
        const powers = [
            {x: 950, y: 240},
        ];

        powers.forEach((pos) => {
            const powerUp = new PowerUp(pos.x, pos.y);
            this.add(powerUp);
            this.poweredUp = () => {
                ui.score += 15000;
                powerUp.removePowerUp();
            }
        });

        const yellowCrystalPositions = [
            {x: 960, y: 635},
            {x: 1025, y: 635},
            {x: 1035, y: 181},
        ];

        yellowCrystalPositions.forEach((pos) => {
            const yelCrys = new CrystalY(pos.x, pos.y);
            this.add(yelCrys)
            this.hazardHit = () => {
                ui.score -=1000
            }
        });




        const exit = new Door(1550, 620);
        this.add(exit);
        console.log(exit);


        const lava = new Lava();
        this.add(lava);

        

        
    }

    clearLevel() {
        this.actors.forEach(child => {
            child.kill();
        })
    }


}