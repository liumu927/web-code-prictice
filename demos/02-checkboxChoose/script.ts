// 获取【全选按钮】元素
const checkAll = document.getElementById('checkAll') as HTMLInputElement;
const checkAllText = document.getElementById('checkAllText') as HTMLSpanElement;

// 获取所有的【复选框】元素
const checkboxes = document.querySelectorAll(
  '.checkbox-group input[type="checkbox"]'
) as NodeListOf<HTMLInputElement>;

/**
 * 监听全选按钮的变化
 */
checkAll.addEventListener('change', () => {
  console.log('⌊Log⌋ ~ 全选按钮状态变化:', checkAll.checked);

  // 点击时控制所有项目复选框
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkAll.checked;
  });

  updateCheckAllText();
});

/**
 * 监听每个复选框的变化
 */
checkboxes.forEach((checkbox) => {
  // 检查每个复选框是否被选中
  checkbox.addEventListener('change', () => {
    console.log('⌊Log⌋ ~ 复选框状态变化:', checkbox.checked);

    // 判断是不是全选，是则勾选【全选】按钮
    const allChecked = [...checkboxes].every((cb) => cb.checked);
    checkAll.checked = allChecked;

    updateCheckAllText();
  });
});

/**
 * 更新文本内容
 */
const updateCheckAllText = () => {
  const checkedCount = [...checkboxes].filter((cb) => cb.checked).length;
  console.log('⌊Log⌋ ~ updateCheckAllText ~ checkedCount:', checkedCount);
  const totalCount = checkboxes.length;

  if (checkedCount === 0) {
    checkAllText.textContent = '未选中任何项';
  } else if (checkedCount === totalCount) {
    checkAllText.textContent = '已选中所有项';
  } else {
    checkAllText.textContent = `已选中 ${checkedCount} 项 / 共 ${totalCount} 项`;
  }
};
