let result = "";

function drawImage(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (j % 2 == 1) {
        result += "* ";
      } else if (j % 2 == 0) {
        result += "# ";
      }
    }
    result += "\n";
  }
}

drawImage(5);
console.log(result);
