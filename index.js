
class Color {
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  constructor() {
    this.r = Color.getRandomNumber(255);
    this.g = Color.getRandomNumber(255);
    this.b = Color.getRandomNumber(255);
    this.increment = this.b < 255;
  }

  changeColor(key) {
    if (this[key] > 255) {
      // decrement
      this.increment = false;
    } else if (this[key] < 0) {
      // increment
      this.increment = true;
    }

    if (this.increment) {
      this[key] = this[key] + 10;
    } else {
      this[key] = this[key] - 10;
    }
  }
}
const color1 = new Color();
const color2 = new Color();

setInterval(() => {
  color1.changeColor("b");
  color2.changeColor("b");
  color1.changeColor("r");
  color2.changeColor("r");
  color1.changeColor("g");
  color2.changeColor("g");

  const av = document.getElementById("box1");
  av.style.background = `rgb(${color1.r},${color1.g},${color1.b})`;

  const avl = document.getElementById("box2");
  avl.style.background = `rgb(${color2.r},${color2.g},${color2.b})`;
}, 250);
