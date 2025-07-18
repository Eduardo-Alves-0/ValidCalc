function entradaUsuario() {
  let numero1, numero2, operacao;

  do {
    numero1 = Number(prompt("Digite um número:"));
    numero2 = Number(prompt("Digite outro número:"));
    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Entrada inválida. Digite números válidos.");
    }
  } while (isNaN(numero1) || isNaN(numero2));

  do {
    operacao = prompt("Digite a operação desejada (+, -, *, /):");
    if (!["+", "-", "*", "/"].includes(operacao)) {
      console.log("Operação inválida. Tente novamente.");
    }
  } while (!["+", "-", "*", "/"].includes(operacao));

  return { numero1, numero2, operacao };
}

function calculadora(numero1, numero2, operacao) {
  switch (operacao) {
    case "+":
      console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
      break;
    case "-":
      console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
      break;
    case "*":
      console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
      break;
    case "/":
      if (numero2 !== 0) {
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
      } else {
        console.log("Erro: Divisão por zero!");
      }
      break;
  }
}

const { numero1, numero2, operacao } = entradaUsuario();
calculadora(numero1, numero2, operacao);