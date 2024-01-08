Sass：@mixin和@extend该如何选择


Mixins允许我们在项目中复用样式片段，可以传递参数这个特性使得它们非常灵活，强大。同样，我们也可以使用@extend命令让一个选择器继承其它选择器去复用样式片段。有的时候Mixin和extend好像做了同样的事情，那我们应该选择哪一个呢？

这个问题我会在本文的最后给出答案。在这之前，我先谈一谈关于@mixin指令的一些事情。

除了传递参数，我想让你知道如何给一个mixin传递CSS片段，了解这个片段的作用域。然后我会回到刚才的问题，将@extend和@mixin进行对比，帮助你了解他们的使用场景。

向Mixin传递样式片段
除了传递参数，也可以直接传递一个样式片段给Mixin。在Mixin中，添加@content;语句，然后传递的样式片段就会代替@content;出现在相应的位置。

@mixin button {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    @content;  
}

.button-green {  
    @include button {  
        background: green  
    }
}
.button-green中调用了Mixin。@include指令传递了一个将背景色设置为绿色的CSS片段，然后这个片段就会代替@content语句出现在mixin中相应的位置。

这段Sass被编译成：

.button-green {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    background: green;  
}
如果是设置成这样，也可以只放一个@content语句在mixin中，然后使用@include传递包括选择器在内的所有东西。

@mixin button {  
    @content;  
}

@include button {  
    .background-green {  
        font-size: 1em;  
        padding: 0.5em 1.0em;  
        text-decoration: none;  
        color: #fff;  
        background: green;  
    }
};
这段Sass编译出来的结果跟刚才一样

当然也可以像最开始那样，把一些样式片段放在mixin中，然后使用@include传递另外的样式。但是要时刻警惕，这些样式都需要一个选择器，下面的例子就是一个反面教材，它是不会工作的。

@mixin button {  
    font-size: 1em;  
    padding: 0.5em 1.0em;  
    text-decoration: none;  
    color: #fff;  
    @content;  
}

@include button {  
    background: green;  
};
这段代码，编译过程中会抛出错误，因为没有一个选择器去应用这些样式。

你可能想知道，何时使用@content而不是仅仅传递一个参数值。下面是Christian Reuter提供的一些使用场景。

嵌套（内联）的媒体查询
keyframes
上下文差异化
结合@at-root书写BEM
变量作用域 和 内容片段
当一个内容片段传进mixin的时候，它的作用域是在定义它的地方，而不是在mixin里面。也就是说，传进去的内容片段不能使用在mixin中定义的变量。

$color: green;

@mixin button($color: #fff) {  
    color: $color;  
    @content;  
    border: 1px solid $color;  
}

.button-green {  
    @include button {background: $color;}  
}
在这个例子中，在最外层和mixin的参数中都有定义变量$color。这两个变量分别有不同的色值。

在mixin中，$color变量的值是#fff。在传递给.button-green的内容片段中，$color将会使用在最外层定义的green值。

所以，上面的Sass会被编译成下面这段CSS

.button-green {  
    color: #fff;  
    background: green;  
    border: 1px solid #fff;  
}
用@include传递进的内容片段将会使用最外层变量的green值，然后代替@content出现在mixin，mixin中的其它地方，字体颜色，边框颜色都使用mixin中定义的#fff值。

应该使用 @mixin 还是 @extend
@mixin和@extend都能帮助你模块化代码，然后更加方便地在样式表中复用一些样式片段。

你可能会问，到底什么时候使用@mixin，什么时候使用@extend?

不急，我们先看看一些代码编译出来是什么样的。

.button {  
    background: green;  
}

.button-1 {  
    @extend .button;  
}

.button-2 {  
    @extend .button;  
}
使用@extend产生 DRY CSS风格的代码。

.button, 
.button-1, 
.button-2 {  
    background: green;  
}
注意，样式片段没有重复，这就是DRY。但是@mixin就不能产生DRY式的代码。

@mixin button {  
    background-color: green;  
}

.button-1 {  
    @include button;  
} 

.button-2 {  
    @include button;  
}
这段使用@mixin的Sass编译出来的样子：

.button {  
    background-color: green;  
}

.button-1 {  
    background-color: green;  
}

.button-2 {  
    background-color: green;  
}
可以看到，相同的样式片段在不同的选择器中重复多次，这也导致了编译出来的CSS不是DRY形式的。

这可能会暗示你应该一直使用@extend，但是@extend也有一些缺点。@extend会增加选择器之间的联系，然后把他们堆在一起。

被继承的选择器和继承别人的选择器可能会在样式表的不同位置，这就导致维护困难，放置顺序，或者需要差异化的一些问题

@extend命令不够灵活。不能向它传递参数，它原本是啥样就是啥样。这里还有一些在@media中使用@extend的限制，比如，不能横跨多个@media指令使用@extend。

还有一个重要的问题就是@extend增加了选择器之间的联系。当你正在为一些相关的元素设置样式，就拿一组按钮来说，使用@extend让他们共享样式看起来合情合理。但是如果这些被复用的样式片段并不仅仅局限于相关的元素，那么使用@mixin或许更好。

@mixin主要的优势就是它能够接受参数。如果想传递参数，你会很自然地选择@mixin而不是@extend。

如果没有任何参数，使用@extend来创造DRY应该是个不错的选择。不过要注意的是，使用gzip压缩过的文件可能会破坏代码中的DRY。

当文件很小的时候，编译完成代码中有重复的片段并不是一件坏事。不过如果源文件中存在这样的重复片段，会使得代码很难维护。使用@mixin会减少编译后文件中DRY式的代码。但是，如果gzip的算法对重复片段的优化工作做得比较好，那么编译后的代码不会变得肿胀。

@mixin会更强大，更灵活，它与gzip的组合跟@extend的主要优势相比，一点都不会逊色。

结束语
除了给一个@mixin传递参数之外，还能直接传递样式片段。你可能不会经常这么做，但是在一些使用场景中这么做更有意义

在大作数情况下@mixin会比@extend更好，但是它们俩都有自己的一席之地。当样式和选择器之间的关系在某些方面比较紧密的时候，使用@extend。除此之外，你可以使用@mixin在任何地方。