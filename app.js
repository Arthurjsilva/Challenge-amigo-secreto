let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value
    if (nomeAmigo === '') {
        alert('Por favor, insira o nome de um amigo');
    }
    amigos.push(nomeAmigo);
        atualizarListaAmigos();
    input.value = '';
}
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    let posicao = 0;
    while (posicao < amigos.length) {
        const li = document.createElement('li');
        li.textContent = amigos[posicao];
        listaAmigos.appendChild(li);
       posicao++;
    }
}

function sortearAmigo() {   
    if (amigos.length === 0) {
        alert('Nenhum amigo foi adicionado ainda. Insira um nome e clique no botão (Adicionar) para começar o sorteio.');
        return;
    }
    if (amigos.length < 2) {
        alert('Insira pelo menos 2 amigos para o sorteio ser realizado');
     return;
    } 
    let amigoSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } 
    while (amigosSorteados.includes(amigoSorteado));
    
    amigosSorteados.push(amigoSorteado);
    
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `
        <li>🎉 O amigo secreto é: ${amigoSorteado}! </li> `;
    
}
