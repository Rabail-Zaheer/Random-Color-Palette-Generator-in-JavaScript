const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = ""; //Clearing the container
  for (let i = 0; i < maxPaletteBoxes; i++) {
    // Generating a random hex color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // console.log(randomHex);

    // Creating a new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class = "rect-box" style="background: ${randomHex}"></div><span class = "hex-value">${randomHex}</span>`;
    // Click event to current list element to copy the color
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
generatePalette();
const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");

  /* Copying the hex value, updating the text to copied and changing the text back to the original hex value after 1 second. */
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() =>
      alert("Failed to copy the color code!")
    ); /* //Creating an alert box to show if the color couldn't be copied */
};
refreshBtn.addEventListener("click", generatePalette);
