

## 去除a标签

str=str.replace(/(<\/?a.*?>)/g, '');
console.log(str);

## 去除a或span标签

str=str.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');
console.log(str);
