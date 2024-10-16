// import { Game } from "./Game.js";
import { Menu } from "./Menu.js";

const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth - 64;
canvas.height = window.innerHeight - 64;

// const game = new Game(canvas);
const menu = new Menu(canvas);

function animationLoop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  // game.render(c);
  menu.update();
  menu.draw(c);
  requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);
