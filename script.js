// Arquivo: script.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que têm a classe 'btn-proximo'
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o ID do próximo passo (ex: "1" ou "2")
            const proximoPassoId = botao.getAttribute('data-proximo');
            
            // Encontra o passo ATUAL (aquele que está visível)
            const passoAtual = document.querySelector('.passo.ativo');
            
            // Encontra o PRÓXIMO passo usando o ID (ex: "passo-1" ou "passo-2")
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            if (passoAtual) {
                // Esconde o passo atual
                passoAtual.classList.remove('ativo');
            }

            if (proximoPasso) {
                // Mostra o próximo passo
                proximoPasso.classList.add('ativo');
            } else {
                console.error(`Erro: O passo com o ID "passo-${proximoPassoId}" não foi encontrado.`);
            }
        });
    });
});
