import { state } from "./index";
import { setupCanvas } from "./renderer";
import { random } from "./utils";

function startInput() {
  document.addEventListener("keypress", (e) => {
    switch (e.key) {
      case ",":
        state.speed /= 2;
        break;
      case ".":
        state.speed *= 2;
        break;
      case "r":
        state.path = new Path2D();
        state.t = 0;
        break;
      case "n":
        state.path = new Path2D();
        state.t = 0;
        state.epicycle = random(100, state.mode[0], state.mode[1]);
        setupCanvas();
        break;
      case "c":
        state.path = new Path2D();
        break;
      case "m":
        if (state.mode[0]) {
          state.mode[0] = false;
          state.mode[1] = !state.mode[1];
        } else {
          state.mode[0] = true;
        }
        state.path = new Path2D();
        state.t = 0;
        state.epicycle = random(100, state.mode[0], state.mode[1]);
        setupCanvas();
        break;
    }
  });
}

export { startInput };
