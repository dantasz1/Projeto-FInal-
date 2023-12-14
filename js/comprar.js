
const roupa = document.querySelector("#roupa")
const valor = document.querySelector("#valor")
const imagens = document.getElementsByClassName('img')   
const imgGrande = document.getElementById('img4')

window.addEventListener('load', e => {
    roupa.innerHTML = window.localStorage.getItem('nome')
    const valorComCifrao = `$${window.localStorage.getItem('valor')}`;
    valor.innerHTML = valorComCifrao;
  
    Array.from(imagens).forEach((element , i ) => {
     let imag = document.getElementById('img' + (i + 1))
     let url =   window.localStorage.getItem('img' + (i + 1))
        imag.src = url
       
    });                       
  }
)

let grandona =  window.localStorage.getItem('img4')
for (let i = 0; i < 3; i++) {
  
  let imagem = document.getElementById('img' + (i + 1))

  imagem.addEventListener('click' , e => {
    imgGrande.src = imagem.src
    imagem.src = grandona
    grandona = imgGrande.src


  })}
  
    let botaoCarrinho = document.getElementById('btnCarrinho')
   botaoCarrinho.addEventListener('click' , e => {
    
    let quantidade = Number (document.getElementById('iquantidade').value)
    let id = window.localStorage.getItem('Id')
    let array = []
    let objeto = {
      nome: window.localStorage.getItem('nome'),
      valor: window.localStorage.getItem('valor') ,
      quantidade: quantidade 
    }
    
    array.push(objeto)
    console.log(array)
  })


    


  



