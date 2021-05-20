const container = document.querySelector(".container");
const arr = ["small", "medium", "large"];
const colors = [];

const getColor = () => {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `${red}, ${green}, ${blue}`;
};

new Array(Math.ceil(Math.random()) * 20).fill(0).forEach((_, index) => {
  const div = document.createElement("div");
  let newColor = getColor();
  while (colors.length > 0) {
    if (colors.includes(newColor)) {
      newColor = getColor();
    } else {
      break;
    }
  }
  colors.push(newColor);
  div.style.backgroundColor = `rgb(${newColor})`;
  div.classList.add(...["card", `${arr[index % 3]}`]);
  container.appendChild(div);
});
