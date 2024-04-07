const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos')

const projetosInativos = document.querySelectorAll('.projeto')

botaoMostarProjetos.addEventListener('click', ()=> {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    })

    botaoMostarProjetos.classList.add('remover')
}) //função de seta

