import Epicycle from "./epicycle";

const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d", { alpha: false })!;
const path = new Path2D();

function render(epicycle: Epicycle) {
  let t = 0;
  const size = epicycle.size + 4;

  ctx.canvas.width =
  ctx.canvas.height = size;

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

    t += .01;
    requestAnimationFrame(iterate);
  }
  requestAnimationFrame(iterate);
}

export default render;
