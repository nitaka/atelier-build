(function(){var e={1458:function(){},6745:function(e,t,i){"use strict";var r=i(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("LoaderPages"),t("HeaderPages"),t("router-view")],1)},s=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("header",{staticClass:"header"},[t("nav",{attrs:{id:"navbar"}},[t("div",{staticClass:"nav-brand"},[t("img",{staticClass:"photo-profil",attrs:{src:i(975),alt:"Ma photo de cv"}}),t("i",{staticClass:"fa fa-navicon",on:{click:function(t){return e.display()}}})]),t("ul",{staticClass:"bar-items",class:{hide:!e.show}},[e._m(0)])])])])},o=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"menu"}},[t("li",[t("a",{attrs:{href:"/"}},[e._v("Accueil")])]),t("li",[t("a",{attrs:{href:"#presentation"}},[e._v("Présentation")])]),t("li",[t("a",{attrs:{href:"#programme"}},[e._v("Notre Programme")])]),t("li",[t("a",{attrs:{href:"#horaires"}},[e._v("Horaires")])])])}],l={name:"HeaderPages",data(){return{show:!1}},methods:{display(){this.show=!this.show}}},c=l,u=i(1001),d=(0,u.Z)(c,n,o,!1,null,"abde08a0",null),v=d.exports,f=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"loader"},[t("div",{staticClass:"mot"},[t("div",{staticClass:"lettre"},[e._v("L")]),t("div",{staticClass:"lettre"},[e._v("'")]),t("div",{staticClass:"lettre"},[e._v("A")]),t("div",{staticClass:"lettre"},[e._v("T")]),t("div",{staticClass:"lettre"},[e._v("E")]),t("div",{staticClass:"lettre"},[e._v("L")]),t("div",{staticClass:"lettre"},[e._v("I")]),t("div",{staticClass:"lettre"},[e._v("E")]),t("div",{staticClass:"lettre"},[e._v("R")]),t("div",{staticClass:"lettre"},[e._v(".")])]),t("div",{staticClass:"ball"})])}],m={name:"LoaderPages",data(){return{}}},h=m,_=(0,u.Z)(h,f,p,!1,null,"34b4ba92",null),b=_.exports,g={components:{HeaderPages:v,LoaderPages:b},data(){return{}},methods:{}},C=g,w=(0,u.Z)(C,a,s,!1,null,null,null),y=w.exports,A=i(2631),P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("CarouselPages"),e._m(0),e._m(1),e._m(2),t("FooterPages")],1)},x=[function(){var e=this,t=e._self._c;return t("section",{staticClass:"presentation reveal",attrs:{id:"presentation"}},[t("article",{staticClass:"presentation__text"},[t("h1",[e._v("Nous sommes L'atelier! 🙂")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatem maiores perspiciatis cum? Nisi eos distinctio maiores, earum corrupti repellendus iste! Nam maxime dolores voluptas, cum quas sed pariatur similique?")])]),t("aside",{staticClass:"presentation__aside"},[t("h2",[e._v("Coordonner")]),t("p",[t("i",{staticClass:"fa-solid fa-phone"}),e._v(" "),t("span",[e._v("Telephone:")]),e._v(" 01.39.00.00.00"),t("br"),t("i",{staticClass:"fa-solid fa-envelope"}),e._v(" "),t("span",[e._v("Email:")]),e._v(" nurse@gmail.com"),t("br"),t("i",{staticClass:"fa-solid fa-map-pin"}),e._v(" "),t("span",[e._v("Address:")]),e._v(" 20 rue de Rome"),t("br"),e._v(" Maisons-Laffritte 78600 ")])])])},function(){var e=this,t=e._self._c;return t("section",{staticClass:"programme reveal",attrs:{id:"programme"}},[t("article",{staticClass:"programme__text"},[t("h2",[e._v("Notre Programme")]),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias autem consequuntur delectus eligendi reiciendis ex quam dolore! Aliquam non, provident earum vitae voluptate delectus beatae animi? Similique, vitae suscipit.")])])])},function(){var e=this,t=e._self._c;return t("section",{staticClass:"horaire reveal",attrs:{id:"horaires"}},[t("article",{staticClass:"horaire__bloc"},[t("h2",[e._v("Nos Horaires")]),t("div",{staticClass:"horaire__text"},[t("div",{staticClass:"horaire--responsive"},[t("label",{attrs:{for:"horaire-select"}},[e._v("Horaire de l'atelier:")]),t("br"),t("select",{attrs:{name:"horaire",id:"horaire-select"}},[t("option",{attrs:{value:""}},[e._v("--Horaire d'ouverture--")]),t("option",{attrs:{value:"lundi"}},[e._v("Lundi : Fermé")]),t("option",{attrs:{value:"mardi"}},[e._v("Mardi : 8h-20h")]),t("option",{attrs:{value:"mercredi"}},[e._v("Mercredi : 8h-20h")]),t("option",{attrs:{value:"jeudi"}},[e._v("Jeudi : 8h-20h")]),t("option",{attrs:{value:"vendredi"}},[e._v("Vendredi : 8h-20h")]),t("option",{attrs:{value:"samedi"}},[e._v("Samedi : 8h-20h")]),t("option",{attrs:{value:"dimanche"}},[e._v("Dimanche : 8h-16h")])])]),t("div",[t("ul",[t("li",[e._v("Lundi : Fermé")]),t("li",[e._v("Mardi : 8h-20h")]),t("li",[e._v("Mercredi : 8h-20h")]),t("li",[e._v("Jeudi : 8h-20h")]),t("li",[e._v("Vendredi : 8h-20h")]),t("li",[e._v("Samedi : 8h-20h")]),t("li",[e._v("Dimanche : 8h-16h")])])])])])])}],O=function(){var e=this,t=e._self._c;return t("vueper-slides",{attrs:{autoplay:""}},e._l(e.slides,(function(e,r){return t("vueper-slide",{key:r,attrs:{title:e.title,content:e.content,image:e.image}},[t("img",{attrs:{src:i(1097),alt:""}})])})),1)},L=[],k=i(6782),N={data(){return{pauseOnHover:!0,autoPlaying:!0,internalAutoPlaying:!0,slides:[{id:"slide-1",title:'<b style="font-size: 1.3em;color: yellow">#1</b>',content:'<span style="color: #5D868A; font-weight: bold;font-size: 1.3em">L\'Atelier</span>',image:i(1097)},{id:"slide-2",title:'<b style="font-size: 1.3em;color: yellow">#2</b>',content:'<span style="color: #5D868A; font-weight: bold;font-size: 1.3em">L\'Atelier</span>',image:i(8601)},{id:"slide-3",title:'<b style="font-size: 1.3em;color: yellow">#3</b>',content:'<span style="color: #5D868A; font-weight: bold;font-size: 1.3em">L\'Atelier</span>',image:i(459)},{id:"slide-4",title:'<b style="font-size: 1.3em;color: yellow">#4</b>',content:'<span style="color: #5D868A; font-weight: bold;font-size: 1.3em">L\'Atelier</span>',image:i(6974)},{id:"slide-5",title:'<b style="font-size: 1.3em;color: yellow">#5</b>',content:'<span style="color: #5D868A; font-weight: bold;font-size: 1.3em">L\'Atelier</span>',image:i(2736)}]}},components:{VueperSlides:k.VueperSlides,VueperSlide:k.VueperSlide}},S=N,j=(0,u.Z)(S,O,L,!1,null,"07db0c1e",null),q=j.exports,F=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},M=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("footer",[t("div",{staticClass:"recommendation"},[t("h4",[e._v("Nos recommandation:")]),t("ul",[t("li",[e._v("Produit en vente sur place")]),t("li",[e._v("Site de conseils")])])]),t("div",{staticClass:"partenaire"},[t("h4",[e._v("Partenaire locaux:")]),t("ul",[t("li",[e._v("O delice")]),t("li",[e._v("Laffitte Epicerie")])])]),t("div",{staticClass:"partage"},[t("h4",[e._v("Partage")]),t("ul",[t("li",[t("a",{attrs:{href:"http://www.facebook.com/sharer.php?u=http://localhost:8080/#/&t=Partager sur facebook"}},[t("i",{staticClass:"fa-brands fa-square-facebook"})])]),t("li",[t("a",{attrs:{href:"http://twitter.com/share?url=http://localhost:8080/#&text=Partager sur tweeter"}},[t("i",{staticClass:"fa-brands fa-square-twitter"})])]),t("li",[t("a",{attrs:{href:"https://www.instagram.com/share?url=http://localhost:8080/#&text=Partager sur instagram"}},[t("i",{staticClass:"fa-brands fa-square-instagram"})])])])])])}],T=i(1458),B=i.n(T),Z=B(),E=(0,u.Z)(Z,F,M,!1,null,"257a7e6a",null),V=E.exports,z={name:"HomeView",components:{CarouselPages:q,FooterPages:V},mounted(){const e=.4,t={root:null,rootMargin:"0px",threshold:e},i=function(t){t.forEach((function(t){t.intersectionRatio>e&&t.target.classList.add("reveal-visibility")}))},r=new IntersectionObserver(i,t);document.querySelectorAll('[class*="reveal"]').forEach((function(e){r.observe(e)}))}},H=z,J=(0,u.Z)(H,P,x,!1,null,null,null),D=J.exports;r.ZP.use(A.ZP);const R=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,5399))}],G=new A.ZP({routes:R});var K=G;r.ZP.config.productionTip=!1,new r.ZP({router:K,render:e=>e(y)}).$mount("#app")},975:function(e){"use strict";e.exports="data:image/webp;base64,UklGRqgBAABXRUJQVlA4IJwBAACwCwCdASpOAGoAPpFCnUilpCMhLNyIYLASCWUAVx/6s1Y80HgxVXGF4JDNJfocKgBxTBb7dUOA+3xXpkTDJ41F3CbotGsov/9HQn/MvlpPpyv2uK08aOVOQgNdNd/AF0ZySNXT7QAA/vq2mzcTFUiJjy4f2b7HxeN+Q8JxZ9Z4p9WJ4zN61Qjco9h+MJbcyODsKhDZ1XbQAdTizu7bGJrRuisWoBjb8O6c08KTLAiX9np/bEBtBD77yHccC69730hkCwTvw9+8q+r6qwNjSPmoB2rrCL3MtLA8lqSj1WeBcG35xopKkR0AfqrVcMX3gKU+L8RaFmImGxBUWBdN/IaEofPaOpDK/CvtC6n/tYGo2ncud3c7VLqYeWBS86OdSUmzFI0Hk6gQILR5///VUEN7ZGAKW2U04eNOTjj/acP56G0zhVFROnfRSFKWKnXCFM6mKGGfvEitKlRJ7v5ZYJnuBDhYYcddPt+yRmghgG1OY09WsBAkt6tmmePtdNOVWgsbl2q4Uhnmg9iFsM1FYtMBha5YHhJll/2gdgAA"},2736:function(e,t,i){"use strict";e.exports=i.p+"img/class-4506654-1920.2de35541.webp"},1097:function(e,t,i){"use strict";e.exports=i.p+"img/cooking-4283413-1920.3a9aded7.webp"},8601:function(e,t,i){"use strict";e.exports=i.p+"img/hands-1283149-1920.98009a5e.webp"},6974:function(e,t,i){"use strict";e.exports=i.p+"img/sleeping-child-head-1890567-1920.aa63428d.webp"},459:function(e,t,i){"use strict";e.exports=i.p+"img/to-paint-3913465-1920.53bb7d31.webp"}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,a,s){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],s=e[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/about.4812335c.js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="atelier:";i.l=function(r,a,s,n){if(e[r])e[r].push(a);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",t+s),o.src=r),e[r]=[a];var v=function(t,i){o.onerror=o.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(i)})),t)return t(i)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=v.bind(null,o.onerror),o.onload=v.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={143:0};i.f.j=function(t,r){var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(i,r){a=e[t]=[i,r]}));r.push(a[2]=s);var n=i.p+i.u(t),o=new Error,l=function(r){if(i.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,a[1](o)}};i.l(n,l,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,n=r[0],o=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var u=l(i)}for(t&&t(r);c<n.length;c++)s=n[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self["webpackChunkatelier"]=self["webpackChunkatelier"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(6745)}));r=i.O(r)})();
//# sourceMappingURL=app.e53a3ca7.js.map