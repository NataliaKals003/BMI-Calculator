import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateBMI, notNumber } from "./utils.js";

//variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// const modalWrapper = document.querySelector('.modal-wrapper'); //para abrir e fechar o modal
// const modalMessage = document.querySelector('.modal .title span');//exibir nova mensagem
// const modalBtnClose = document.querySelector('.modal button.close');//botao para fechar

//pegando o submit
form.onsubmit = function (event) {
  event.preventDefault(); //automaticamente ele recarrega a pagina, porem essa funcoa faz com que ele nao recarregue

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateBMI(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Your BMI is ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}

//fechando a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
