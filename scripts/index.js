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

if (!localStorage.getItem('language')) localStorage.setItem('language', 'RU');

const createHTML = () => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                        <div class="main">
                                                            <p class="description">Windows keyboard. To switch language press left alt + shift</p>
                                                            <textarea spellcheck="false" id="text" class="input-text" autofocus></textarea>
                                                            <div class="keyboard" id="keyboard"></div>
                                                        </div>
                                                    </div>`);
  const keyboard = document.querySelector('#keyboard');
  for (let i = 0; i < 64; i += 1) {
    keyboard.insertAdjacentHTML('beforeend', `<div id="Key${i}" class="key" style="width: ${rusKeys[i][1]}px;">
                                                      <span class="EN ${localStorage.getItem('language') === 'RU' ? 'hidden' : ''}">
                                                          <span class="keyDown">${engKeys[i][0]}</span>
                                                          <span class="shift hidden">${engKeys[i][2]}</span>
                                                          <span class="caps hidden">${engKeys[i][3]}</span>
                                                          <span class="shift-caps hidden">${engKeys[i][4]}</span>
                                                      </span>
                                                      <span class="RU ${localStorage.getItem('language') === 'EN' ? 'hidden' : ''}">
                                                          <span class="keyDown">${rusKeys[i][0]}</span>
                                                          <span class="shift hidden">${rusKeys[i][2]}</span>
                                                          <span class="caps hidden">${rusKeys[i][3]}</span>
                                                          <span class="shift-caps hidden">${rusKeys[i][4]}</span>
                                                      </span>
                                                  </div>`);
  }
};
createHTML();

let pressedKeysArray = [];
let pressedWithMouse = false;
let k = 0;
let isCapslockPressed = false;
let isShiftPressed = false;
const input_text = document.querySelector('#text');

const addSymbol = (text, typeKey, posKeyInAlph, alphType, posCursor, specSymbol) => {
  let returnVal;
  if (!specSymbol) {
    returnVal = text.slice(0, posCursor) + alphType[posKeyInAlph][typeKey] + text.slice(posCursor);
  } else {
    returnVal = text.slice(0, posCursor) + specSymbol + text.slice(posCursor);
  }
  return returnVal;
};
const delSymbol = (text, posCursor, deleteType) => {
  if (deleteType && !posCursor) return text;
  return deleteType ? text.slice(0, posCursor - 1) + text.slice(posCursor)
    : text.slice(0, posCursor) + text.slice(posCursor + 1);
};

const switchLanguage = () => {
  if (localStorage.getItem('language') === 'RU') localStorage.setItem('language', 'EN'); else localStorage.setItem('language', 'RU');
  if (localStorage.getItem('language') === 'RU') {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU`).classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.RU`).classList.add('hidden');
    }
  }
};
const keyDown = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
  }
};
const keyShift = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
  }
};
const keyCaps = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.RU > span.caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
  }
};
const keyShiftCaps = () => {
  for (let i = 0; i < 64; i += 1) {
    document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
    document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.remove('hidden');
    document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.remove('hidden');
  }
};
const choiser = (i) => {
  pressedWithMouse = i;
  document.querySelector(`#Key${i}`).classList.add('key-down');
};

const chooseKey = (i) => {
  let type = false;
  const cursorPosition = input_text.selectionStart;
  if (!isShiftPressed && !isCapslockPressed) type = 0;
  if (isShiftPressed && !isCapslockPressed) type = 2;
  if (!isShiftPressed && isCapslockPressed) type = 3;
  if (isShiftPressed && isCapslockPressed) type = 4;
  input_text.value = localStorage.getItem('language') === 'EN' ? addSymbol(input_text.value, type, i, engKeys, cursorPosition)
    : addSymbol(input_text.value, type, i, rusKeys, cursorPosition);
  input_text.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
};

const mouseClickEvent = () => {
  for (let i = 0; i < 64; i += 1) {
    if (i !== 29) {
      document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { choiser(i); });
      document.querySelector(`#Key${i}`).addEventListener('mouseup', () => {
        document.querySelector(`#Key${i}`).classList.remove('key-down');
      });
    }
  }

  document.addEventListener('mouseup', () => {
    if (pressedWithMouse === false) return;
    if ((pressedWithMouse === 42 || pressedWithMouse === 54)) isShiftPressed = !isShiftPressed;
    if (!isShiftPressed && !isCapslockPressed) keyDown();
    if (isShiftPressed && !isCapslockPressed) keyShift();
    if (!isShiftPressed && isCapslockPressed) keyCaps();
    if (isShiftPressed && isCapslockPressed) keyShiftCaps();
    document.querySelector(`#Key${pressedWithMouse}`).classList.remove('key-down');
    pressedWithMouse = false;
  });

  document.querySelector('#Key29').addEventListener('mousedown', () => {
    isCapslockPressed = !isCapslockPressed;
    if (isCapslockPressed) document.querySelector('#Key29').classList.add('key-down'); else document.querySelector('#Key29').classList.remove('key-down');
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
      document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { chooseKey(i); });
    }

    if (i === 14) {
      document.querySelector('#Key14').addEventListener('mousedown', () => {
        const cursorPosition = input_text.selectionStart;
        input_text.value = addSymbol(input_text.value, false, 14, engKeys, cursorPosition, '    ');
        input_text.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
      });
    }

    if (i === 41) {
      document.querySelector('#Key41').addEventListener('mousedown', () => {
        const cursorPosition = input_text.selectionStart;
        input_text.value = addSymbol(input_text.value, false, 41, engKeys, cursorPosition, '\n');
        input_text.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
      });
    }

    if (i === 13) {
      document.querySelector('#Key13').addEventListener('mousedown', () => {
        const cursorPosition = input_text.selectionStart;
        input_text.value = delSymbol(input_text.value, cursorPosition, true);
        if (cursorPosition) input_text.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      });
    }

    if (i === 28) {
      document.querySelector('#Key28').addEventListener('mousedown', () => {
        const cursorPosition = input_text.selectionStart;
        input_text.value = delSymbol(input_text.value, cursorPosition, false);
        input_text.setSelectionRange(cursorPosition, cursorPosition);
      });
    }
  }
};

