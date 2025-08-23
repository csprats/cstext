const modal = document.getElementById('modal')
const closeModal = document.getElementById('close')
const input = document.getElementById('url')
let insertedUrl = false
let href = ''

const  applyStyle = (style, url) => {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) {
    return
  }

  const range = selection.getRangeAt(0)
  const selectedText = range.toString()

  const span = document.createElement(style)
  span.textContent = selectedText
  if (url) span.href = url

  range.deleteContents()
  range.insertNode(span)
}

const downlod = (link) => {
  const html = document.getElementById('text').innerHTML + '<style>html { text-align: center; font-family: system-ui; }</style>'
  const blob = new Blob([html], { type: 'text/html' })

  const url = URL.createObjectURL(blob)
  link.href = url
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

document.getElementById('underline').addEventListener('click', () => {
  applyStyle('u')
})

document.getElementById('code').addEventListener('click', () => {
  applyStyle('code')
})

document.getElementById('link').addEventListener('click', () => {
  if (insertedUrl) {
    applyStyle('a', href)
    insertedUrl = false
  }
  else modal.showModal()
})

closeModal.addEventListener('click', () => {
  insertedUrl = true
  href = input.value
  modal.close()
})

document.getElementById('download').addEventListener('click', () => {
  downlod(document.getElementById('download').parentNode)
})