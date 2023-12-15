

window.addEventListener('load', e => {

    let array =  JSON.parse(window.localStorage.getItem('array'))
     for (let i = 0; i < array.length; i++) {
      let nome =  array[i].nome
      let valor =  array[i].valor
     let qnt =   array[i].quantidade
       console.log(nome , valor , qnt)
    // var divNova = document.createElement("carrinho");
    // var conteudoNovo = document.createTextNode(nome);
    // divNova.appendChild(conteudoNovo);
//
    //   JSON.parse(window.localStorage.getItem('array'))
     }
    
     
   })
   