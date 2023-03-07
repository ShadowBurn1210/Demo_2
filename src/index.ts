import {Application, EventBoundary, Point, Rectangle, Sprite, Texture} from 'pixi.js'
import {germanis} from "./game/heros";

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1000,
	height: 800
});

app.stage.scale.set(3, 3)


const boundary = new EventBoundary(app.stage);

let rect = Sprite.from(Texture.WHITE)
rect.x = 450, rect.y = 500
rect.height = 40, rect.width = 40
rect.tint = 0xFF0000
rect.interactive = true
app.stage.addChild(rect)




document.addEventListener("keydown", e => movementing(e));

const germ = new germanis(app)
// germ.anchor.set(0,0)
germ.interactive = false
function movementing(e: KeyboardEvent): void {
	// console.log(germ.x, germ.y, app.screen.width / 2,  app.screen.height / 2, app.stage.x, app.stage.y, app.screen.width -( 3*app.screen.width/2 + app.stage.x ), app.screen.height -( 3*app.screen.height/2 + app.stage.y ))
	let p = new Point(app.screen.width / 2,  app.screen.height / 2)
	console.log(boundary.hitTest(p.x - app.stage.scale.x*5 - app.stage.scale.x*germ.width/2, p.y - app.stage.scale.y*5 - app.stage.scale.y*germ.height/2));
	// let p = new Point(app.screen.width -( 3*app.screen.width/2 + app.stage.x ),  app.screen.height -( 3*app.screen.height/2 + app.stage.y ))
	// console.log(boundary.hitTest(p.x, p.y));
	// console.log(boundary.hitTest(470, 440));
	// for (let y=0; y<app.screen.height; y++) {
	// 	for (let x=0; x<app.screen.width; x++) {
	// 		if (boundary.hitTest(x, y)) {
	// 			console.log(x, y, boundary.hitTest(x, y));
	// 		}
	// 	}
	// }

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
	}
}



app.stage.x = -app.screen.width/2 - germ.x - germ.width/2
app.stage.y =  -app.screen.height/2 - germ.y - germ.height/2

