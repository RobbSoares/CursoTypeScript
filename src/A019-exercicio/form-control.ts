import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkUsername(username);
  checkEqualPasswords(password, password2);
  checkPassword(password);

  if (shouldSendForm(this)) console.log('Formulário enviado!');
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido');
};

const checkUsername = (input: HTMLInputElement): void => {
  if (input.value.length <= 3 || input.value.length >= 30)
    showErrorMessage(input, 'Username inválido');
};

const checkEqualPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
) => {
  if (password.value !== password2.value)
    showErrorMessage(password2, 'Senha diferente da primeira');
};

const checkPassword = (input: HTMLInputElement): void => {
  if (input.value.length <= 3 || input.value.length >= 100)
    showErrorMessage(input, 'Senha deve ter entre 4 e 100 caracteres');
};

const hideErrorMessages = (form: HTMLFormElement): void => {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGE);
  });
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
};
