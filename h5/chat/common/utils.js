/**
 * 获取元素的末尾文本Node
 */
export function findLastTextNode(element) {
  // 如果元素有子节点，递归查找
  if (element.hasChildNodes()) {
    const arrList = Array.from(element.childNodes).filter(item => {
      return (
        item.textContent.replace(/(\n|\s)/g, "").length > 0 &&
        (item.nodeType === Node.TEXT_NODE ||
          (item.nodeType === Node.ELEMENT_NODE && item.tagName !== "SPAN")) // span元素一般都是自定义的组件，跳过就行
      );
    });
    let lastChild = arrList[arrList.length - 1];

    if (!lastChild) {
      return element;
    }
    // 如果最后一个子节点是元素节点，递归查找
    else if (lastChild.nodeType === Node.ELEMENT_NODE) {
      return findLastTextNode(lastChild);
    }
    // 如果是文本节点，直接返回
    else if (!lastChild || lastChild.nodeType === Node.TEXT_NODE) {
      return element;
    }
  }
  return element; // 如果元素没有子节点，返回自身
}
