import Epicycle from "./epicycle";

function random(length: number, i: number = 0): Epicycle {
  return new Epicycle(
    Math.random() * 5,
    Math.random() * 50,
    Math.random() * Math.PI * 2,
    i < length ? random(length, i + 1) : undefined,
  );
}

export { random };
