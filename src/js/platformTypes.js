import { Platform} from "./platform";
import { Resources} from "./resources";

export class PlatformNormal extends Platform {
    constructor(x, y){
        super(x, y, 515, 167, .75, .75, Resources.PlatformHor)
        
    }

}

export class PlatformSmall extends Platform {
    constructor(x, y){
        super(x, y, 425, 212.5, .6, .6, Resources.PlatformSmall)
    }

}

export class Wall extends Platform {
    constructor(x, y){
        super(x, y, 320, 640, .8, .8, Resources.Wall)
    }

}