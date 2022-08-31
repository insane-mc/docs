import{_ as i,o,c,a as e,b as s,e as t,d as a,r}from"../app.5b7a24ae.mjs";const d={},l=t('<br><p align="center"><img src="https://cdn.jsdelivr.net/gh/insane-mc/imc/assets/logo.png"></p><p align="center"><img src="https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat"><a href="https://github.com/insane-mc/imc/fork"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a><a href="https://www.npmjs.com/package/insane-mc"><img src="https://badge.fury.io/js/insane-mc.svg"></a><img src="https://tokei.rs/b1/github/insane-mc/imc"><img src="https://hits.dwyl.com/insane-mc/imc.svg?style=flat"></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><blockquote><p>This project is still under development, API interfaces may be unstable or not supported yet.</p></blockquote>',5),h={href:"https://imc.memset0.cn/",target:"_blank",rel:"noopener noreferrer"},p=a("\u4E2D\u6587\u6587\u6863 Chinese Docs"),u=t(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> insane-mc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="supported-features" tabindex="-1"><a class="header-anchor" href="#supported-features" aria-hidden="true">#</a> Supported Features</h2><h3 id="mc-lang-building" tabindex="-1"><a class="header-anchor" href="#mc-lang-building" aria-hidden="true">#</a> MC Lang (Building)</h3><p>Have you ever wanted make your code reusable? Have you ever dreamed of declaring <code>mcfunction</code>s with parameters? Have you ever been confused by the messy directories of Minecraft Datapacks?</p><p>Now introducing a new scripting language - IMC Lang, here is an example.</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>def tell($a) {
	tellraw @s {&quot;text&quot;: $a}
}
@load {
	$tell(&quot;Hello,&quot;)
	$tell(&quot;World!&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What this code snippet does is make your datapack output <code>Hello, World!</code> each time it has loaded.</p>`,8),m=a("See "),g={href:"https://imc.memset0.cn/syntax/",target:"_blank",rel:"noopener noreferrer"},v=a("API Document"),b=a(" for more syntax."),f=t('<h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h3><p>To better organize your mcfunction and JSON files, we provide feature context, that can help you pass namespace, directory, and other data via chaining calls.</p><p>For example, when you call <code>ctx.namespace(&#39;xxx&#39;)</code> that <code>ctx</code> is a context, it will return a new context with namespace set to <code>xxx</code>. When you declare functions or recipes, for example, using the returned context, they will be automatically created in target namespace.</p><p>We also implement a event system depended on context, to make you set callback functions or load/loop commands easily.</p><h3 id="recipe" tabindex="-1"><a class="header-anchor" href="#recipe" aria-hidden="true">#</a> Recipe</h3><p>Enjoy better custom crafting! You can add recipes whose product contains NBT data, and even set the number of times limit for it. We will automatically convert it to datapacks using advancement tricks.</p><p>We could even pack all your recipes into a recipe book, then you could simply use commands to give it to other players.</p><h3 id="advancement" tabindex="-1"><a class="header-anchor" href="#advancement" aria-hidden="true">#</a> Advancement</h3><p>The advancement feature is basically the same as it in vanilla datapacks, except that it&#39;s easier to create callbacks via our event system.</p><p>Of course, this is because our project is under development and we will bring more interesting features soon.</p>',10);function x(y,_){const n=r("ExternalLinkIcon");return o(),c("div",null,[l,e("p",null,[e("a",h,[p,s(n)])]),u,e("p",null,[m,e("a",g,[v,s(n)]),b]),f])}const w=i(d,[["render",x],["__file","index.html.vue"]]);export{w as default};