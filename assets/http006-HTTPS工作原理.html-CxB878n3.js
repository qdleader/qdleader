import{_ as n,c as e,a,o as l}from"./app-DFnxdJ0h.js";const i={};function c(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="https工作原理" tabindex="-1"><a class="header-anchor" href="#https工作原理"><span>HTTPS工作原理</span></a></h1><blockquote><p>一、首先HTTP请求服务端生成证书，客户端对证书的有效期、合法性、域名是否与请求的域名一致、证书的公钥（RSA加密）等进行校验；<br> 二、客户端如果校验通过后，就根据证书的公钥的有效， 生成随机数，随机数使用公钥进行加密（RSA加密）；<br> 三、消息体产生的后，对它的摘要进行MD5（或者SHA1）算法加密，此时就得到了RSA签名；<br> 四、发送给服务端，此时只有服务端（RSA私钥）能解密。<br> 五、解密得到的随机数，再用AES加密，作为密钥（此时的密钥只有客户端和服务端知道）<br></p></blockquote><h2 id="拓展-关于加密方面" tabindex="-1"><a class="header-anchor" href="#拓展-关于加密方面"><span>拓展(关于加密方面)</span></a></h2><blockquote><p>加密方式</p><blockquote><p>加密算法一般分为对称加密与非对称加密。</p></blockquote></blockquote><blockquote><p>对称加密</p><blockquote><p>客户端与服务器使用相同的密钥对消息进行加密</p></blockquote></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">优点：</span>
<span class="line"></span>
<span class="line">加密强度高，很难被破解</span>
<span class="line">计算量小，仅为非对称加密计算量的 0.1%</span>
<span class="line">缺点：</span>
<span class="line"></span>
<span class="line">无法安全的生成和管理密钥</span>
<span class="line">服务器管理大量客户端密钥复杂</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>非对称加密</p><blockquote><p>非对称指加密与解密的密钥为两种密钥。服务器提供公钥，客户端通过公钥对消息进行加密，并由服务器端的私钥对密文进行解密。</p></blockquote></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">优点：安全</span>
<span class="line"></span>
<span class="line">缺点</span>
<span class="line"></span>
<span class="line">性能低下，CPU 计算资源消耗巨大，一次完全的 TLS 握手，密钥交换时的非对称加密解密占了整个握手过程的 90% 以上。而对称加密的计算量只相当于非对称加密的 0.1%，因此如果对应用层使用非对称加密，性能开销过大，无法承受。</span>
<span class="line">非对称加密对加密内容长度有限制，不能超过公钥的长度。比如现在常用的公钥长度是 2048 位，意味着被加密消息内容不能超过 256 字节。</span>
<span class="line">HTTPS 下的加密</span>
<span class="line">HTTPS一般使用的加密与HASH算法如下：</span>
<span class="line"></span>
<span class="line">非对称加密算法：RSA，DSA/DSS</span>
<span class="line">对称加密算法：AES，RC4，3DES</span>
<span class="line">HASH算法：MD5，SHA1，SHA256</span>
<span class="line">其中非对称加密算法用于在握手过程中加密生成的密码，对称加密算法用于对真正传输的数据进行加密，而HASH算法用于验证数据的完整性。由于浏览器生成的密码是整个数据加密的关键，因此在传输的时候使用了非对称加密算法对其加密。非对称加密算法会生成公钥和私钥，公钥只能用于加密数据，因此可以随意传输，而网站的私钥用于对数据进行解密，所以网站都会非常小心的保管自己的私钥，防止泄漏。</span>
<span class="line">TLS握手过程中如果有任何错误，都会使加密连接断开，从而阻止了隐私信息的传输。正是由于HTTPS非常的安全，攻击者无法从中找到下手的地方，于是更多的是采用了假证书的手法来欺骗客户端，从而获取明文的信息，但是这些手段都可以被识别出来</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const t=n(i,[["render",c]]),r=JSON.parse('{"path":"/http/http006-HTTPS%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.html","title":"HTTPS工作原理","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"http/http006-HTTPS工作原理.md"}');export{t as comp,r as data};
