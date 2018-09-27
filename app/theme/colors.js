import Color from "color";

const alphaColor = color => (alpha = 1) =>
  Color(color)
    .alpha(alpha)
    .string();

const blue = alphaColor("#4C8FCA");
const yellow = alphaColor("#FDFF00");
const orange = alphaColor("#FFC003");
const red = alphaColor("#C00001");
const violet = alphaColor("#6B59A8");
const green = alphaColor("#00B050");

export { blue, yellow, orange, red, green, violet };
export default {
  blue,
  yellow,
  orange,
  red,
  green,
  violet
};
