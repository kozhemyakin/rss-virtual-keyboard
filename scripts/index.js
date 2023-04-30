const engKeys = [
  ['`', 40, '~', '`', '~'], ['1', 40, '!', '1', '!'], ['2', 40, '@', '2', '@'], ['3', 40, '#', '3', '#'], ['4', 40, '$', '4', '$'], ['5', 40, '%', '5', '%'], ['6', 40, '^', '6', '^'], ['7', 40, '&', '7', '&'], ['8', 40, '*', '8', '*'], ['9', 40, '(', '9', '('], ['0', 40, ')', '0', ')'], ['-', 40, '_', '-', '_'], ['=', 40, '+', '=', '+'], ['Backspace', 100, 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 50, 'Tab', 'Tab', 'Tab'], ['q', 40, 'Q', 'Q', 'q'], ['w', 40, 'W', 'W', 'w'], ['e', 40, 'E', 'E', 'e'], ['r', 40, 'R', 'R', 'r'], ['t', 40, 'T', 'T', 't'], ['y', 40, 'Y', 'Y', 'y'], ['u', 40, 'U', 'U', 'u'], ['i', 40, 'I', 'I', 'i'], ['o', 40, 'O', 'O', 'o'], ['p', 40, 'P', 'P', 'p'], ['[', 40, '{', '[', '{'], [']', 40, '}', ']', '}'], ['\\', 40, '|', '\\', '|'], ['Del', 44, 'Del', 'Del', 'Del'],
  ['Caps Lock', 100, 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['a', 40, 'A', 'A', 'a'], ['s', 40, 'S', 'S', 's'], ['d', 40, 'D', 'D', 'd'], ['f', 40, 'F', 'F', 'f'], ['g', 40, 'G', 'G', 'g'], ['h', 40, 'H', 'H', 'h'], ['j', 40, 'J', 'J', 'j'], ['k', 40, 'K', 'K', 'k'], ['l', 40, 'L', 'L', 'l'], [';', 40, ':', ';', ':'], ['\'', 40, '"', '\'', '"'], ['Enter', 86, 'Enter', 'Enter', 'Enter'],
  ['Shift', 100, 'Shift', 'Shift', 'Shift'], ['z', 40, 'Z', 'Z', 'z'], ['x', 40, 'X', 'X', 'x'], ['c', 40, 'C', 'C', 'c'], ['v', 40, 'V', 'V', 'v'], ['b', 40, 'B', 'B', 'b'], ['n', 40, 'N', 'N', 'n'], ['m', 40, 'M', 'M', 'm'], [',', 40, '<', ',', '<'], ['.', 40, '>', '.', '>'], ['/', 40, '?', '/', '?'], ['↑', 40, '↑', '↑', '↑'], ['Shift', 86, 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 40, 'Win', 'Win', 'Win'], ['Alt', 40, 'Alt', 'Alt', 'Alt'], [' ', 330, ' ', ' ', ' '], ['Alt', 40, 'Alt', 'Alt', 'Alt'], ['←', 40, '←', '←', '←'], ['↓', 40, '▼↓', '↓', '↓'], ['→', 40, '→', '→', '→'], ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl']
];

const rusKeys = [
  ['ё', 40, 'Ё', 'Ё', 'ё'], ['1', 40, '!', '1', '!'], ['2', 40, '"', '2', '"'], ['3', 40, '№', '3', '№'], ['4', 40, ';', '4', ';'], ['5', 40, '%', '5', '%'], ['6', 40, ':', '6', ':'], ['7', 40, '?', '7', '?'], ['8', 40, '*', '8', '*'], ['9', 40, '(', '9', '('], ['0', 40, ')', '0', ')'], ['-', 40, '_', '-', '_'], ['=', 40, '+', '=', '+'], ['Backspace', 100, 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 50, 'Tab', 'Tab', 'Tab'], ['й', 40, 'Й', 'Й', 'й'], ['ц', 40, 'Ц', 'Ц', 'ц'], ['у', 40, 'У', 'У', 'у'], ['к', 40, 'К', 'К', 'к'], ['е', 40, 'Е', 'Е', 'е'], ['н', 40, 'Н', 'Н', 'н'], ['г', 40, 'Г', 'Г', 'г'], ['ш', 40, 'Ш', 'Ш', 'ш'], ['щ', 40, 'Щ', 'Щ', 'щ'], ['з', 40, 'З', 'З', 'з'], ['х', 40, 'Х', 'Х', 'х'], ['ъ', 40, 'Ъ', 'Ъ', 'ъ'], ['\\', 40, '/', '\\', '/'], ['Del', 44, 'Del', 'Del', 'Del'],
  ['Caps Lock', 100, 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['ф', 40, 'Ф', 'Ф', 'ф'], ['ы', 40, 'Ы', 'Ы', 'ы'], ['в', 40, 'В', 'В', 'в'], ['а', 40, 'А', 'А', 'а'], ['п', 40, 'П', 'П', 'п'], ['р', 40, 'Р', 'Р', 'р'], ['о', 40, 'О', 'О', 'о'], ['л', 40, 'Л', 'Л', 'л'], ['д', 40, 'Д', 'Д', 'д'], ['ж', 40, 'Ж', 'Ж', 'ж'], ['э', 40, 'Э', 'Э', 'э'], ['Enter', 86, 'Enter', 'Enter', 'Enter'],
  ['Shift', 100, 'Shift', 'Shift', 'Shift'], ['я', 40, 'Я', 'Я', 'я'], ['ч', 40, 'Ч', 'Ч', 'ч'], ['с', 40, 'С', 'С', 'с'], ['м', 40, 'М', 'М', 'м'], ['и', 40, 'И', 'И', 'и'], ['т', 40, 'Т', 'Т', 'т'], ['ь', 40, 'Ь', 'Ь', 'ь'], ['б', 40, 'Б', 'Б', 'б'], ['ю', 40, 'Ю', 'Ю', 'ю'], ['.', 40, ',', '.', ','], ['↑', 40, '↑', '↑', '↑'], ['Shift', 86, 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 40, 'Win', 'Win', 'Win'], ['Alt', 40, 'Alt', 'Alt', 'Alt'], [' ', 330, ' ', ' ', ' '], ['Alt', 40, 'Alt', 'Alt', 'Alt'], ['←', 40, '←', '←', '←'], ['↓', 40, '↓', '↓', '↓'], ['→', 40, '→►', '→', '→'], ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl']
];

const codeKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];

let isMousedPressed = false;
let isCapslockPressed = false;
let isShiftPressed = false;
let pressedKey = [];
let k = 0;

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'ru')
}

