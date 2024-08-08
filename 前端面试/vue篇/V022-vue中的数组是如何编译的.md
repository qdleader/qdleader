# V022-vue中的数组是如何编译的

```js
const arrayProto = Array.prototype;

export const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [  "push",  "pop",  "shift",  "unshift",  "splice",  "sort",  "reverse"];
/** * Intercept mutating methods and emit events */
methodsToPatch.forEach(function(method) {  
    // cache original method  
    const original = arrayProto[method];
     def(arrayMethods, method, function mutator(...args) {    
        const result = original.apply(this, args);    
        const ob = this.__ob__;    
        let inserted;    
        switch (method) {      
            case "push":      
            case "unshift":       
             inserted = args;        
                break;      
            case "splice":        
            inserted = args.slice(2);        
            break;    
        }    
        if (inserted) ob.observeArray(inserted);    
        // notify change    
        ob.dep.notify();    
        return result;  
    });
});

/** * Observe a list of Array items. */
Observer.prototype.observeArray = function observeArray(items) {  
    for (var i = 0, l = items.length; i < l; i++) { observe(items[i]);  
}};

```

Vue 通过原型拦截的方式重写了数组的 7 个方法,首先获取到这个数组的ob,也就是它的 Observer 对象,如果有新的值,就调用 observeArray 对新的值进行监听,然后手动调用 notify,通知 render watcher,执行 update

