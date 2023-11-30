
 // Função para salvar o nome de usuário no Local Storage
function salvarCadastroElogin() {
    var nome = document.getElementById('nome').value;

 // Verifica se o navegador suporta Local Storage
    if (typeof(Storage)!== 'undefined') {
        localStorage.setItem('nome' , nome);
        console.log("Nome de usuario salvo com sucesso!");
    } else {
        alert('Nome nao cadastro e salvo')
    }
}
// Função para carregar o nome de usuário do Local Storage
// Verifica se o navegador suporta Local Storage e se há um nome de usuário salvo
window.onload = function() {
    if (typeof(Storage) !== "undefined" && localStorage.getItem('nome')) {
        var nomeSalvo = localStorage.getItem('nome');
        alert('Nome de usuário salvo anteriormente: ' + nomeSalvo);
      }
    };
