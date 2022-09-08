## 1.单文件组件文件的大小写

> 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。我们推荐大写开头

### bad:
```
components/
|-mycomponent.vue 

components/
|-myComponent.vue
```

### good:
```
components/
|-MyComponent.vue 

components/
|-my-component.vue
```



## 2.基础组件命名
```
应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
```

### bad:
```
components/
|-MyButton.vue 
|-VueTable.vue 
|-Icon.vue 
```

### good:
```
components/
|-BaseButton.vue 
|-BaseTable.vue 
|-BaseIcon.vue 


components/
|-AppButton.vue 
|-AppTable.vue 
|-AppIcon.vue 

components/
|-VButton.vue 
|-VTable.vue 
|-VIcon.vue 

```


## 3.单例组件名

只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。

### bad:
```
components/
|-Heading.vue 
|-MySidebar.vue 
```

### good:
```
components/
|-TheHeading.vue 
|-TheSidebar.vue 
```

## 紧密耦合的组件名强烈推荐

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起


### bad:
```
components/
|-ShopList.vue 
|-ShopItem.vue 
|-ShopButton.vue 


components/
|-SearchSidebar.vue 
|-NavigationForSearchSidebar.vue 
```

### good:
```
components/
|-ShopList.vue 
|-ShopListItem.vue 
|-ShopListItemButton.vue 

components/
|-SearchSidebar.vue 
|-SearchSidebarNavigation.vue 
```

# 模板中的组件名大小写

## good
```
Vue.component('MyComponent', {
  // ...
})
import MyComponent from './MyComponent.vue'
export default {
  name: 'MyComponent',
  // ...
}
```

在template 中可以

```
好例子
<MyComponent/>

<my-component></my-component>

```

## Prop 名大小写强烈推荐
在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

### bad
```
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```


### good
```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```











