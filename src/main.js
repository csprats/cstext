const  applyStyle = (style) => {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) {
    return
  }

  const range = selection.getRangeAt(0)
  const selectedText = range.toString()

  const span = document.createElement(style)
  span.textContent = selectedText

  range.deleteContents()
  range.insertNode(span)
}

const downlod = (link) => {
  const html = document.getElementById('text').innerHTML + '<style>html { text-align: center; font-family: system-ui; }</style>'
  const blob = new Blob([html], { type: 'text/html' })

  const url = URL.createObjectURL(blob)
  link.href = url
  link.click()
}

document.getElementById('bold-type').addEventListener('click', () => {
  applyStyle('b')
})

document.getElementById('title').addEventListener('click', () => {
  applyStyle('h1')
})

document.getElementById('cursive').addEventListener('click', () => {
  applyStyle('i')
})

document.getElementById('normal').addEventListener('click', () => {
  applyStyle('p')
})

document.getElementById('download').addEventListener('click', () => {
  downlod(document.getElementById('download').parentNode)
})