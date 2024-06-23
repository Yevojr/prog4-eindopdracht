import { ScreenElement, Vector, Label, Font, FontUnit, Color,TextAlign } from "excalibur";

export class UI extends ScreenElement {
    constructor(player) {
        super();
        this.player = player;

        this.score;
        this.z = 10
      
        
    }

    onInitialize(engine) {
        this.score = 10000;
        this.scoreLabel = new Label ({
            text: `Score: ${this.score}`,
            pos: new Vector(350, 20),
            font: new Font ({
                family: "Comic Sans MS",
                size: 36,
                unit: FontUnit.Px,
                color: Color.LightGray
            }),
            textAlign: TextAlign.Center
        });
        this.addChild(this.scoreLabel);

        this.scoreInterval = setInterval ( () => {
            this.score-=25;
            this.updateScoreLabel();
        },500);

        console.log(typeof this.score)

    }


    updateScoreLabel() {

        this.scoreLabel.text = `Score: ${this.score}`;
        
    }

    onPostKill() {
        clearInterval(this.scoreInterval)
    }


}