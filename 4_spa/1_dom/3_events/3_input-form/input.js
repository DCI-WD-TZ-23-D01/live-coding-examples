const focusInput = document.querySelector('#focus');
const focusOutput = document.querySelector('#focus+p');

// Der Wert, was in einem input-Element drin (geschrieben) ist, kann mit element.value zugegriffen werden (innerText funktioniert bei input nicht)
focusInput.addEventListener(
  'focus',
  (event) =>
    (focusOutput.innerText = `focus Event ausgelöst. ${event.target.value}`)
);

const blurInput = document.querySelector('#blur');
const blurOutput = document.querySelector('#blur+p');

blurInput.addEventListener(
  'blur',
  (event) =>
    (blurOutput.innerText = `blur Event ausgelöst. ${event.target.value}`)
);

const inputInput = document.querySelector('#input');
const inputOutput = document.querySelector('#input+p');

// inputInput.addEventListener('input', event => inputOutput.innerText = `input Event ausgelöst. ${event.target.value}`)

inputInput.addEventListener('input', (event) => {
  if (event.target.value && event.target.value.length < 8) {
    inputOutput.innerText = 'Passwort muss mindestens 8 Zeichen lang sein!';
  } else {
    inputOutput.innerText = '';
  }
});

const changeInput = document.querySelector('#change');
const changeOutput = document.querySelector('#change+p');

changeInput.addEventListener(
  'change',
  (event) =>
    (changeOutput.innerText = `change Event ausgelöst. ${event.target.value}`)
);
