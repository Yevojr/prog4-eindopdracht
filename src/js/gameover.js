import {Scene, Label, FontUnit, Font, Vector, Color, TextAlign, Keys} from "excalibur"
import { Background } from "./background"

export class GameOver extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        const background = new Background()
        this.add(background);

        const loss = new Label ({
            text: "Looks like Hell claims another soul...",
            pos: new Vector(450, 450),
            font: new Font ({
                family: "Comic Sans MS",
                size: 56,
                unit: FontUnit.Px,
                color: Color.LightGray
            }),
            textAlign: TextAlign.Center,
        });
        this.add(loss);
    }

    onActivate() {
        this.engine.currentScene.camera.pos = new Vector(800, 450);
        this.engine.currentScene.camera.zoom = 1;

        this.engine.input.keyboard.off("press");
        this.engine.input.keyboard.on("press", (event) => {
            if(event.key === Keys.Space || event.key === Keys.Enter) {
                this.engine.goToScene("intro");
            }
        });
    }
}