# Y002-console运算结果
```js
			console.log(1 + '2')
			console.log(1 + '2' +'2')
			console.log(1 + +'2' +'2')
			console.log(1 - '1'+'2')
			console.log(+'1' + '1' + '2')
			console.log('A' -'B' + '2')
			console.log('A' - 'B' + 2)
			console.log('A' - 'B' + 2 +'C')
```

答案：
```js
12
122
32
02
112
NAN2
NAN
NANC
```

```js
console.log('12'+1);           
console.log('abc'+'def');       
console.log('1'+true);          
console.log('1'+undefined);    
console.log('1'+null);         

console.log(true+true);             
console.log(true+null);             
console.log(true+undefined);        
console.log(undefined+null);       
console.log(undefined+undefined);   
console.log(null+null);            

```

答案：

```js
121
abcdef
1true
1undefined
1null

2
1
undefined
undefined
undefined
0
```

```js
console.log(+[]);    
console.log(+{});     
console.log(+null);    
console.log(+true);    
console.log(+undefined);     

```

答案:

```js
0
NAN
0
1
NAN
```

```js
console.log([] + [])
console.log([] + {})
console.log({} + {})
console.log({} + [])
```

答案：
```js
''
"[object object]"
"[object object][object object]"
0
```

```js
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(Number(true))
```

答案:

```js
true

false

1
```
