
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
    //  const url =   window.localStorage.getItem('img' + (i + 1))
         element.style.backgroundImage = 'url(../imagens/camiseta preta.png)'
        const url =  element.style.backgroundImage
        element.style.backgroundColor = `red`
        console.log(url)
    });                    
       
    
    
         //imagen[i].style.backgroundImage = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'


    //   let img = document.createElement('img')
    //    img.src ='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    //  imagen[i].appendChild(img)
     
          
  }

)

