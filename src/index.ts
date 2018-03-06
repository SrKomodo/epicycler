import "./style.css";

import Epicycle from "./epicycle";
import { startInput } from "./input";
import { start } from "./renderer";
import { random } from "./utils";

interface State {
  epicycle: Epicycle;
  mode: [boolean, boolean];
  path: Path2D;
  speed: number;
  t: number;
}

const state = {
  epicycle: random(100, false, true),
  mode: [false, true],
  path: new Path2D(),
  speed: .01,
  t: 0,
};

export { state };
startInput();
start();
