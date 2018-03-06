import { state } from "./index";

const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d", { alpha: false })!;

function setupCanvas() {
  ctx.canvas.width = ctx.canvas.height = state.epicycle.size;
  ctx.fillStyle = "#232323";
  ctx.fillRect(0, 0, state.epicycle.size, state.epicycle.size);
}

function iterate() {
  ctx.fillRect(0, 0, state.epicycle.size, state.epicycle.size);
  ctx.beginPath();
  state.epicycle.draw(state.t, state.epicycle.size / 2, state.epicycle.size / 2, ctx, state.path);
  ctx.strokeStyle = "#bf4040";
  ctx.stroke(state.path);
  ctx.strokeStyle = "#808080";
  ctx.stroke();

  state.t += state.speed;
  requestAnimationFrame(iterate);
}

function start() {
  setupCanvas();
  requestAnimationFrame(iterate);
}

export { setupCanvas, start };
