const countEl = document.getElementById('count') as HTMLSpanElement;
const btnInc = document.getElementById('btn-inc') as HTMLButtonElement;
const btnDec = document.getElementById('btn-dec') as HTMLButtonElement;

let count = 0;

btnInc.addEventListener('click', () => {
  count++;
  countEl.textContent = count.toString();
});

btnDec.addEventListener('click', () => {
  count--;
  countEl.textContent = count.toString();
});

console.log('计数器 Demo 已加载');
