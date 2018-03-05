import Epicycle from "./epicycle";

const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d", { alpha: false })!;
const pathCtx = (document.getElementById("pathCanvas") as HTMLCanvasElement).getContext("2d")!;

function render(epicycle: Epicycle) {
  let t = 0;
  const size = epicycle.size + 4;

  ctx.canvas.width =
  ctx.canvas.height =
  pathCtx.canvas.width =
  pathCtx.canvas.height = size;

  ctx.strokeStyle = "#555";
  ctx.fillStyle = "#232323";
  pathCtx.strokeStyle = "hsl(0, 50%, 50%)";

  ctx.fillRect(0, 0, size, size);
  pathCtx.clearRect(0, 0, size, size);

  function iterate() {
    ctx.fillRect(0, 0, size, size);
    pathCtx.clearRect(0, 0, size, size);
    ctx.beginPath();
    epicycle.draw(t, size / 2, size / 2, ctx, pathCtx);
    ctx.stroke();
    pathCtx.stroke();

    t += .01;
    requestAnimationFrame(iterate);
  }
  requestAnimationFrame(iterate);
}

export default render;
