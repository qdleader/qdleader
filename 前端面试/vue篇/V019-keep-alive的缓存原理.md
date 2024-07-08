# keep-alive 的缓存原理

```js
export default {  
    name: "keep-alive", 
     abstract: true, // 抽象组件属性 ,它在组件实例建立父子关系的时候会被忽略,发生在 initLifecycle 的过程中  
    props: {    
        include: patternTypes, // 被缓存组件    
        exclude: patternTypes, // 不被缓存组件    
        max: [String, Number] // 指定缓存大小  
    }, 
    created() {   
          this.cache = Object.create(null); // 缓存 
          this.keys = []; // 缓存的VNode的键  
    },  
    destroyed() {    
        for (const key in this.cache) {      
             // 删除所有缓存     
             pruneCacheEntry(this.cache, key, this.keys);   
        }  
    }, 
    mounted() {    
        // 监听缓存/不缓存组件   
        this.$watch("include", val => {      
            pruneCache(this, name => matches(val, name));    
        });    
        this.$watch("exclude", val => {      
            pruneCache(this, name => !matches(val, name));    
        });
    }, 
    render() {   
        // 获取第一个子元素的 vnode   
        const slot = this.$slots.default;    
        const vnode: VNode = getFirstComponentChild(slot);    
        const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions;    
        if (componentOptions) {      
            // name不在inlcude中或者在exlude中 直接返回vnode      // check pattern      
            const name: ?string = getComponentName(componentOptions);      
            const { include, exclude } = this;     
            if (        
            // not included       
             (include && (!name || !matches(include, name))) ||        
            // excluded        
             (exclude && name && matches(exclude, name))      ) {      
                  return vnode;      
            }      
            const { cache, keys } = this;      // 获取键，优先获取组件的name字段，否则是组件的tag     
            const key: ?string =        
            vnode.key == null 
            ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : "")          
            : vnode.key;      
            // 命中缓存,直接从缓存拿vnode 的组件实例,并且重新调整了 key 的顺序放在了最后一个      
            if (cache[key]) {        
                vnode.componentInstance = cache[key].componentInstance;        
                // make current key freshest       
                remove(keys, key);        
                keys.push(key);      
            }     
            // 不命中缓存,把 vnode 设置进缓存      
            else { 
                cache[key] = vnode;        
                keys.push(key);        
            // prune oldest entry        
            // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个        
            if (this.max && keys.length > parseInt(this.max)) {        
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);        
            }      
        }      
        // keepAlive标记位      
        vnode.data.keepAlive = true;   
    }   
    return vnode || (slot && slot[0]);  
}};

```

## 原理

> 获取 keep-alive 包裹着的第一个子组件对象及其组件名
>根据设定的 include/exclude（如果有）进行条件匹配,决定是否缓存。不匹配,直接返回组件实例

>根据组件 ID 和 tag 生成缓存 Key,并在缓存对象中查找是否已缓存过该组件实例。如果存在,直接取出缓存值并更新该 key 在 this.keys 中的位置(更新 key 的位置是实现 LRU 置换策略的关键)

> 在 this.cache 对象中存储该组件实例并保存 key 值,之后检查缓存的实例数量是否超过 max 的设置值,超过则根据 LRU 置换策略删除最近最久未使用的实例（即是下标为 0 的那个 key）

> 最后组件实例的 keepAlive 属性设置为 true,这个在渲染和执行被包裹组件的钩子函数会用到


#### LRU 缓存淘汰算法
LRU（Least recently used）算法根据数据的历史访问记录来进行淘汰数据,其核心思想是“如果数据最近被访问过,那么将来被访问的几率也更高”。
LRU
keep-alive 的实现正是用到了 LRU 策略,将最近访问的组件 push 到 this.keys 最后面,this.keys[0]也就是最久没被访问的组件,当缓存实例超过 max 设置值,删除 this.keys[0]

