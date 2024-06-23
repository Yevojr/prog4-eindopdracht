import '../css/style.css'
import {Engine, Vector, DisplayMode, SolverStrategy,} from "excalibur"
import {ResourceLoader } from './resources.js'
import { Level } from './level1.js'
import { Intro } from './intro.js'
import { Victory } from './win.js'
import { GameOver } from './gameover.js'



export class Game extends Engine {

    constructor() {
        super({ 
            width: 1600,
            height: 900,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade, 
                gravity: new Vector(0, 950),
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){

        this.add("intro", new Intro());
        this.goToScene("intro")

        
        this.add("level", new Level())
        this.add("gameOver", new GameOver())
        this.add("victory", new Victory())


    }

    
}

new Game();
