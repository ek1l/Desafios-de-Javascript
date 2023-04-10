const adicao = (num1, num2) => {
  return num1 + num2;
};
const subtracao = (num1, num2) => {
  return num1 - num2;
};

const vezes = (num1, num2) => {
  return num1 * num2;
};

const divisao = (num1, num2) => {
  return num1 / num2;
};

const escolha = prompt(`Escolha uma das operações \n +, -,* ou /`);
const numeroUm = parseInt(prompt(`Agora digite um número`));
const numeroDois = parseInt(prompt(`Agora digite outro número`));

switch (escolha) {
  case "+":
    alert(adicao(numeroUm, numeroDois));
    break;
  case "-":
    alert(subtracao(numeroUm, numeroDois));
    break;
  case "*":
    alert(vezes(numeroUm, numeroDois));
    break;
  case "/":
    alert(divisao(numeroUm, numeroDois));
    break;
  default:
    alert(`Digite uma operação válida`);
}
