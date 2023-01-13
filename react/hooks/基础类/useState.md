```js

import { useEffect, useState } from "react";

const App = () => {
	const [name, setName] = useState<string>("yyy");



	const do1 = () => {
        setName("qdleader");

		setName(name => {
			console.log("我是更改后的的name", name);
			return name;
		});

	

		console.log("我还是更改前的name", name);

	};


	return (
		
				<div onClick={do1}>1111</div>
		
	);
};

export default App;

```