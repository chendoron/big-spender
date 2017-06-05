/* global document */

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

document.getElementById('app').appendChild(component());