document.addEventListener('mousedown', () => {
  if (!isShiftPressed && !isCapslockPressed) keyDown();
  if (isShiftPressed && !isCapslockPressed) keyShift();
  if (!isShiftPressed && isCapslockPressed) keyCaps();
  if (isShiftPressed && isCapslockPressed) keyShiftCaps();
});

window.onblur = () => {
  k = 0;
  isShiftPressed = false;
  document.querySelector('#Key56').classList.remove('key-down');

  if (pressedKeysArray.length !== 0) {
    for (let i = 0; i < pressedKeysArray.length; i += 1) {
      document.querySelector(`#Key${pressedKeysArray[i]}`).classList.remove('key-down');
    }
  }
  pressedKeysArray = [];
  if (isCapslockPressed) keyCaps(); else keyDown();
};

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  e.preventDefault();
  if (e.code === 'ShiftLeft' || e.code === 'AltLeft') k += 1;
  if (k === 2) switchLanguage();

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') isShiftPressed = !isShiftPressed;
  if (e.code === 'CapsLock') isCapslockPressed = !isCapslockPressed;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'CapsLock') {
    if (!isShiftPressed && !isCapslockPressed) keyDown();
    if (isShiftPressed && !isCapslockPressed) keyShift();
    if (!isShiftPressed && isCapslockPressed) keyCaps();
    if (isShiftPressed && isCapslockPressed) keyShiftCaps();
  }

  if (codeKeys.includes(e.code)) {
    document.querySelector(`#Key${codeKeys.indexOf(e.code)}`).classList.toggle('key-down');
  }
  if (e.code !== 'CapsLock') pressedKeysArray.push(codeKeys.indexOf(e.code));
});

document.addEventListener('keyup', (e) => {
  if ((e.code === 'ShiftLeft' || e.code === 'AltLeft') && k) k -= 1;

  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && isShiftPressed) isShiftPressed = !isShiftPressed;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (!isShiftPressed && !isCapslockPressed) keyDown();
    if (isShiftPressed && !isCapslockPressed) keyShift();
    if (!isShiftPressed && isCapslockPressed) keyCaps();
    if (isShiftPressed && isCapslockPressed) keyShiftCaps();
  }

  const numOfKey = codeKeys.indexOf(e.code);
  if (codeKeys.includes(e.code) && e.code !== 'CapsLock') {
    document.querySelector(`#Key${numOfKey}`).classList.remove('key-down');
  }

  if (pressedKeysArray.includes(numOfKey)) pressedKeysArray.splice(pressedKeysArray.indexOf(numOfKey), 1);
});

mouseClickEvent();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const numberOfKey = codeKeys.indexOf(e.code);
  let type = false;
  const cursorPosition = input_text.selectionStart;
  
  if ((numberOfKey >= 0 && numberOfKey < 13)
  || (numberOfKey > 14 && numberOfKey < 28)
  || (numberOfKey > 29 && numberOfKey < 41)
  || (numberOfKey > 42 && numberOfKey < 54)
  || (numberOfKey === 58)
  || (numberOfKey > 59 && numberOfKey < 63)) {
    if (!isShiftPressed && !isCapslockPressed) type = 0;
    if (isShiftPressed && !isCapslockPressed) type = 2;
    if (!isShiftPressed && isCapslockPressed) type = 3;
    if (isShiftPressed && isCapslockPressed) type = 4;
    input_text.value = localStorage.getItem('language') === 'EN' ? addSymbol(input_text.value, type, numberOfKey, engKeys, cursorPosition)
      : addSymbol(input_text.value, type, numberOfKey, rusKeys, cursorPosition);
    input_text.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  if (numberOfKey === 14) {
    input_text.value = addSymbol(input_text.value, type, numberOfKey, engKeys, cursorPosition, '    ');
    input_text.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
  }

  if (numberOfKey === 41) {
    input_text.value = addSymbol(input_text.value, type, numberOfKey, engKeys, cursorPosition, '\n');
    input_text.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }

  if (numberOfKey === 13) {
    input_text.value = delSymbol(input_text.value, cursorPosition, true);
    if (cursorPosition) input_text.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }

  if (numberOfKey === 28) {
    input_text.value = delSymbol(input_text.value, cursorPosition, false);
    input_text.setSelectionRange(cursorPosition, cursorPosition);
  }
});

document.addEventListener('mousedown', () => {
  document.querySelector('#text').focus();
});

document.addEventListener('mouseup', () => {
  document.querySelector('#text').focus();
});