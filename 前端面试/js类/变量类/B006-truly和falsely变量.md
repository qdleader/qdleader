# B006-truly和falsely变量
> if判断时的truly变量和falsely变量，这点和c语言有所不同，c语言直接判断true和false，只有是truly变量才会走到if语句内

## truly 变量：

```
!!a === true 的变量
```

## falsely 变量：

```
!!a === false 的变量
```


## 以下是falsely 变量，除此之外都是truly变量

```
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
```
