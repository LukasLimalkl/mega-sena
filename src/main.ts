interface SpanElement {
  textContent: string;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortearNumeros(): void {
  const numeros: number[] = [];
  while (numeros.length < 6) {
    const numero = getRandomNumber(1, 60);
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  numeros.sort((a, b) => a - b);

  const spans: NodeListOf<Element> = document.querySelectorAll('.main-container span') as NodeListOf<Element>;
  const numerosFormatados = numeros.map(numero => numero.toString().padStart(2, '0')).join('-');

  if (spans.length > 0) {
    spans[0].textContent = numerosFormatados;
  }
}

const botao: HTMLButtonElement | null = document.querySelector('.botao');
if (botao) {
  botao.addEventListener('click', sortearNumeros);
}
