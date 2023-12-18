window.addEventListener('load', e => {

  let array = JSON.parse(window.localStorage.getItem('array'))
  for (let i = 0; i < array.length; i++) {
    let nome = array[i].nome
    let valor = array[i].valor
    let qnt = array[i].quantidade
    console.log(nome, valor, qnt)

    let divProduto = document.getElementById('produto')
    let divPreco = document.getElementById('preco')
    let divTotal = document.getElementById('total')

    divProduto.innerHTML = nome
    divPreco.innerHTML = valor
    divTotal.innerHTML = qnt

    let produto = array[i]
    let valorzao = produto.quantidade * produto.Preco
    total += valorzao
    let vazio = true
    if (produto.Quantidade > 0) {
      vazio = false
      let text = document.createElement('p');
      text.style.display = 'flex';
      text.style.justifyContent = 'space-between';
      if (width <= 750) {
        text.style.flexDirection = 'column'
        text.style.gap = '2vh'
      }
      text.style.width = '80%';
      text.style.fontSize = '1.5em';

      let qtd = document.createElement('span');
      qtd.innerText = `${produto.Quantidade}x`;

      let nome = document.createElement('span');
      nome.innerText = produto.Produto;

      let preco = document.createElement('span');
      preco.innerText = `R$${valor}`;


      text.appendChild(qtd);
      text.appendChild(nome);
      text.appendChild(preco);

      carrinhoDiv.appendChild(text);
      let totalDiv = document.getElementById('total')
      totalDiv.innerHTML = `Total a Pagar: R$${total}`
      totalDiv.style.fontSize = '1.5em'
      window.localStorage.setItem('total', total)
      if (vazio) {
        carrinhoDiv.innerHTML = 'Carrinho Vazio'
        carrinhoDiv.style.fontSize = '1.5em'
      }
      if (!vazio) {
        let apagarCarrinho = document.getElementById('apagar')
        let apagar = document.createElement('button')
        apagar.innerHTML = 'Limpar Carrinho'
        apagar.addEventListener("click", deleteCarrinho)
        apagarCarrinho.appendChild(apagar)
        apagar.style.padding = '10px'
        apagar.style.backgroundColor = 'white'
        apagar.style.color = 'red'
        apagar.style.border = 'solid 1px red'
        apagar.addEventListener("mouseover", function () {
          apagar.style.transitionDuration = '0.5s'
          apagar.style.borderRadius = '10px'
          apagar.style.cursor = 'pointer'
        })
        apagar.addEventListener("mouseout", function () {
          apagar.style.transitionDuration = '0.5s'
          apagar.style.borderRadius = '0px'
          apagar.style.cursor = 'default'
        })
      }

    }
  }

}
)
