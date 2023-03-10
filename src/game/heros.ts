import {Application, Sprite, Texture} from "pixi.js";

import {charachtersJson} from "../data/fake-data";

export class germanis extends Sprite {
    app: Application

    constructor(app: Application) {

        super(Texture.from("germanitis.png"));
        this.app = app
        this.zIndex = -10

        let characters = JSON.parse(charachtersJson);

        this.anchor.set(1);
        this.x = characters.playerParty.location.x;
        this.y = characters.playerParty.location.y;
        this.height = 7 * characters.playerParty.level
        this.width = 7 * characters.playerParty.level

        this.app.stage.addChild(this);
        if (characters.playerParty.inBattle === true){
            this.tint = 0xa8327d;
        }

    }
}

export class bomis extends Sprite {
    app: Application

    constructor(app: Application) {
        super(Texture.from("Bomitis.jpeg"));
        this.app = app
        this.zIndex = -10

        let characters = JSON.parse(charachtersJson);

        this.anchor.set(1);
        this.x = characters.otherParties[0].location.x;
        this.y = characters.otherParties[0].location.y;
        this.height = 7 * characters.otherParties[0].level
        this.width = 7 * characters.otherParties[0].level
        this.app.stage.addChild(this);

        if (characters.otherParties[0].inBattle === true){
            this.tint = 0xa8327d;
        }
    }
}

export class arajs extends Sprite {
    app: Application

    constructor(app: Application) {
        super(Texture.from("arajs.jpg"));
        this.app = app
        this.zIndex = -10

        let characters = JSON.parse(charachtersJson);

        this.anchor.set(1);
        this.x = characters.otherParties[1].location.x;
        this.y = characters.otherParties[1].location.y;
        this.height = 7 * characters.otherParties[1].level
        this.width = 7 * characters.otherParties[1].level
        this.app.stage.addChild(this);

        if (characters.otherParties[1].inBattle === true){
            this.tint = 0xa8327d;
        }
    }
}

export class boldane extends Sprite {
    app: Application

    constructor(app: Application) {


        super(Texture.from("Boldane.jpg"));
        this.app = app
        this.zIndex = -10

        let characters = JSON.parse(charachtersJson);

        this.anchor.set(1);
        this.x = characters.otherParties[2].location.x;
        this.y = characters.otherParties[2].location.y;
        this.height = 7 * characters.otherParties[2].level
        this.width = 7 * characters.otherParties[2].level
        this.app.stage.addChild(this);

        if (characters.otherParties[2].inBattle === true){
            this.tint = 0xa8327d;
        }

    }
}
