// import App from '../src/index'

// it actually tells Babel to transpile that jsx but instead of React.createElement, put App.h’.
/** @jsx App.h */

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
