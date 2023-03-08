import {Application, Sprite, Texture} from "pixi.js";


export class germanis extends Sprite {
    app: Application

    constructor(app: Application) {
        super(Texture.from("germanitis.png"));
        this.app = app
        this.zIndex = -10

        this.anchor.set(1);
        this.x = app.screen.width / 2;
        this.y = app.screen.height / 2;
        this.height = 30
        this.width = 30
        this.app.stage.addChild(this);

    }
}


