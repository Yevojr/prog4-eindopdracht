import { Scene, Label, FontUnit, Font, Vector, Color, TextAlign, Keys} from "excalibur";
import { Background } from "./background";
import { UI } from "./ui";

export class Victory extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        const background = new Background();
        this.add(background);
        const ui = new UI();

        const victory = new Label({
            text: "You have escaped Hell, well done!",
            pos: new Vector(450, 400),
            font: new Font({
                family: "Comic Sans MS",
                size: 56,
                unit: FontUnit.Px,
                color: Color.LightGray,
            }),
            textAlign: TextAlign.Center,
        });
        
        this.add(victory);


        engine.input.keyboard.on("press", event => {
            if(event.key === Keys.Enter || event.key === Keys.Space) {
                engine.goToScene("intro");
            }
        })
    }

    onActivate() {
        this.engine.currentScene.camera.pos = new Vector(800, 450);
        this.engine.currentScene.camera.zoom = 1;
    }
}