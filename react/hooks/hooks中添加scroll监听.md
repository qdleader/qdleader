```js
	useEffect(() => {
		document.getElementsByClassName("ant-layout-content")[0].addEventListener("scroll", mainBodyScroll);
		return () => {
			document.getElementsByClassName("ant-layout-content")[0].removeEventListener("scroll", mainBodyScroll);
		};
	}, []);
```