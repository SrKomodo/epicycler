import Epicycle from "./epicycle";
import random from "./random";
import render from "./renderer";
import "./style.css";

interface Point {
  x: number;
  y: number;
}

const epicycle = new Epicycle(
  1,
  50,
  0,
  new Epicycle(
    2.125,
    50,
  ),
);

render(random(100));
