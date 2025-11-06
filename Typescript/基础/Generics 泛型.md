

泛型 Generics

```ts
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const numbers = [1,2,3,4,5];
const reverseNumbers = reverse(numbers);

const strings = ['a', 'b', 'c', 'd', 'e', 'f']
const reverseStrings = reverse(strings);
```
