/*
Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa de com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - qundo o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão, para que o conteúdo apareça


Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido
    Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente
*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    elementoPlataformas.classList.toggle("ativo");

    // if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }

});
