
## scroll 中的 e的类型

```js
const onScroll = (event: UIEvent) => {
  const target = event.target as HTMLElement;

  if (target && target.scrollTop + target.clientHeight + 1 >= target.scrollHeight) {
    // do the magic
  }
};


```



antd 中 Button 中的e

```js
import { ReactNode, MouseEvent } from "react";

	const handleOpenAplly = (e: MouseEvent) => {
		e.stopPropagation();
	};


<Button
				type="primary"
				onClick={e => {
					handleOpenAplly(e);
				}}
			>
				分配
			</Button>

```