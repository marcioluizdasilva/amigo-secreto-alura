let amigos = [];
let sorteados = []; // Array para armazenar os índices dos nomes já sorteados

function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim();

  // Validação do campo de entrada
  if (nomeAmigo === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  // Verifica se o nome já existe na lista
  if (amigos.includes(nomeAmigo)) {
    alert('Este nome já foi adicionado. Insira um nome diferente.');
    return;
  }

  // Adiciona o nome à lista e atualiza a interface
  amigos.push(nomeAmigo);
  inputAmigo.value = ''; // Limpa o campo de entrada
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista existente

  // Percorre o array usando um loop for
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i]; // Obtém o nome do amigo atual

    // Cria um novo elemento de lista (<li>)
    const li = document.createElement('li');
    li.textContent = amigo; // Exibe o nome normalmente

    // Adiciona o elemento à lista
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  // Verifica se há amigos disponíveis para sortear
  if (sorteados.length === amigos.length) {
    alert('Todos os amigos já foram sorteados!');
    return;
  }

  // Gera um índice aleatório que ainda não foi sorteado
  let indiceSorteado;
  do {
    indiceSorteado = Math.floor(Math.random() * amigos.length);
  } while (sorteados.includes(indiceSorteado)); // Repete até encontrar um índice não sorteado

  // Adiciona o índice ao array de sorteados
  sorteados.push(indiceSorteado);

  // Obtém o nome sorteado
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado do sorteio
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;

  // Atualiza a lista de amigos na tela (sem marcar os sorteados)
  atualizarListaAmigos();
}