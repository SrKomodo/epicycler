import { state } from "./index";
import { setupCanvas } from "./renderer";
import { random } from "./utils";

const helpDialog = document.getElementById("help") as HTMLDivElement;
const actionDialog = document.getElementById("action") as HTMLDivElement;

function update(text: string) {
  const element = document.createElement("div");
  element.innerHTML = text;
  element.className = "fadeout";
  actionDialog.appendChild(element);
  element.addEventListener("animationend", () => {
    element.remove();
  });
}

function startInput() {
  document.addEventListener("keypress", (e) => {
    switch (e.key) {
      case ",":
        state.speed /= 2;
        update(`speed=${state.speed * 100}`);
        break;
      case ".":
        state.speed *= 2;
        update(`speed=${state.speed * 100}`);
        break;
      case "c":
        state.path = new Path2D();
        update("path cleared");
        break;
      case "r":
        state.path = new Path2D();
        state.t = 0;
        update("animation restarted");
        break;
      case "n":
        state.path = new Path2D();
        state.t = 0;
        state.epicycle = random(100, state.mode[0], state.mode[1]);
        setupCanvas();
        update("new epicycle generated");
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
        update(`mode switched to ${state.mode[0] ? "looping " : " "}${state.mode[1] ? "circles" : "chaos"}`);
        break;

      case "F1":
        helpDialog.classList.toggle("hidden");
    }
  });
}

export { startInput };
