const nome = document.getElementById('nome');
const butao = document.getElementById('butao');
const descricao = document.getElementById('descricao');
const novosItens = document.querySelector('.novosItens');

butao.addEventListener('click', function(event) {
    event.preventDefault();
    const NovoItem = {
        nome: nome.value,
        descricao: descricao.value,
        butao: butao.value
    };

    const novoItem = document.createElement('div');
    novoItem.classList.add('novoItem');
    novoItem.innerHTML = `
        <h3>${NovoItem.nome}</h3>
        <p>${NovoItem.descricao}</p>
        <button>${NovoItem.butao}Excluir</button>
    `;

    if (descricao.value === 'Lendario' || descricao.value === 'lendário' || descricao.value === 'lendario' || descricao.value === 'Lendário') {
        novoItem.style.backgroundColor = 'gold';
    }

   const excluirButton = novoItem.querySelector('button');
    excluirButton.addEventListener('click', function() {
        novosItens.removeChild(novoItem);
    });

    novosItens.appendChild(novoItem);
});