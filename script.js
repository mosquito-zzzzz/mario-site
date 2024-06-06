function generatePyramid() {
  const height = parseInt(document.getElementById("height").value);
  if (height < 1 || height > 20 || isNaN(height)) {
    return;
  }
  let pyramid = "";
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < height; j++) {
      if (i + j < height - 1) {
        row += " ";
      } else {
        row += "#";
      }
    }
    pyramid += row + "\n";
  }

  document.getElementById("pyramid").textContent = pyramid;
}
