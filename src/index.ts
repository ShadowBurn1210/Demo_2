import { Application, Sprite } from 'pixi.js'
import {germanis} from "./game/heros";

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1000,
	height: 800
});

const clampy: Sprite = Sprite.from("afrika.jpg");

app.stage.scale.set(3, 3)



clampy.anchor.set(0.5);
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;
clampy.height = app.screen.height
clampy.width = app.screen.width

app.stage.addChild(clampy);

document.addEventListener("keydown", e => movementing(e));

const germ = new germanis(app)

function movementing(e: KeyboardEvent): void {
	if (e.key == "w") {
		germ.y -= 1
		app.stage.y += 3
	} else if (e.key == "s") {
		germ.y += 1
		app.stage.y -= 3
	} else if (e.key == "a") {
		germ.x -= 1
		app.stage.x += 3
	} else if (e.key == "d") {
		germ.x += 1
		app.stage.x -= 3
	} else if (e.key == "e") {
		germ.y -= 1
		app.stage.y += 3
		germ.x += 1
		app.stage.x -= 3
	} else if (e.key == "q") {
		germ.y -= 1
		app.stage.y += 3
		germ.x -= 1
		app.stage.x += 3
	} else if (e.key == "z") {
		germ.y += 1
		app.stage.y -= 3
		germ.x -= 1
		app.stage.x += 3
	} else if (e.key == "c") {
		germ.y += 1
		app.stage.y -= 3
		germ.x += 1
		app.stage.x -= 3
	}
}



app.stage.x = -app.screen.width/2 - germ.x - germ.width/2
app.stage.y =  -app.screen.height/2 - germ.y - germ.height/2