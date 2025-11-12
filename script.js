document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'btn-proximo'
    const avanca = document.querySelectorAll('.btn-proximo');

    // Itera sobre cada botão para adicionar a função de clique
    avanca.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Encontra o passo ATUAL (aquele que tem a classe 'ativo')
            const atual = document.querySelector('.passo.ativo');
            
            // 2. Constrói o ID do próximo passo (ex: 'passo-' + '1')
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            
            // 3. Encontra o elemento do próximo passo usando o ID
            const proximoPasso = document.getElementById(proximoPassoId);

            // Ações de transição:
            if (atual) {
                // Remove a classe 'ativo' do passo atual (esconde)
                atual.classList.remove('ativo');
            }

            if (proximoPasso) {
                // Adiciona a classe 'ativo' ao próximo passo (mostra)
                proximoPasso.classList.add('ativo');
            } else {
                // Mensagem de erro no console se o passo não for encontrado
                console.error(`Erro: O passo com o ID "${proximoPassoId}" não foi encontrado.`);
            }
        });
    });
});
