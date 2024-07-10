# dayjs获取本周
```js
if (dayjs().day() == 0) {
				// 如果是周日，默认会取到下周问题修复
				range = [dayjs().startOf(type).subtract(6, "d"), dayjs().endOf(type).subtract(6, "d")];
			} else {
				range = [dayjs().startOf(type).add(1, "d"), dayjs().endOf(type).add(1, "d")];
			}

  ```