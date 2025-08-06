const canvas: HTMLCanvasElement = document.getElementById('drawArea') as HTMLCanvasElement
const startDrawBtn: HTMLButtonElement = document.getElementById('startDraw') as HTMLButtonElement
const eraserPathBtn: HTMLButtonElement = document.getElementById('eraserPath') as HTMLButtonElement
const clearAreaBtn: HTMLButtonElement = document.getElementById('clearArea') as HTMLButtonElement
const undoBtn: HTMLButtonElement = document.getElementById('undoPath') as HTMLButtonElement
const redoBtn: HTMLButtonElement = document.getElementById('redoPath') as HTMLButtonElement

let ctx: CanvasRenderingContext2D
let hasPath: boolean = false
let isEraser: boolean = false
let undo: Array<Path2D> = []
let redo: Array<Path2D> = []

const handleClearAreaPath = () => {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

const handleUndo = () => {}

const handleRedo = () => {}

const handleStartDraw = () => {
  if (ctx) {
    isEraser = false
    eraserPathBtn.disabled = false
    ctx.globalCompositeOperation = 'source-over'
    ctx.lineWidth = 1
    ctx.lineCap = 'butt'
  }
}

const handleEraserPath = () => {
  if (ctx) {
    isEraser = true
    eraserPathBtn.disabled = true

    // 擦除：destination-out 仅保留与现有画布不重合的部分
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
  }
}

const drawCircle = (e: MouseEvent) => {
  if (ctx) {
    const x = e.clientX - canvas.offsetLeft
    const y = e.clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.arc(x, y, 1, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  } else {
    alert('无法绘制图形，您的浏览器不支持 HTML5 canvas，请尝试现代浏览器 或 Edge 31+ 等浏览器')
  }
}

const draw = (e: MouseEvent) => {
  // 兼容性检查
  if (canvas.getContext) {
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const startPosX = e.clientX - canvas.offsetLeft
    const startPosY = e.clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.moveTo(startPosX, startPosY)

    canvas.addEventListener('mousemove', onMouseMove)
  } else {
    alert('无法绘制图形，您的浏览器不支持 HTML5 canvas，请尝试现代浏览器 或 Edge 31+ 等浏览器')
  }
}

const onMouseMove = (e: MouseEvent) => {
  const pathX = e.clientX - canvas.offsetLeft
  const pathY = e.clientY - canvas.offsetTop

  ctx.lineTo(pathX, pathY)
  ctx.stroke()
  hasPath = true
}

const onMouseUp = () => {
  canvas.removeEventListener('mousemove', onMouseMove)
}

canvas.addEventListener('click', drawCircle)
canvas.addEventListener('mousedown', draw)
canvas.addEventListener('mouseup', onMouseUp)

startDrawBtn.addEventListener('click', handleStartDraw)
eraserPathBtn.addEventListener('click', handleEraserPath)
clearAreaBtn.addEventListener('click', handleClearAreaPath)
undoBtn.addEventListener('click', handleUndo)
redoBtn.addEventListener('click', handleRedo)
