import Epicicle from "epicicle";

function randomEpicicle(length: number, i: number = 0): Epicicle {
  return {
    child: i < length ? randomEpicicle(length, i + 1) : undefined,
    offset: Math.random() * Math.PI * 2,
    period: Math.random() * 5,
    size: Math.random() * 50,
  };
}

export default randomEpicicle;
