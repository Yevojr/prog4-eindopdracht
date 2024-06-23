import { Scene, Engine, Vector, Font, FontUnit, TextAlign, Label, Color, Keys} from "excalibur"
import { Background } from "./background"

export class Intro extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const background = new Background();

        this.add(background);


        const titleCard = new Label({
            text: "Escape from Hell",
            pos: new Vector(700, 350),
            font: new Font({
                family: "Comic Sans MS",
                size: 48,
                unit: FontUnit.Px,
                color: Color.LightGray,
            }),
            textAlign: TextAlign.Center,
        });
        this.add(titleCard);

        const titleInfo = new Label({
            text: "Press SPACE bar or ENTER to continue!",
            pos: new Vector(700, 550),
            font: new Font ({
                family: "Comic Sams MS",
                size: 36,
                unit: FontUnit.Px,
                color: Color.LightGray,                
            }),
            textAlign: TextAlign.Center,
        })
        this.add(titleInfo)

        

    }

    onActivate() {
        this.engine.input.keyboard.off("press");
        
        this.engine.currentScene.camera.pos = new Vector(800, 450);
        this.engine.currentScene.camera.zoom = 1;

        this.engine.input.keyboard.on("press", (event) => {
            if(event.key === Keys.Space || event.key === Keys.Enter) {
                this.engine.goToScene("level");
            }
        });
    }

}