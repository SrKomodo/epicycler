import Epicycle from "./epicycle";

function random(length: number, looping: boolean, circles: boolean, i: number = 0): Epicycle {
  let period = Math.random() * 5;
  if (!circles) {
    period = period * 2 - 5;
  }
  if (looping) {
    period = Math.floor(period);
  }
  return new Epicycle(
    period,
    Math.random() * 50,
    Math.random() * Math.PI * 2,
    i < length ? random(length, looping, circles, i + 1) : undefined,
  );
}

export { random };
