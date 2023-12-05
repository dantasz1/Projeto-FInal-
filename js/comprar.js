
const roupa = document.querySelector("#roupa")
const valor = document.querySelector("#valor")
const imagen = document.querySelector('#img1' , '#img2' , '#img3' , '#img4')

window.addEventListener('load' , e => {
    roupa.innerHTML = window.localStorage.getItem('nome')
    valor.innerHTML = window.localStorage.getItem('valor')
     window.localStorage.getItem('img')
     window.localStorage.getItem('id')
     for (let i = 0; i < 4; i++) {
        window.localStorage.getItem('img' + (i + 1))
     }
    
 })