const switchLanguage = () => {
  if (localStorage.getItem('language') === 'ru') {
    localStorage.setItem('language', 'en')
  } else {
    localStorage.setItem('language', 'ru')
}

  if (localStorage.getItem('language') === 'ru') {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.en`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.ru`).classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.en`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.ru`).classList.add('hidden');
    }
  }
};

const createHTML = () => {
  document.body.insertAdjacentHTML('afterbegin', 
    `<div class="container">
    <p class="hint">Windows keyboard. To switch language press left alt + shift</p>
        <div class="main">
            <textarea spellcheck="false" id="text" class="input-text" autofocus></textarea>
            <div class="keyboard" id="keyboard"></div>
        </div>        
    </div>`
);

const keyboard = document.querySelector('#keyboard');
  for (let i = 0; i < 64; i += 1) {
    keyboard.insertAdjacentHTML('beforeend', 
    `<div id="Key${i}" class="key" style="width: ${rusKeys[i][1]}px;">
        <span class="en ${localStorage.getItem('language') === 'ru' ? 'hidden' : ''}">
            <span class="downKey">${engKeys[i][0]}</span>
            <span class="shift hidden">${engKeys[i][2]}</span>
            <span class="caps hidden">${engKeys[i][3]}</span>
            <span class="shift-caps hidden">${engKeys[i][4]}</span>
        </span>
        <span class="ru ${localStorage.getItem('language') === 'en' ? 'hidden' : ''}">
            <span class="downKey">${rusKeys[i][0]}</span>
            <span class="shift hidden">${rusKeys[i][2]}</span>
            <span class="caps hidden">${rusKeys[i][3]}</span>
            <span class="shift-caps hidden">${rusKeys[i][4]}</span>
        </span>
      </div>`
    );
  }
};

createHTML();

const addSymbol = (text, typeKey, posKeyInAlph, alphType, posCursor, symbol) => {
  let value;

  if (!symbol) {
    value = text.slice(0, posCursor) + alphType[posKeyInAlph][typeKey] + text.slice(posCursor);
  } else {
    value = text.slice(0, posCursor) + symbol + text.slice(posCursor);
  }

  return value;
};

const delSymbol = (text, posCursor, deleteType) => {
  if (deleteType && !posCursor) return text;
  return deleteType ? text.slice(0, posCursor - 1) + text.slice(posCursor) : text.slice(0, posCursor) + text.slice(posCursor + 1);
};

const inputText = document.querySelector('#text');

const downKey = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.en > span.downKey`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.ru > span.downKey`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift-caps`).classList.add('hidden');
  }
};

const shiftKey = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.en > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.en > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift-caps`).classList.add('hidden');
  }
};

