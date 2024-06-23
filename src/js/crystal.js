import { Resources } from "./resources"
import { Hazard } from "./hazard"

export class CrystalB extends Hazard {
    constructor(x, y){
        super(x, y)
    }

    onInitialize(engine){
        super.onInitialize(engine)
        this.graphics.use(Resources.CrystalB.toSprite());
        
    }
}

export class CrystalY extends Hazard {
    constructor(x, y){
        super(x, y)
    }

    onInitialize(engine){
        super.onInitialize(engine)
        this.scale.setTo(1.25, 1.25)
        this.graphics.use(Resources.CrystalY.toSprite())

    }
}