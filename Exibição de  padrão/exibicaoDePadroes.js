const num = parseInt(prompt("Digite um número: "));

let output = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  output += "<br>";
}

document.getElementById("output").innerHTML = output;