const keyCaps = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.en > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.ru > span.caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift-caps`).classList.add('hidden');
  }
};
const shiftKeyCaps = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.en > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.downKey`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.ru > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.en > span.shift-caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.ru > span.shift-caps`).classList.remove('hidden');
  }
};

const checkMouseClick = (i) => {
  isMousedPressed = i;
  document.querySelector(`#Key${i}`).classList.add('downKey');
};

const checkCapslock = (i) => {
  let type = false;
  const cursorPosition = inputText.selectionStart;
  if (!isShiftPressed && !isCapslockPressed) type = 0;
  if (isShiftPressed && !isCapslockPressed) type = 2;
  if (!isShiftPressed && isCapslockPressed) type = 3;
  if (isShiftPressed && isCapslockPressed) type = 4;
  inputText.value = localStorage.getItem('language') === 'en' ? addSymbol(inputText.value, type, i, engKeys, cursorPosition)
    : addSymbol(inputText.value, type, i, rusKeys, cursorPosition);
  inputText.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
};

const mouseClickEvent = () => {
  for (let i = 0; i < 64; i += 1) {
    if (i !== 29) {
      document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { checkMouseClick(i); });
      document.querySelector(`#Key${i}`).addEventListener('mouseup', () => {
      document.querySelector(`#Key${i}`).classList.remove('downKey');
    });
  }
}

document.addEventListener('mouseup', () => {
  if (isMousedPressed === false) return;
  if ((isMousedPressed === 42 || isMousedPressed === 54)) isShiftPressed = !isShiftPressed;
  if (!isShiftPressed && !isCapslockPressed) downKey();
  if (isShiftPressed && !isCapslockPressed) shiftKey();
  if (!isShiftPressed && isCapslockPressed) keyCaps();
  if (isShiftPressed && isCapslockPressed) shiftKeyCaps();
  document.querySelector(`#Key${isMousedPressed}`).classList.remove('downKey');
  isMousedPressed = false;
});

document.querySelector('#Key29').addEventListener('mousedown', () => {
  isCapslockPressed = !isCapslockPressed;
  if (isCapslockPressed) document.querySelector('#Key29').classList.add('downKey'); else document.querySelector('#Key29').classList.remove('downKey');
});

document.querySelector('#Key42').addEventListener('mousedown', () => {
  isShiftPressed = !isShiftPressed;
});

document.querySelector('#Key54').addEventListener('mousedown', () => {
  isShiftPressed = !isShiftPressed;
});

for (let i = 0; i < 64; i += 1) {
  if ((i >= 0 && i < 13)
  || (i > 14 && i < 28)
  || (i > 29 && i < 41)
  || (i > 42 && i < 54)
  || (i === 58)
  || (i > 59 && i < 63)) {
    document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { checkCapslock(i); });
  }
    if (i === 14) {
      document.querySelector('#Key14').addEventListener('mousedown', () => {
        const cursorPosition = inputText.selectionStart;
        inputText.value = addSymbol(inputText.value, false, 14, engKeys, cursorPosition, '    ');
        inputText.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
      });
    }
    if (i === 41) {
      document.querySelector('#Key41').addEventListener('mousedown', () => {
        const cursorPosition = inputText.selectionStart;
        inputText.value = addSymbol(inputText.value, false, 41, engKeys, cursorPosition, '\n');
        inputText.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
      });
    }
    if (i === 13) {
      document.querySelector('#Key13').addEventListener('mousedown', () => {
        const cursorPosition = inputText.selectionStart;
        inputText.value = delSymbol(inputText.value, cursorPosition, true);
        if (cursorPosition) inputText.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      });
    }
    if (i === 28) {
      document.querySelector('#Key28').addEventListener('mousedown', () => {
        const cursorPosition = inputText.selectionStart;
        inputText.value = delSymbol(inputText.value, cursorPosition, false);
        inputText.setSelectionRange(cursorPosition, cursorPosition);
      });
    }
  }
};

document.addEventListener('mousedown', () => {
  if (!isShiftPressed && !isCapslockPressed) downKey();
  if (isShiftPressed && !isCapslockPressed) shiftKey();
  if (!isShiftPressed && isCapslockPressed) keyCaps();
  if (isShiftPressed && isCapslockPressed) shiftKeyCaps();
});

window.onblur = () => {
  k = 0;
  isShiftPressed = false;
  document.querySelector('#Key56').classList.remove('downKey');
  if (pressedKey.length !== 0) {
    for (let i = 0; i < pressedKey.length; i += 1) {
      document.querySelector(`#Key${pressedKey[i]}`).classList.remove('downKey');
    }
  }
  pressedKey = [];
  if (isCapslockPressed) keyCaps(); else downKey();
};
