
class Roupas {
Produto
Preco
Img
Quantidade
Id
constructor (produto,preco,img,id){
    this.Produto = produto
    this.Preco = preco
    this.Img = img
    this.Quantidade = 0
    this.Id = id
}
}

 const roupas1 = new Roupas ('Camisa slim preta',  '100' ,['../imagens/camiseta preta.png ', '../imagens/camisa preta foto 2.png ', '../imagens/camisa preta foto 3.png ', '../imagens/camisa preta foto 1.png'] , 1)
 const roupas2 = new Roupas ('Moletom Branco',  '90' ,['../imagens/moletom branco.png ' , '../imagens/moletom branco foto 1.png' , '../imagens/moletom-branco-foto-2.png' , '../imagens/moletom branco foto 3.png'  ], 2)
 const roupas3 = new Roupas ('Calça Jeans',  '110' ,['../imagens/calça jeans.png ' , '../imagens/calça jeans foto 1.png' , '../imagens/calça jeans foto 2.png' , '../imagens/calça jeans foto 3.png'   ], 3)
 const roupas4 = new Roupas ('Moletom Preto',  '110' ,['../imagens/moletomVerde.jpg ' , '../imagens/moletom preto foto 1.png' , '../imagens/moletom preto foto 2.png' , '../imagens/moletom preto foto 3.png'], 4)

//==========================================

const btn1 = document.getElementById('imgbtn') 

btn1.addEventListener('click' , e => {

    window.location.replace('./comprar.html')    //likando o home com o compre.html


    window.localStorage.setItem('nome',roupas1.Produto)
    window.localStorage.setItem ('valor', roupas1.Preco)
    window.localStorage.setItem('id',roupas1.Id)
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(('img' + (i + 1)) , roupas1.Img[i])
        
    }
})

const btn2 = document.getElementById('btn2')

btn2.addEventListener('click' , e => {

    window.location.replace('./comprar.html') 

window.localStorage.setItem('nome', roupas2.Produto)
window.localStorage.setItem('valor', roupas2.Preco)
window.localStorage.setItem('id', roupas2.Id)
for (let i = 0; i < 4; i++) {
    window.localStorage.setItem(('img' +(i + 1)) , roupas2.Img[i])
    
}

})
const btn3 = document.getElementById('btn3')

btn3.addEventListener('click' , e => {

    window.location.replace('./comprar.html') 

window.localStorage.setItem('nome', roupas3.Produto)
window.localStorage.setItem('valor', roupas3.Preco)
window.localStorage.setItem('id', roupas3.Id)
for (let i = 0; i < 4; i++) {
    window.localStorage.setItem(('img' +(i + 1)) , roupas3.Img[i])
    
}

})
const btn4 = document.getElementById('btn4')

btn4.addEventListener('click' , e => {

    window.location.replace('./comprar.html') 

window.localStorage.setItem('nome', roupas4.Produto)
window.localStorage.setItem('valor', roupas4.Preco)
window.localStorage.setItem('id', roupas4.Id)
for (let i = 0; i < 4; i++) {
    window.localStorage.setItem(('img' +(i + 1)) , roupas4.Img[i])
}
})









