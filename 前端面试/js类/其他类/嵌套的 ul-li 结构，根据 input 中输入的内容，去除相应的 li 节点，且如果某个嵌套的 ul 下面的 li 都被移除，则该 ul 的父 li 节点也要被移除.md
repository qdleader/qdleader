# 嵌套的 ul-li 结构，根据 input 中输入的内容，去除相应的 li 节点，且如果某个嵌套的 ul 下面的 li 都被移除，则该 ul 的父 li 节点也要被移除

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Li Nodes</title>
</head>

<body>
    <input type="text" id="inputText" placeholder="输入要移除的内容">
    <button onclick="removeLiNodes()">移除</button>
    <ul id="parentUl">
        <li>Item 1</li>
        <li>Item 2
            <ul>
                <li>Subitem 1</li>
                <li>Subitem 2</li>
            </ul>
        </li>
        <li>Item 3</li>
    </ul>

    <script>
        function removeLiNodes() {
            const input = document.getElementById('inputText');
            const searchText = input.value.trim();
            const parentUl = document.getElementById('parentUl');

            function removeEmptyUl(parentLi) {
                const childUl = parentLi.querySelector('ul');
                if (childUl && childUl.children.length === 0) {
                    parentLi.remove();
                }
            }

            function traverseUl(ul) {
                const lis = Array.from(ul.children);
                for (const li of lis) {
                    if (li.textContent.trim() === searchText) {
                        li.remove();
                    } else {
                        const childUl = li.querySelector('ul');
                        if (childUl) {
                            traverseUl(childUl);
                        }
                    }
                    removeEmptyUl(li);
                }
            }

            traverseUl(parentUl);
        }
    </script>
</body>

</html>
```
