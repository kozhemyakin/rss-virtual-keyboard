/*

window.addEventListener("load", () => {
    createLiElements(mapKeys);
});

const div = document.createElement("div");
const ul = document.createElement("ul");

const keys = [
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", " \\ ",
    "capslock"
]

let keyNumber;


  
const mapKeys = keys.map((key,index) => {
    return keyNumber = 'key' + index;
    // keyNumber = document.createElement("li");
    // ul.appendChild(keyNumber);
    // keyNumber.textContent = key;

})
console.log(mapKeys)

function createLiElements(key) {
    for (let i = 0; i < mapKeys.length; i++) {
        key[i] = document.createElement("li");
        ul.appendChild(key[i]);
        key[i].textContent = keys[i];
        key[i].classList.add(`keys[i]`);
        console.log(key[i])
    }

    return key
}



// const backquote = document.createElement("li");
// const digit1 = document.createElement("li");
// const digit2 = document.createElement("li");
// const digit3 = document.createElement("li");
// const digit4 = document.createElement("li");
// const digit5 = document.createElement("li");
// const digit6 = document.createElement("li");
// const digit7 = document.createElement("li");
// const digit8 = document.createElement("li");
// const digit9 = document.createElement("li");
// const digit0 = document.createElement("li");
// const minus = document.createElement("li");
// const equal = document.createElement("li");
// const backspace = document.createElement("li");



// document.body.appendChild(div);
// div.appendChild(ul);
// ul.appendChild(backquote);
// backquote.textContent = "~";
// ul.appendChild(digit1);
// digit1.textContent = "1";
// ul.appendChild(digit2);
// digit2.textContent = "2";
// ul.appendChild(digit3);
// digit3.textContent = "3";
// ul.appendChild(digit4);
// digit4.textContent = "4";
// ul.appendChild(digit5);
// digit5.textContent = "5";
// ul.appendChild(digit6);
// digit6.textContent = "6";
// ul.appendChild(digit7);
// digit7.textContent = "7";
// ul.appendChild(digit8);
// digit8.textContent = "8";
// ul.appendChild(digit9);
// digit9.textContent = "9";
// ul.appendChild(digit0);
// digit0.textContent = "0";
// ul.appendChild(minus);
// minus.textContent = "-";
// ul.appendChild(backspace);
// backspace.textContent = "delete";





window.addEventListener(
    "keydown",
    (event) => {
      const p = document.createElement("p");
      p.textContent = `KeyboardEvent: key="${event.key}" | code="${event.code}"`;
      document.body.appendChild(p);

      for (const li of document.querySelectorAll("li")) {
        if (li.textContent.includes(`${event.code}`)) {
          console.log(li.textContent + 'qweqwewqewqe')
          li.style.add = 'active'
        }
      }

      
    },
    true
  );

  */

