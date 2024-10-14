const screen = document.getElementById('screen');
const modeSwitcher = document.getElementById('modeSwitcher');
const body = document.body;
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');

function appendToScreen(value) {
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = 'Error';
    }
}

function clearLastDigit() {
    screen.innerText = screen.innerText.slice(0, -1);
    if (screen.innerText === '' || screen.innerText === '-') {
        screen.innerText = '0';
    }
}

function allClear() {
    screen.innerText = '0';
}

modeSwitcher.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    calculator.classList.toggle('light-mode');
    screen.classList.toggle('light-mode');
    buttons.forEach(button => button.classList.toggle('light-mode'));

    if (body.classList.contains('light-mode')) {
        modeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        modeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

 // Keyboard support
 document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
      appendToScreen(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToScreen(key);
    } else if (key === '.') {
      appendToScreen('.');
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      clearLastDigit();
    } else if (key === 'Escape') {
      allClear();
    }
  });
