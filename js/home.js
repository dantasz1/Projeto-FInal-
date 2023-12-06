
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
//../imagens/camisa preta foto 1.png
 const roupas1 = new Roupas ('Camisa slim preta',  '$100' ,['../imagens/camiseta preta.png ', '../imagens/camisa preta foto 2.png ', '../imagens/camisa preta foto 3.png ', '../imagens/camisa preta foto 1.png'] , 1)
 const roupas2 = new Roupas ('Moletom Branco',  90 ,['imagens/moletom branco.png '  ], 2)
 const roupas3 = new Roupas ('Calça Jeans',  110 ,['imagens/calça jeans.png '  ], 3)
 const roupas4 = new Roupas ('Moletom Preto',  110 ,['imagens/moletomVerde.jpg '], 4)

//==========================================

const btn1 = document.getElementById('imgbtn') 

btn1.addEventListener('click' , e => {

    window.location.href('html/comprar.html')


    window.localStorage.setItem('nome',roupas1.Produto)
    window.localStorage.setItem ('valor', roupas1.Preco)
    window.localStorage.setItem('id',roupas1.Id)
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(('img' + (i + 1)) , roupas1.Img[i])
        
    }
})








