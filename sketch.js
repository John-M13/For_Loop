function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fondo entre blanco y plomo 
  let bgColor = random(150, 255); // Valores de gris entre plomo y blanco
  background(bgColor);

  for (let x = 10; x < width; x += 20) {
    for (let y = 10; y < height; y += 20) {
      noStroke();

      // Escala el tamaño del círculo según la posición del mouse
      let circleSize = map(mouseX, 0, width, 5, 30); // Tamaño entre 5 y 30 píx

      
      let green = map(circleSize, 5, 30, 0, 100); // Más grande = más verde
      fill(0, green, 0); // Desde negro hasta verde oscuro

      ellipse(x, y, circleSize, circleSize);
    }
  }
}
