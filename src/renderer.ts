import Epicycle from "./epicycle";

const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")!;
const pathCtx = (document.getElementById("pathCanvas") as HTMLCanvasElement).getContext("2d")!;
let speed = 0.001;
let t = 0;
let length = 0;

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case ",":
      speed /= 2;
      break;
    case ".":
      speed *= 2;
      break;
    case "r":
      t = 0;
      pathCtx.beginPath();
  }
});

function pol(r: number, th: number) {
  return {
    x: r * Math.cos(th),
    y: r * Math.sin(th),
  };
}

function draw(e: Epicycle, x: number, y: number, i: number) {
  const point = pol(e.radius, t * e.period + (e.offset ? e.offset : 0));
  ctx.beginPath();
  ctx.strokeStyle = "hsla(" + (length - i) / length * 360 + "deg, 100%, 75%, .5)";
  ctx.moveTo(x + e.radius, y);
  ctx.arc(x, y, e.radius, 0, Math.PI * 2);
  ctx.moveTo(x, y);
  ctx.lineTo(x + point.x, y + point.y);
  ctx.stroke();
  if (e.child) {
    draw(e.child, x + point.x, y + point.y, i + 1);
  } else {
    pathCtx.lineTo(x + point.x, y + point.y);
    pathCtx.stroke();
  }
}

function render(epicycle: Epicycle) {
  length = epicycle.depth;
  ctx.canvas.width = epicycle.size;
  ctx.canvas.height = epicycle.size;
  pathCtx.canvas.width = epicycle.size;
  pathCtx.canvas.height = epicycle.size;
  pathCtx.strokeStyle = "#fff5";
  function iterate() {
    pathCtx.clearRect(0, 0, pathCtx.canvas.width, pathCtx.canvas.height);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(epicycle, ctx.canvas.width / 2, ctx.canvas.height / 2, 0);
    ctx.closePath();
    t += speed;
    requestAnimationFrame(iterate);
  }
  requestAnimationFrame(iterate);
}

export default render;
