const livros = require('./database'); //  utilizar esse require pois foi exportado esse objeto do arquivo database em "module.exports = livros"
const readline = require('readline-sync');
perguntaInicial();

function perguntaInicial() {
    const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ');
    entradaInicial.toLocaleUpperCase() === "S" ? perguntaCategoria() : livrosOrdemCrescente();
}

function perguntaCategoria() {
    const respostaCategoria = readline.question('Deseja buscar por categoria? (S/N) ');
    respostaCategoria.toLocaleUpperCase() === "S" ? exibeCategoriasDisponiveis() : livrosOrdemCrescente() ;
}

function exibeCategoriasDisponiveis(){
    console.log("Essas são as categorias disponíveis: ");
    console.log('Produtividade', 
                '/ História brasileira',
                '/ Ficção',
                '/ Suspense',
                '/ Tecnologia'
                );
    
    const respostaCategoriaEscolhida = readline.question('Qual categoria você escolhe? ');
    exibeLivrosPorCategoria(respostaCategoriaEscolhida);
}

function exibeLivrosPorCategoria(respostaCategoriaEscolhida) { 
    const livroPorCategoria = livros.filter(livro => livro.categoria.toLocaleUpperCase() === respostaCategoriaEscolhida.toLocaleUpperCase());
    console.table(livroPorCategoria);
}

function livrosOrdemCrescente() {
    console.log("Esses são todos os livros disponíveis");
    const livrosOrdenadosCrescente = livros.sort((a,b) => a.paginas - b.paginas);
    console.table(livrosOrdenadosCrescente); 
}