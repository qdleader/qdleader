# toRaw和markRaw的区别

在Vue 3中，toRaw和markRaw是两个用于处理响应式数据的方法，但它们有不同的用途和使用场景。以下是它们的详细解释和区别：

## toRaw
toRaw用于获取一个响应式对象的原始（非响应式）版本。这对于调试或在某些情况下需要直接操作原始对象的数据时非常有用。

### 用法：

```javascript

import { reactive, toRaw } from 'vue';

const state = reactive({
  count: 0
});

console.log(toRaw(state)); // 输出原始对象：{ count: 0 }
```
### 用途：

> 获取原始对象：在某些情况下，你可能需要直接访问或操作原始对象的数据，而不是响应式代理对象。
> 调试：在调试时，查看原始对象可以帮助你更清楚地理解数据的结构和状态。

## markRaw

markRaw用于标记一个对象，使其在Vue的响应式系统中被忽略。被标记为“raw”的对象将不会被转换为响应式对象。

### 用法：

```js
import { reactive, markRaw } from 'vue';

const rawObject = markRaw({
  foo: 'bar'
});

const state = reactive({
  raw: rawObject
});

console.log(state.raw); // 输出原始对象：{ foo: 'bar' }
```

### 用途：

> 性能优化：对于不需要响应式特性的对象，可以使用markRaw来避免不必要的性能开销。
> 第三方库集成：在集成一些不需要响应式特性或可能与Vue的响应式系统产生冲突的第三方库时，使用markRaw可以避免潜在的问题。

## 区别
功能不同：

> toRaw：用于获取响应式对象的原始版本。
> markRaw：用于标记对象，使其在Vue的响应式系统中被忽略。
使用场景不同：

> toRaw：在需要访问或操作原始对象数据时使用，主要用于调试和特定情况下的直接数据操作。
> markRaw：在不需要响应式特性的对象时使用，主要用于性能优化和第三方库集成。
>

行为不同：

**toRaw：不会改变对象本身，只是返回原始对象。**
**markRaw：改变对象，使其在未来的Vue响应式处理过程中被忽略。**


示例
```javascript

import { reactive, toRaw, markRaw } from 'vue';

// 使用 toRaw
const state = reactive({
  count: 0,
  nested: {
    value: 42
  }
});

const rawState = toRaw(state);
console.log(rawState); // { count: 0, nested: { value: 42 } }
console.log(rawState === state); // false, toRaw 返回的是原始对象

// 使用 markRaw
const rawObject = markRaw({
  foo: 'bar'
});

const reactiveState = reactive({
  raw: rawObject
});

console.log(reactiveState.raw); // { foo: 'bar' }
console.log(reactiveState.raw === rawObject); // true, rawObject 被标记为 raw，不会被响应式处理
```
