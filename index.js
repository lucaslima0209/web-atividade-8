let quantidadeEstabelecimentos;
let estabelecimentos = new Array();

quantidadeEstabelecimentos = prompt("Quantos estabelecimentos você visitou?");

for (i = 0; i < quantidadeEstabelecimentos; i++) {
  let estabelecimento = {
    nome: prompt(`Estabelecimento ${i + 1}:`),
    valor: prompt(`Valor gasto nesse estabelecimento:`),
    gorjeta: function () {
      if (this.valor < 50) {
        return (20 / 100) * parseFloat(this.valor);
      } else if (this.valor >= 50 && this.valor <= 200) {
        return (15 / 100) * parseFloat(this.valor);
      } else {
        return (10 / 100) * parseFloat(this.valor);
      }
    },
    valorTotal: function () {
      return parseFloat(this.valor) + parseFloat(this.gorjeta());
    },
    toString: function () {
      return `${this.nome} - [Valor: R$ ${parseFloat(this.valor).toFixed(
        2
      )} | Gorjeta: R$ ${parseFloat(this.gorjeta()).toFixed(
        2
      )} | Total: R$ ${parseFloat(this.valorTotal()).toFixed(2)}]`;
    },
  };
  estabelecimentos.push(estabelecimento);
}

estabelecimentos.totalGasto = () => {
  let valor = 0;
  for (i = 0; i < quantidadeEstabelecimentos; i++) {
    valor = parseFloat(valor) + parseFloat(estabelecimentos[i].valorTotal());
  }
  return valor;
};

estabelecimentos.mediaGastos = () => {
  let valor = 0;
  for (i = 0; i < quantidadeEstabelecimentos; i++) {
    valor = parseFloat(valor) + parseFloat(estabelecimentos[i].valorTotal());
  }
  valor = valor / quantidadeEstabelecimentos;
  return valor;
};

estabelecimentos.maiorGasto = () => {
  let maiorValor = 0;
  let posicao;
  for (i = 0; i < quantidadeEstabelecimentos; i++) {
    if (estabelecimentos[i].valorTotal() > maiorValor) {
        maiorValor = estabelecimentos[i].valorTotal();
        posicao = i;
    }
  }
  return estabelecimentos[posicao];
};

estabelecimentos.imprimir = () => {
    let maiorGasto = estabelecimentos.maiorGasto();
    let lista = "";
    for (i = 0; i < quantidadeEstabelecimentos; i++) {
        lista = lista + `\n\t${estabelecimentos[i].toString()}`;
    }

    return (
        `Estabelecimentos visitados no feridado: ${quantidadeEstabelecimentos}` +
        `\nLista de Gastos: ${lista}` +
        `\nTotal gasto: R$ ${parseFloat(estabelecimentos.totalGasto()).toFixed(2)}` +
        `\nMédia de gastos: R$ ${parseFloat(estabelecimentos.mediaGastos()).toFixed(2)}` +
        `\nRestaurante com maior gasto total: ${maiorGasto.nome} (R$ ${parseFloat(maiorGasto.valorTotal()).toFixed(2)})`
    );
};

console.log(estabelecimentos.imprimir());
