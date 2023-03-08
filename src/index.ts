import {Application, Container, EventBoundary, Point, Sprite, Texture} from 'pixi.js'
import {germanis} from "./game/heros";

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1000,
	height: 800
});

app.stage.sortableChildren = true
app.stage.scale.set(3, 3)

fetch("http://localhost:1234/map.json")
	.then((response) => response.json())
	.then((data) => {
		const texture = Texture.WHITE;
		const cont = new Container()
		cont.zIndex = -100

		for (let i = 0; i < data.tiles.length; i++) {
			// console.log(i)
			for (let j = 0; j < 500; j++) {
				// console.log(j)
				if (data.tiles[i][j].passable){
					const sprite1 = new Sprite(texture);
					sprite1.tint = 0x08f000
					// sprite1.x = data[j].x;
					// sprite1.y = data[j].y;
					sprite1.height = app.screen.height / data.mapSize.height;
					sprite1.width = app.screen.width / data.mapSize.width;
						sprite1.x = sprite1.width * i // parsaukt par x
						sprite1.y = sprite1.height * j // esentialy y
					sprite1.zIndex = -100
					cont.addChild(sprite1);
					// app.stage.addChild(sprite1)
					// console.log(sprite1.width)
				} else {
					const sprite2 = new Sprite(texture);
					sprite2.interactive = true
					sprite2.tint = 0xf00000
					// sprite2.x = data[j].x;
					// sprite2.y = data[j].y;
					sprite2.height = app.screen.height / data.mapSize.height;
					sprite2.width = app.screen.width / data.mapSize.width;

						sprite2.x = sprite2.width * i
						sprite2.y = sprite2.height * j
					sprite2.zIndex = -100
					cont.addChild(sprite2);
					// app.stage.addChild(sprite2)
					// console.log(sprite2.width)

				}
			}
		}
		app.stage.addChild(cont)
		console.log(data)
	});

const boundary = new EventBoundary(app.stage);

let rect = Sprite.from(Texture.WHITE)
rect.x = 450
rect.y = 500
rect.height = 40
rect.width = 40
rect.tint = 0xFF0000
rect.interactive = true
app.stage.addChild(rect)




document.addEventListener("keydown", e => movementing(e));

const germ = new germanis(app)
// germ.anchor.set(0,0)
germ.interactive = false
function movementing(e: KeyboardEvent): void {
	let p = new Point(app.screen.width / 2,  app.screen.height / 2)
	console.log(boundary.hitTest(
		p.x - app.stage.scale.x*5 - app.stage.scale.x*germ.width/2,
		p.y - app.stage.scale.y*5 - app.stage.scale.y*germ.height/2)
	);

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

