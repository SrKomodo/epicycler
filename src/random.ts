import Epicycle from "epicycle";

function randomEpicycle(length: number, i: number = 0): Epicycle {
  return {
    child: i < length ? randomEpicycle(length, i + 1) : undefined,
    offset: Math.random() * Math.PI * 2,
    period: Math.random() * 5,
    size: Math.random() * 50,
  };
}

export default randomEpicycle;
