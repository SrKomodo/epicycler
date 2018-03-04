import Epicycle from "./epicycle";
import random from "./random";
import render from "./renderer";
import "./style.css";

interface Point {
  x: number;
  y: number;
}

const epicycle: Epicycle = {
  child: {
    period: 2.125,
    size: 50,
  },
  period: 1,
  size: 50,
};

render(random(100));
