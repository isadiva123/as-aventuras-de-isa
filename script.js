document.addEventListener('DOMContentLoaded', () => {
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPassoId = botao.getAttribute('data-proximo');
            const passoAtual = document.querySelector('.passo.ativo');
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            if (passoAtual) {
                passoAtual.classList.remove('ativo');
            }

            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            } else {
                console.error(`Erro: O passo com o ID "passo-${proximoPassoId}" não foi encontrado.`);
            }
        });
    });
});
