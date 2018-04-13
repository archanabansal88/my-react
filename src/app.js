const h = (type, props, ...children) => {
  return { type, props: props || {}, children }
}

const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  const $el = document.createElement(node.type)
  setProps($el, node.props)
  addEventListener($el, node.props)
  node.children.map(createElement).forEach($el.appendChild.bind($el))
  return $el
}

// set boolean DOM attributes (e.g. checked, disabled) with boolean value
const setBooleanProp = ($target, name, value) => {
  if (value) {
    $target.setAttribute(name, value)
    $target[name] = true
  } else {
    $target[name] = false
  }
}

const removeBooleanProp = ($target, name) => {
  $target.removeAttribute(name)
  $target[name] = false
}

const setProp = ($target, name, value) => {
  if (isCustomProp(name)) {

  } else if (name === 'className') {
    $target.setAttribute('class', value)
  } else if (typeof value === 'boolean') {
    setBooleanProp($target, name, value)
  } else {
    $target.setAttribute(name, value)
  }
}

const removeProp = ($target, name, value) => {
  if (isCustomProp(name)) {

  } else if (name === 'className') {
    $target.removeAttribute('class')
  } else if (typeof value === 'boolean') {
    removeBooleanProp($target, name)
  } else {
    $target.removeAttribute(name)
  }
}

const setProps = ($target, props) => {
  Object.keys(props).forEach((name) => {
    setProp($target, name, props[name])
  })
}

const isEventProp = (name) => {
  return /^on/.test(name)
}

const extractEventName = (name) => {
  return name.slice(2).toLowerCase()
}

const isCustomProp = (name) => {
  return isEventProp(name)
}

const addEventListener = ($target, props) => {
  Object.keys(props).forEach(name => {
    if (isEventProp(name)) {
      $target.addEventListener(
        extractEventName(name), props[name]
      )
    }
  })
}

const updateProp = ($target, name, newVal, oldVal) => {
  if (!newVal) { // if there is no such property value in new node then remove that prop
    removeProp($target, name, oldVal)
  } else if (!oldVal || newVal !== oldVal) { // if there is no such property value in old node || newNode property value not equal to oldNode property value then set props with new Value
    setProp($target, name, newVal)
  }
}

const updateProps = ($target, newProps, oldProps = {}) => {
  const props = Object.assign({}, newProps, oldProps)
  Object.keys(props).forEach((name) => {
    updateProp($target, name, newProps[name], oldProps[name])
  })
}

const changed = (node1, node2) => {
  return typeof node1 !== typeof node2 ||
          (typeof node1 === 'string' && node1 !== node2) ||
          node1.type !== node2.type
}

const updateElement = ($parent, newNode, oldNode, index = 0) => {
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
    updateProps($parent.childNodes[index], newNode.props, oldNode.props)
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
