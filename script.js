function button(key) {
  let display = document.getElementById('display');
  if (key == '=') {
    if (display.innerText.length == 0) {
      display.innerText = '';
    } else {
      display.innerText = eval(display.innerText);
    }
  } else if (key == 'AC') {
    display.innerText = '';
  } else {
    display.innerText += key;
  }
}
