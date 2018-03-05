import Epicycle from "./epicycle";
import render from "./renderer";
import "./style.css";
import { random } from "./utils";

interface Point {
  x: number;
  y: number;
}

const epicycle = new Epicycle(
  1,
  50,
  0,
  new Epicycle(
    2,
    25,
  ),
);

render(random(100));
