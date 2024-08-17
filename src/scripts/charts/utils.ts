function setInstanceElement(
  name: string,
  type: string
) {
  if (!name) return console.warn('Set instance element: No name given')
  if (!type) return console.warn('Set instance element: No type given')

  let targetEl = document.querySelector(`#${type}-chart-${name}`)
  if (!targetEl) return console.warn('Set instance element: No target element')

  return targetEl;
}

export { setInstanceElement }