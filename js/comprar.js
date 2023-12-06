
const roupa = document.querySelector("#roupa")
const valor = document.querySelector("#valor")
const imagens = document.getElementsByClassName('img')   //'#img2', '#img3', '#img4'

window.addEventListener('load', e => {
    roupa.innerHTML = window.localStorage.getItem('nome')
    valor.innerHTML = window.localStorage.getItem('valor')
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