const rusKeys = [
  ['ё', 40, 'Ё', 'Ё', 'ё'], ['1', 40, '!', '1', '!'], ['2', 40, '"', '2', '"'], ['3', 40, '№', '3', '№'], ['4', 40, ';', '4', ';'], ['5', 40, '%', '5', '%'], ['6', 40, ':', '6', ':'], ['7', 40, '?', '7', '?'], ['8', 40, '*', '8', '*'], ['9', 40, '(', '9', '('], ['0', 40, ')', '0', ')'], ['-', 40, '_', '-', '_'], ['=', 40, '+', '=', '+'], ['Backspace', 100, 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 50, 'Tab', 'Tab', 'Tab'], ['й', 40, 'Й', 'Й', 'й'], ['ц', 40, 'Ц', 'Ц', 'ц'], ['у', 40, 'У', 'У', 'у'], ['к', 40, 'К', 'К', 'к'], ['е', 40, 'Е', 'Е', 'е'], ['н', 40, 'Н', 'Н', 'н'], ['г', 40, 'Г', 'Г', 'г'], ['ш', 40, 'Ш', 'Ш', 'ш'], ['щ', 40, 'Щ', 'Щ', 'щ'], ['з', 40, 'З', 'З', 'з'], ['х', 40, 'Х', 'Х', 'х'], ['ъ', 40, 'Ъ', 'Ъ', 'ъ'], ['\\', 40, '/', '\\', '/'], ['Del', 44, 'Del', 'Del', 'Del'],
  ['Caps Lock', 100, 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['ф', 40, 'Ф', 'Ф', 'ф'], ['ы', 40, 'Ы', 'Ы', 'ы'], ['в', 40, 'В', 'В', 'в'], ['а', 40, 'А', 'А', 'а'], ['п', 40, 'П', 'П', 'п'], ['р', 40, 'Р', 'Р', 'р'], ['о', 40, 'О', 'О', 'о'], ['л', 40, 'Л', 'Л', 'л'], ['д', 40, 'Д', 'Д', 'д'], ['ж', 40, 'Ж', 'Ж', 'ж'], ['э', 40, 'Э', 'Э', 'э'], ['Enter', 86, 'Enter', 'Enter', 'Enter'],
  ['Shift', 100, 'Shift', 'Shift', 'Shift'], ['я', 40, 'Я', 'Я', 'я'], ['ч', 40, 'Ч', 'Ч', 'ч'], ['с', 40, 'С', 'С', 'с'], ['м', 40, 'М', 'М', 'м'], ['и', 40, 'И', 'И', 'и'], ['т', 40, 'Т', 'Т', 'т'], ['ь', 40, 'Ь', 'Ь', 'ь'], ['б', 40, 'Б', 'Б', 'б'], ['ю', 40, 'Ю', 'Ю', 'ю'], ['.', 40, ',', '.', ','], ['\2191', 40, '\2191', '\2191', '\2191'], ['Shift', 86, 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 40, 'Win', 'Win', 'Win'], ['Alt', 40, 'Alt', 'Alt', 'Alt'], [' ', 330, ' ', ' ', ' '], ['Alt', 40, 'Alt', 'Alt', 'Alt'], ['\2190', 40, '\2190', '\2190', '\2190'], ['\2193', 40, '\2193', '\2193', '\2193'], ['\2192', 40, '\2192►', '\2192', '\2192'], ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl']];

  const engKeys = [
  ['`', 40, '~', '`', '~'], ['1', 40, '!', '1', '!'], ['2', 40, '@', '2', '@'], ['3', 40, '#', '3', '#'], ['4', 40, '$', '4', '$'], ['5', 40, '%', '5', '%'], ['6', 40, '^', '6', '^'], ['7', 40, '&', '7', '&'], ['8', 40, '*', '8', '*'], ['9', 40, '(', '9', '('], ['0', 40, ')', '0', ')'], ['-', 40, '_', '-', '_'], ['=', 40, '+', '=', '+'], ['Backspace', 100, 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 50, 'Tab', 'Tab', 'Tab'], ['q', 40, 'Q', 'Q', 'q'], ['w', 40, 'W', 'W', 'w'], ['e', 40, 'E', 'E', 'e'], ['r', 40, 'R', 'R', 'r'], ['t', 40, 'T', 'T', 't'], ['y', 40, 'Y', 'Y', 'y'], ['u', 40, 'U', 'U', 'u'], ['i', 40, 'I', 'I', 'i'], ['o', 40, 'O', 'O', 'o'], ['p', 40, 'P', 'P', 'p'], ['[', 40, '{', '[', '{'], [']', 40, '}', ']', '}'], ['\\', 40, '|', '\\', '|'], ['Del', 44, 'Del', 'Del', 'Del'],
  ['Caps Lock', 100, 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['a', 40, 'A', 'A', 'a'], ['s', 40, 'S', 'S', 's'], ['d', 40, 'D', 'D', 'd'], ['f', 40, 'F', 'F', 'f'], ['g', 40, 'G', 'G', 'g'], ['h', 40, 'H', 'H', 'h'], ['j', 40, 'J', 'J', 'j'], ['k', 40, 'K', 'K', 'k'], ['l', 40, 'L', 'L', 'l'], [';', 40, ':', ';', ':'], ['\'', 40, '"', '\'', '"'], ['Enter', 86, 'Enter', 'Enter', 'Enter'],
  ['Shift', 100, 'Shift', 'Shift', 'Shift'], ['z', 40, 'Z', 'Z', 'z'], ['x', 40, 'X', 'X', 'x'], ['c', 40, 'C', 'C', 'c'], ['v', 40, 'V', 'V', 'v'], ['b', 40, 'B', 'B', 'b'], ['n', 40, 'N', 'N', 'n'], ['m', 40, 'M', 'M', 'm'], [',', 40, '<', ',', '<'], ['.', 40, '>', '.', '>'], ['/', 40, '?', '/', '?'], ['\2191', 40, '\2191', '\2191', '\2191'], ['Shift', 86, 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 40, 'Win', 'Win', 'Win'], ['Alt', 40, 'Alt', 'Alt', 'Alt'], [' ', 330, ' ', ' ', ' '], ['Alt', 40, 'Alt', 'Alt', 'Alt'], ['\2190', 40, '\2190', '\2190', '\2190'], ['\2193', 40, '▼\2193', '\2193', '\2193'], ['\2192', 40, '\2192', '\2192', '\2192'], ['Ctrl', 40, 'Ctrl', 'Ctrl', 'Ctrl']];

const codeKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];