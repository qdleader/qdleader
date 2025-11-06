# 星号打印

   *
  ***
 *****
*******
 *****
  ***
   *

```js
function printL(n) {
	if(n < 1) return 
	let starts = n * 2 - 1;
	for(let i = 1; i < starts; i +=2) {
		let spaces = (starts - i) / 2
		console.log(' '.repeat(spaces)+'*'.repeat(i))
	}
	for(let i = starts;i >=1;i -=2) {
		let spaces = (starts - i)/2
		console.log(' '.repeat(spaces)+'*'.repeat(i))
	}
	
}
printL(4)
```
