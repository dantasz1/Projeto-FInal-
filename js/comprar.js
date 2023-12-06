
const roupa = document.querySelector("#roupa")
const valor = document.querySelector("#valor")
const imagens = document.getElementsByClassName('img')   

window.addEventListener('load', e => {
    roupa.innerHTML = window.localStorage.getItem('nome')
    const valorComCifrao = `$${window.localStorage.getItem('valor')}`;
    valor.innerHTML = valorComCifrao;
    window.localStorage.getItem('img')
    window.localStorage.getItem('id')
    console.log(imagens)
    Array.from(imagens).forEach((element , i ) => {
     let imag = document.getElementById('img' + (i + 1))
     let url =   window.localStorage.getItem('img' + (i + 1))
        imag.src = url
        console.log(url)
    });                    
       
    
    
           
  }

)

