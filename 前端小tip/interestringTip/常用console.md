# 常用console


 ```js

    1. Console.table方法;
    2. Console包对象;
    3. Console.timeㅣ console.timeEnd[OK]

```
```js

// prints the text to the console as  a log message
console.log('This is a log message');

// prints the text to the console as an informational message
console.info('This is some information'); 

// prints the text to the console as an error message
console.error('This is an error');

// prints the text to the console as a warning
console.warn('This is a warning');

// prints the geometry of the document body as an object
console.log(document.body.getBoundingClientRect());

// prints the geometry of the document body as a table
console.table(document.body.getBoundingClientRect());

// shows a list of techologies as a collapsed group
let technologies = ["HTML", "CSS", "SVG", "ECMAScript"];
console.groupCollapsed('Technolgies');
technologies.forEach(tech => {console.info(tech);})
console.groupEnd('Technolgies');



console.time()

console.timeEnd()



console.log('%c this is a message','color:#0f0;')
console.log('%c this %c is a %c message','color:#f00;','font-size:20px;','color:blue;background:yellow;')

```