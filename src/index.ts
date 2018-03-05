import Epicycle from "./epicycle";
import "./style.css";
import { random } from "./utils";

const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d", { alpha: false })!;

let path = new Path2D();
let t = 0;
let speed = .01;
let epicycle = random(100);
const size = epicycle.size + 4;

ctx.canvas.width = ctx.canvas.height = size;

ctx.fillStyle = "#232323";
ctx.fillRect(0, 0, size, size);

function iterate() {
  ctx.fillRect(0, 0, size, size);
  ctx.beginPath();
  epicycle.draw(t, size / 2, size / 2, ctx, path);
  ctx.strokeStyle = "#bf4040";
  ctx.stroke(path);
  ctx.strokeStyle = "#808080";
  ctx.stroke();

  t += speed;
  requestAnimationFrame(iterate);
}
requestAnimationFrame(iterate);

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case ",":
      speed /= 2;
      break;
    case ".":
      speed *= 2;
      break;
    case "r":
      path = new Path2D();
      t = 0;
      break;
    case "n":
      path = new Path2D();
      t = 0;
      epicycle = random(100);
      break;
    case "c":
      path = new Path2D();
      break;
  }
});
