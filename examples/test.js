// it tells Babel to transpile that jsx but instead of React.createElement, put App.h’.
/** @jsx App.h */

/*
const a = (
  <ul class='list'>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
)

console.log(a)
*/

/*
const a = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
)

const b = (
  <ul>
    <li>item 1</li>
    <li>hello!</li>
  </ul>
)

const $root = document.getElementById('root')
const $reload = document.getElementById('reload')

App.updateElement($root, a)
$reload.addEventListener('click', () => {
  App.updateElement($root, b, a)
})
*/

/*
const f = (
  <ul style='list-style: none;'>
    <li className='item'>item 1</li>
    <li className='item'>
      <input type='checkbox' checked />
      <input type='text' disabled={false} />
    </li>
  </ul>
)

const g = (
  <ul style='list-style: none;'>
    <li className='item item2'>item 1</li>
    <li style='background: red;'>
      <input type='checkbox' checked={false} />
      <input type='text' disabled />
    </li>
  </ul>
)

const $root = document.getElementById('root')
const $reload = document.getElementById('reload')

App.updateElement($root, f)
$reload.addEventListener('click', () => {
  App.updateElement($root, g, f)
})

*/

/*
function log (e) {
  console.log(e.target.value)
}

const f = (
  <ul style='list-style: none;'>
    <li className='item' onClick={() => alert('hi!')}>item 1</li>
    <li className='item'>
      <input type='checkbox' checked />
      <input type='text' onInput={log} />
    </li>
  </ul>
)

const g = (
  <ul style='list-style: none;'>
    <li className='item item2' onClick={() => alert('hi!')}>item 1</li>
    <li style='background: red;'>
      <input type='checkbox' checked={false} />
      <input type='text' onInput={log} />
    </li>
  </ul>
)

const $root = document.getElementById('root')
const $reload = document.getElementById('reload')

App.updateElement($root, f)
$reload.addEventListener('click', () => {
  App.updateElement($root, g, f)
})
*/

/*
const w = () =>
  <div>Welcome Home!</div>

const r = (w)

App.createElement(r)
*/
