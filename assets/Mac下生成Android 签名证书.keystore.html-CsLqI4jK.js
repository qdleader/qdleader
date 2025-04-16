import{_ as n,c as a,a as e,o as p}from"./app-DFnxdJ0h.js";const t={};function o(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="mac下生成android-签名证书-keystore" tabindex="-1"><a class="header-anchor" href="#mac下生成android-签名证书-keystore"><span>Mac下生成Android 签名证书.keystore</span></a></h1><p>Mac下生成Android 签名证书.keystore</p><blockquote><p>1、打开终端，输入 cd /Library/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home/bin 回车 （每个人的Java安装不太一样，可以输入命令：/usr/libexec/java_home -V 去查看）</p></blockquote><blockquote><p>2、keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore yourapp.keystore</p></blockquote><p>这里直接安装到了 /Library/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home/bin 这个目录</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字</span>
<span class="line">test<span class="token punctuation">.</span>keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径</span>
<span class="line"><span class="token number">36500</span>是证书的有效期，表示<span class="token number">100</span>年有效期，单位天，建议时间设置长一点，避免证书过期</span>
<span class="line"></span>
<span class="line">Enter keystore password<span class="token operator">:</span>  <span class="token comment">//输入证书文件密码，输入完成回车  </span></span>
<span class="line">Re<span class="token operator">-</span>enter <span class="token keyword">new</span> <span class="token class-name">password</span><span class="token operator">:</span>   <span class="token comment">//再次输入证书文件密码，输入完成回车  </span></span>
<span class="line">What is your first and last name<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入名字和姓氏，输入完成回车  </span></span>
<span class="line">What is the name <span class="token keyword">of</span> your organizational unit<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入组织单位名称，输入完成回车  </span></span>
<span class="line">What is the name <span class="token keyword">of</span> your organization<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入组织名称，输入完成回车  </span></span>
<span class="line">What is the name <span class="token keyword">of</span> your City or Locality<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入城市或区域名称，输入完成回车  </span></span>
<span class="line">What is the name <span class="token keyword">of</span> your State or Province<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入省/市/自治区名称，输入完成回车  </span></span>
<span class="line">What is the two<span class="token operator">-</span>letter country code <span class="token keyword">for</span> <span class="token keyword">this</span> unit<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>Unknown<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//输入国家/地区代号（两个字母），中国为CN，输入完成回车  </span></span>
<span class="line">Is <span class="token constant">CN</span><span class="token operator">=</span><span class="token constant">XX</span><span class="token punctuation">,</span> <span class="token constant">OU</span><span class="token operator">=</span><span class="token constant">XX</span><span class="token punctuation">,</span> <span class="token constant">O</span><span class="token operator">=</span><span class="token constant">XX</span><span class="token punctuation">,</span> <span class="token constant">L</span><span class="token operator">=</span><span class="token constant">XX</span><span class="token punctuation">,</span> <span class="token constant">ST</span><span class="token operator">=</span><span class="token constant">XX</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token operator">=</span><span class="token constant">XX</span> correct<span class="token operator">?</span>  </span>
<span class="line">  <span class="token punctuation">[</span>no<span class="token punctuation">]</span><span class="token operator">:</span>  <span class="token comment">//确认上面输入的内容是否正确，输入y，回车  </span></span>
<span class="line"></span>
<span class="line">Enter key password <span class="token keyword">for</span> <span class="token operator">&lt;</span>testalias<span class="token operator">&gt;</span>  </span>
<span class="line">        <span class="token punctuation">(</span><span class="token constant">RETURN</span> <span class="token keyword">if</span> same <span class="token keyword">as</span> keystore password<span class="token punctuation">)</span><span class="token operator">:</span>  <span class="token comment">//确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看证书信息" tabindex="-1"><a class="header-anchor" href="#查看证书信息"><span>查看证书信息</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">keytool <span class="token operator">-</span>list <span class="token operator">-</span>v <span class="token operator">-</span>keystore yourapp<span class="token punctuation">.</span>keystore  </span>
<span class="line">Enter keystore password<span class="token operator">:</span> <span class="token comment">//输入密码，回车</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改密钥库类型" tabindex="-1"><a class="header-anchor" href="#更改密钥库类型"><span>更改密钥库类型</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">keytool -importkeystore -srckeystore yourapp.keystore -destkeystore yourapp.keystore -deststoretype JKS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以上步骤完成即可在uniapp中打包了。</p>`,11)]))}const i=n(t,[["render",o]]),r=JSON.parse('{"path":"/uniapp/Mac%E4%B8%8B%E7%94%9F%E6%88%90Android%20%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6.keystore.html","title":"Mac下生成Android 签名证书.keystore","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"uniapp/Mac下生成Android 签名证书.keystore.md"}');export{i as comp,r as data};
