var blocks = {
    0: "sky",
    1: "grass",
    2: "dirt"
}

fetch('world.txt')
  .then(response => response.text())
  .then(text => console.log(text))