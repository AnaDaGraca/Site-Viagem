var valorTotal = [0, 0];
var valorProduto = [6000.00, 4000.00, 4000.00, 4000.00, 4000.00, 6000.00, 2000.00, 4000.00, 3000.00];
var qtd = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function adicionarItem(item) {

    var quantidade = document.getElementById("quantidade" + item);
    // console.log(quantidade)
    var total = document.getElementById("total" + item);
    // console.log(total)
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    valorCompra();
}


function removerItem(item) {

    if (qtd[item] > 0) {
        qtd[item] -= 1;
        var quantidade = document.getElementById("quantidade" + item);
        var total = document.getElementById("total" + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        console.log(total)
        console.log(qtd[item])
        qtd[item] !== 0 ? total.innerHTML = valorTotal[item].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : true;
        valorCompra();
    }
}

function valorCompra() {

    var valorTotalCompra = document.getElementById("valorTotalCompra");
    var valor = 0;

    for (var i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}