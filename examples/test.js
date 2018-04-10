import h from '../src/index'
// it actually tells Babel to transpile that jsx but instead of React.createElement, put h’.
/** @jsx h */

const a = (
  <ul class='list'>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
)
console.log(a)
