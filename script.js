document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que têm a classe 'btn-proximo'
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // Itera sobre cada botão para adicionar a funcionalidade de clique
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', () => {
            
            // 1. Pega o ID do próximo passo do atributo 'data-proximo'
            const proximoPassoId = botao.getAttribute('data-proximo');
            
            // 2. Encontra o passo ATUAL (o que tem a classe 'ativo')
            const passoAtual = document.querySelector('.passo.ativo');
            
            // 3. Encontra o PRÓXIMO passo que deve ser exibido
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            // Executa a transição:
            if (passoAtual) {
                // Remove a classe 'ativo' para ocultar o passo atual
                passoAtual.classList.remove('ativo');
            }

            if (proximoPasso) {
                // Adiciona a classe 'ativo' para exibir o próximo passo
                proximoPasso.classList.add('ativo');
            } else {
                // Mensagem de erro no console se um passo não for encontrado
                console.error(`Erro: O passo com o ID "passo-${proximoPassoId}" não foi encontrado.`);
            }
        });
    });
});
