function h (type, props, ...children) {
  return { type, props, children }
}

function createElement (node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  const $el = document.createElement(node.type)
  node.children.map(createElement).forEach($el.appendChild.bind($el))
  return $el
}

function changed (node1, node2) {
  return typeof node1 !== typeof node2 ||
        (typeof node1 === 'string' && node1 !== node2) ||
        node1.type !== node2.type
}

function updateElement ($parent, newNode, oldNode, index = 0) {
  // if there is no oldNode but there is a newNode, adding the new node to the parent
  if (!oldNode) {
    $parent.appendChild(
      createElement(newNode)
    )
  } else if (!newNode) { // if there is no newNode removing  the child node
    $parent.removeChild(
      $parent.childNodes[index]
    )
  } else if (changed(newNode, oldNode)) { // if there is any change in old node vs newNode,replacing the oldNode value
    $parent.replaceChild(
      createElement(newNode), $parent.childNodes[index]
    )
  } else if (newNode.type) { // if its a nested element, will iterate over the newNodeLength or the oldNode length and recursively call the function
    const newLength = newNode.children.length
    const oldLength = oldNode.children.length
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index], newNode.children[i], oldNode.children[i], i
      )
    }
  }
}

const App = {
  updateElement,
  h
}
// export default App
