import { ImageSource, Sound, Resource, Loader } from 'excalibur'


const Resources = {
    Player: new ImageSource('images/running_man.png'),
    PlatformHor: new ImageSource('images/Horizontal_platform_1.png'),
    PlatformSmall: new ImageSource("images/Horizontal_small_platform.png"),
    Wall: new ImageSource('images/Tall_wall_1.png'),
    Background: new ImageSource('images/bg_volcano.png'),
    PowerUp: new ImageSource('images/Power-up_sheet.png'),
    CrystalB: new ImageSource('images/blue_crystal.png'),
    CrystalY: new ImageSource('images/yellow_crystal.png'),
    ExitDoor: new ImageSource('images/door_sprite.png'),
    

}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }