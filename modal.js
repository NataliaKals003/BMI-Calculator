export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'), //para abrir e fechar o modal
    message: document.querySelector('.modal .title span'),//exibir nova mensagem
    btnClose: document.querySelector('.modal button.close'),//botao para fechar

    open() { //funcao anonima
        Modal.wrapper.classList.add('open');
    },
    close() {//funcao anonima
        Modal.wrapper.classList.remove('open');
    }
}

//para fechar a janela message/e eu posso remover as chaves quando for de uma linha a funcao
Modal.btnClose.onclick = () => { return Modal.close() };
//Este código configura um manipulador de evento onclick para o botão btnClose que faz parte do objeto Modal

window.addEventListener('keydown', handleKeyEsc)
window.addEventListener('keydown', handleKeyEnter)

function handleKeyEsc(event) {
    if (event.key == 'Escape') {
        Modal.close();
    }
}
function handleKeyEnter(event) {
    if (event.key == 'Escape') {
        Modal.open();
    }
}

