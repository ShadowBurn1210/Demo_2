import {Application, Sprite, Texture} from "pixi.js";


export class germanis extends Sprite {
    app: Application

    constructor(app: Application) {
        super(Texture.from("germanis.jpg"));
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
export class afrika extends Sprite {
    app: Application
    constructor(app: Application) {
        super(Texture.from("afrika.jpg"));

        this.app = app
        this.zIndex = -10

        this.anchor.set(0.5);
        this.x = app.screen.width / 2;
        this.y = app.screen.height / 2;
        this.height = app.screen.height
        this.width = app.screen.width

        this.app.stage.addChild(this);

    }
}



export class rect extends Sprite {
    app: Application
    constructor(app: Application) {
        super(Texture.from("moi-moi-beef.png"));

        this.app = app
        this.zIndex = -1

        this.anchor.set(0.5);
        this.x = app.screen.width / 2 + 20;
        this.y = app.screen.height / 2 + 20;
        this.height = 20
        this.width = 40
        this.interactive = true

        this.app.stage.addChild(this);

    }
}