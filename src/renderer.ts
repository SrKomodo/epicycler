import Epicicle from "./epicicle";

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

function getSize(e: Epicicle): number {
  length += 1;
  return e.size * 2 + (e.child ? getSize(e.child) : 0);
}

function pol(r: number, th: number) {
  return {
    x: r * Math.cos(th),
    y: r * Math.sin(th),
  };
}

function draw(e: Epicicle, x: number, y: number, i: number) {
  const point = pol(e.size, t * e.period + (e.offset ? e.offset : 0));
  ctx.beginPath();
  ctx.strokeStyle = "hsla(" + (length - i) / length * 360 + "deg, 100%, 75%, .5)";
  ctx.moveTo(x + e.size, y);
  ctx.arc(x, y, e.size, 0, Math.PI * 2);
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

function render(epicicle: Epicicle) {
  const size = getSize(epicicle);
  ctx.canvas.width = size;
  ctx.canvas.height = size;
  pathCtx.canvas.width = size;
  pathCtx.canvas.height = size;
  pathCtx.strokeStyle = "#fff5";
  function iterate() {
    pathCtx.clearRect(0, 0, pathCtx.canvas.width, pathCtx.canvas.height);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(epicicle, ctx.canvas.width / 2, ctx.canvas.height / 2, 0);
    ctx.closePath();
    t += speed;
    requestAnimationFrame(iterate);
  }
  requestAnimationFrame(iterate);
}

export default render;
