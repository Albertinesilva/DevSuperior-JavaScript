const inputName = document.forms.cadastro.name;
inputName.addEventListener('keyup', handleInputNameKeyUp);

const inputEmail = document.forms.cadastro.email;
inputEmail.addEventListener('change', handleInputEmailChange);

// const btnSubmit = document.forms.cadastro.btn;
// OUTRA FORMA DE SELECIONAR O BOTÃO DE SUBMIT DO FORMULÁRIO
const btnSubmit = document.querySelector('[type="submit"]');
btnSubmit.addEventListener('click', handleBtnSubmitClick);

// EVENT.PREVENTDEFAULT() - EVITA QUE O FORMULÁRIO SEJA ENVIADO E A PÁGINA RECARREGADA AO CLICAR NO BOTÃO DE SUBMIT DO FORMULÁRIO
function handleBtnSubmitClick(event) {
  event.preventDefault();
  console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

// EVENT.TARGET - REFERÊNCIA AO ELEMENTO QUE DISPAROU O EVENTO (NO CASO, O INPUT NAME) 
function handleInputNameKeyUp(event) {
  console.log(event.target.value);
}

// VALIDAÇÃO DE E-MAIL - ADICIONA A CLASSE 'INPUT-ERROR' AO INPUT DE E-MAIL CASO O E-MAIL SEJA INVÁLIDO 
function handleInputEmailChange(event) {
  if (!validateEmail(event.target.value)) {
    console.log("Email invalido: ", event.target.value);
    return event.target.classList.add("input-error");
  }
  console.log("Email valido: ", event.target.value);
  event.target.classList.remove("input-error");
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}