(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],p=0,h=[];p<o.length;p++)i=o[p],r[i]&&h.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"017c":function(t,e,s){},2856:function(t,e,s){},"3de7":function(t,e,s){"use strict";var a=s("017c"),r=s.n(a);r.a},"40b1":function(t,e,s){},5205:function(t,e,s){"use strict";var a=s("8590"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"page"},[s("router-view",{staticClass:"page__search page__item"}),s("router-view",{staticClass:"page__player page__item",attrs:{name:"player"}}),s("router-view",{staticClass:"page__history page__item",attrs:{name:"history"}})],1)])},n=[],i=(s("5c0b"),s("2877")),o={},l=Object(i["a"])(o,r,n,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("form",{staticClass:"search__form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.searchTrack(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"search__input",attrs:{placeholder:"Search...",spellcheck:"false",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("button",{staticClass:"search__submit",attrs:{type:"submit"}},[t._v("\n      Go\n    ")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.notFound,expression:"notFound"}],staticClass:"search__not-found"},[t._v("\n    Not found\n  ")]),s("ol",{staticClass:"search__results",class:{thumbnails:t.thumbnails}},t._l(t.pageResults,function(e,a){return s("SearchResult",{key:e.id,attrs:{index:a,page:t.page,"search-result":e}})})),s("div",{staticClass:"search__bottom-buttons"},[t.page>0?s("svg",{staticClass:"search__prev search__bottom-button search__nav",staticStyle:{"enable-background":"new 0 0 297.5 297.5"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297.5 297.5","xml:space":"preserve"},on:{click:t.prevPage}},[s("polygon",{attrs:{points:"0,149.2 149.5,264.3 149.5,197.3 297.5,197.3 297.5,98.3 149.5,98.3 149.5,33.3 "}})]):t._e(),t.lastPage?t._e():s("svg",{staticClass:"search__next search__bottom-button search__nav",staticStyle:{"enable-background":"new 0 0 297.5 297.5"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 297.5 297.5","xml:space":"preserve"},on:{click:t.nextPage}},[s("polygon",{attrs:{points:"297.5,148.25 148,33.25 148,100.25 0,100.25 0,199.25 148,199.25 148,264.25 "}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.pageResults.length>0,expression:"pageResults.length > 0"}],staticClass:"search__display-pref"},[s("svg",{staticClass:"search__display-list search__bottom-button",staticStyle:{"enable-background":"new 0 0 22.3 17.5"},attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 22.3 17.5","xml:space":"preserve"},on:{click:t.changeDisplayPref}},[s("g",{attrs:{id:"g4",transform:"matrix(1,0,0,-1,30.372881,1373.7966)"}},[s("path",{attrs:{id:"path6",d:"M-27.2,1359.1v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30\n              c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1\n              S-27.2,1359.2-27.2,1359.1z M-27.2,1363.9v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1\n              c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1364-27.2,1363.9z\n              M-27.2,1368.6v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v2.4\n              c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1368.7-27.2,1368.6z M-8.1,1359.1v-2.4\n              c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1h16.7\n              c0.1,0,0.2,0,0.3-0.1S-8.1,1359.2-8.1,1359.1z M-27.2,1373.4v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1\n              c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1373.5-27.2,1373.4z\n              M-8.1,1363.9v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3\n              s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1364-8.1,1363.9z M-8.1,1368.6v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7\n              c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1368.7-8.1,1368.6\n              z M-8.1,1373.4v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3\n              s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1373.5-8.1,1373.4z"}})])]),s("div",{staticClass:"search__display-thumbnails search__bottom-button",on:{click:t.changeDisplayPref}})])])])},h=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"search-result",class:{thumbnails__item:t.thumbnails}},[s("a",{staticClass:"search-result__link",class:{thumbnails__link:t.thumbnails},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.chooseTrack(e)}}},[s("h3",{staticClass:"search-result__title",class:{thumbnails__title:t.thumbnails}},[s("span",{staticClass:"search-result__index",class:{invisible:t.thumbnails}},[t._v(t._s(t.itemIndex)+".")]),t._v(" "+t._s(t.searchResult.title)+"\n    ")]),t.thumbnails?s("img",{staticClass:"thumbnails__img",attrs:{src:t.image,alt:"result thumbnail"}}):t._e()])])},f=[],_={name:"SearchResult",props:["searchResult","index","page"],computed:{thumbnails:function(){return this.$store.state.displayThumbnails},image:function(){return this.searchResult.artwork_url?this.searchResult.artwork_url:this.$store.state.default_img},itemIndex:function(){return this.page*this.$store.state.page_size+this.index+1}},methods:{chooseTrack:function(){this.$store.commit("updatePlayer",this.searchResult)}}},d=_,g=(s("a219"),Object(i["a"])(d,m,f,!1,null,null,null));g.options.__file="SearchResult.vue";var v=g.exports,y={name:"Search",components:{SearchResult:v},data:function(){return{page:0}},created:function(){this.$store.commit("initializeDisplayThumbnails")},computed:{query:{get:function(){return this.$store.state.query},set:function(t){this.$store.commit("updateQuery",{value:t})}},results:function(){return this.$store.state.results},nextHref:function(){return this.$store.state.next_href},pageResults:function(){return this.$store.getters.pageResults(this.page)},lastPage:function(){return this.page==this.$store.getters.allPages},thumbnails:function(){return this.$store.state.displayThumbnails},notFound:function(){return this.$store.state.notFound}},methods:{searchTrack:function(){this.query&&this.$store.dispatch("searchTrack")},nextPage:function(){var t=this;this.page+1==this.$store.getters.fullPages&&this.$store.state.next_href?this.$store.dispatch("nextPage").then(function(){return t.page++}):this.page++},prevPage:function(){this.page>0&&this.page--},changeDisplayPref:function(){this.$store.commit("updateDisplayThumbnails")}}},w=y,b=(s("3de7"),Object(i["a"])(w,p,h,!1,null,null,null));b.options.__file="Search.vue";var x=b.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player"},[s("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:t.enter}},[t.animationStageOne?s("div",{key:"title",staticClass:"player__title-wrapper"},[s("h2",{staticClass:"player__track-title"},[t._v(t._s(t.trackTitle))])]):s("div",{key:"image",staticClass:"player__content"},[s("div",{staticClass:"player__image-wrapper",class:{"player__image-wrapper--inactive":t.paused},on:{click:function(e){t.showWidget=!0}}},[s("img",{staticClass:"player__image",attrs:{src:t.trackImage,alt:"track image"}})]),s("div",{staticClass:"player__widget",class:{"widget-visible":t.showWidget}},[s("div",{staticClass:"player__buttons"},[t.paused?t._e():s("button",{staticClass:"player__pause player__button",on:{click:function(e){t.player.pause()}}},[t._v("❙❙")]),t.paused?s("button",{staticClass:"player__play player__button",on:{click:function(e){t.player.play()}}},[t._v("►")]):t._e()]),s("div",{staticClass:"player__progress progress"},[s("div",{staticClass:"progress__bar",style:{width:t.progress}}),s("div",{staticClass:"player__timing"},[s("span",{staticClass:"player__current-time",domProps:{innerHTML:t._s(t.currentTime)}}),s("span",{staticClass:"player__duration",domProps:{innerHTML:t._s(t.duration)}})]),s("input",{staticClass:"progress__slider",attrs:{type:"range",max:t.totalDuration,min:"0"},on:{input:function(e){t.setTime(e)}}})]),s("div",{staticClass:"player__button player__volume",on:{mousedown:function(e){if(e.target!==e.currentTarget)return null;e.preventDefault(),t.showVolume=!t.showVolume}}},[s("svg",{staticClass:"player__volume-icon",staticStyle:{"enable-background":"new 0 0 31.2 28.3"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 31.2 28.3","xml:space":"preserve"}},[s("g",[s("g",{attrs:{id:"c75_volume"}},[s("path",{staticClass:"st0",attrs:{d:"M4.4,9.3H0V19h4.4l8.2,6.1c0,0,1.5,1.3,1.5,0c0-1.3,0-20.9,0-22.1c0-1-1.3,0-1.3,0L4.4,9.3z"}}),s("path",{staticClass:"st0",attrs:{d:"M18.8,7.4c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6c1.4,1.4,2.1,3.3,2.1,5.2c0,1.9-0.7,3.7-2.1,5.2\n                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c1.9-1.9,2.8-4.3,2.8-6.7C21.6,11.7,20.7,9.3,18.8,7.4z"}}),s("path",{staticClass:"st0",attrs:{d:"M21.8,3.9c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6c2.4,2.4,3.6,5.5,3.6,8.7c0,3.2-1.2,6.3-3.6,8.7\n                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c2.8-2.8,4.2-6.6,4.2-10.3C26.1,10.4,24.6,6.7,21.8,3.9z"}}),s("path",{staticClass:"st0",attrs:{d:"M25.5,0.3c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6C27.3,5.3,29,9.7,29,14.1c0,4.4-1.7,8.9-5.1,12.3\n                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c3.8-3.8,5.7-8.8,5.7-13.8C31.2,9.1,29.3,4.1,25.5,0.3z"}})])])]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.volume,expression:"volume",modifiers:{number:!0}}],ref:"volume",staticClass:"player__volume-slider",class:{visible:t.showVolume},attrs:{type:"range",min:"1",max:"10"},domProps:{value:t.volume},on:{input:t.changeVolume,blur:[function(e){t.showVolume=!1},function(e){t.$forceUpdate()}],__r:function(e){t.volume=t._n(e.target.value)}}})])])])])],1)},k=[],S=(s("a481"),s("6762"),s("2fdb"),"ggX0UomnLs0VmW7qZnCzw"),P=S,T={name:"Player",components:{},data:function(){return{widget:{},animationStageOne:!1,showWidget:!1,showVolume:!1,player:{play:function(){},pause:function(){}},totalDuration:"",timeNow:0,paused:!0,volume:10}},mounted:function(){},computed:{streamURL:function(){return"".concat(this.$store.state.playerData.stream_url,"?client_id=").concat(P)},trackImage:function(){return this.$store.state.playerData.artwork_url.includes("large")?this.$store.state.playerData.artwork_url.replace("large","t300x300"):this.$store.state.playerData.artwork_url},trackTitle:function(){return this.$store.state.playerData.title},duration:function(){return this.totalDuration?this._parseTime(this.totalDuration):""},currentTime:function(){return this.timeNow?this._parseTime(this.timeNow)+"<span class='player__separator'>/</span>":""},progress:function(){return this.timeNow?parseInt(this.timeNow/this.totalDuration*100)+"%":"0%"}},watch:{showWidget:function(t){if(t&&this.streamURL){if(this.player.src)this.player.src=this.streamURL,this.player.load();else{var e=new Audio(this.streamURL);this.player=e}this.player.addEventListener("loadeddata",this._playerHandler)}else this.player.pause()},trackTitle:function(){this.animationStageOne=!0,this.showWidget=!1},showVolume:function(t){var e=this;t&&this.$nextTick(function(){return e.$refs.volume.focus()})}},methods:{enter:function(t){var e=this;t.classList.contains("player__title-wrapper")&&setTimeout(function(){e.animationStageOne=!1},200)},changeVolume:function(){this.player.volume=this.volume/10},hideVolume:function(t){console.log(t.target),this.showVolume=!1},setTime:function(t){this.player.currentTime=t.target.value},_playerHandler:function(){var t=this;this.player.readyState>=2&&(this.player.addEventListener("pause",function(){t.paused=!0}),this.player.addEventListener("play",function(){t.paused=!1}),this.player.play().then(function(){t.player.addEventListener("timeupdate",function(){t.timeNow=parseInt(t.player.currentTime)}),t.totalDuration=parseInt(t.player.duration)}))},_parseTime:function(t){var e=Math.floor(t/60),s=Math.floor(e/60);e%=60;var a=t%60,r=[("0"+s).slice(-2),("0"+e).slice(-2),("0"+a).slice(-2)].join("<span class='player__colons'>:</span>");return r}}},$=T,O=(s("5205"),Object(i["a"])($,C,k,!1,null,null,null));O.options.__file="Player.vue";var R=O.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[s("h1",{staticClass:"history__header"},[t._v("Recent searches")]),s("ul",{staticClass:"history__list"},t._l(t.searchHistory,function(e){return s("li",{staticClass:"history__item",on:{click:function(s){t.startSearch(e)}}},[t._v(t._s(e))])}))])},H=[],N={name:"History",components:{},created:function(){this.$store.commit("initializeHistory")},computed:{searchHistory:function(){return this.$store.state.history}},methods:{startSearch:function(t){this.$store.commit("updateQuery",{value:t}),this.$store.dispatch("searchTrack")}}},M=N,z=(s("6b11"),Object(i["a"])(M,D,H,!1,null,null,null));z.options.__file="History.vue";var j=z.exports;a["a"].use(u["a"]);var q=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",components:{default:x,player:R,history:j}}]}),L=s("8afe"),V=s("2f62"),I=s("d990");I.initialize({client_id:P});var E=I;a["a"].use(V["a"]);var F=6,U=5,J=50,W=new V["a"].Store({state:{query:"",results:[],page:1,next_href:"",history:[],playerData:{title:"",stream_url:"",artwork_url:"./soundcloud-logo.jpg"},displayThumbnails:!1,default_img:"./soundcloud-logo.jpg",page_size:6,notFound:!1},mutations:{updateQuery:function(t,e){t.query=e.value},updateResults:function(t,e){t.results=e.collection},uppendResults:function(t,e){var s;(s=t.results).push.apply(s,Object(L["a"])(e.collection))},updateNextHref:function(t,e){t.next_href=e.next_href},updatePage:function(t){t.page++},updatePlayer:function(t,e){var s=e.title,a=e.stream_url,r=e.artwork_url;r=r||t.default_img,t.playerData={title:s,stream_url:a,artwork_url:r}},updateDisplayThumbnails:function(t){t.displayThumbnails=!t.displayThumbnails,localStorage.setItem("display-pref",JSON.stringify(t.displayThumbnails))},clearPageCount:function(t){t.page=1},updateHistory:function(t){-1==t.history.indexOf(t.query)&&(t.history.unshift(t.query),t.history.length>U&&t.history.pop(),localStorage.setItem("history",JSON.stringify(t.history)))},updateNotFound:function(t,e){t.notFound=e.value},initializeHistory:function(t){t.history=JSON.parse(localStorage.getItem("history"))||[]},initializeDisplayThumbnails:function(t){t.displayThumbnails=JSON.parse(localStorage.getItem("display-pref"))||!1}},actions:{searchTrack:function(t){E.get("/tracks",{q:t.state.query,filter:"public",limit:J,linked_partitioning:1}).then(function(e){t.commit("updateResults",{collection:e.collection}),t.commit("updateHistory"),t.commit("clearPageCount"),t.state.results.length?t.commit("updateNotFound",{value:!1}):t.commit("updateNotFound",{value:!0}),e.next_href?(t.commit("updateNextHref",{next_href:e.next_href}),t.commit("updatePage")):(t.commit("updateNextHref",{next_href:""}),t.commit("clearPageCount"))})},nextPage:function(t){return t.commit("updatePage"),E.get("/tracks",{q:t.state.query,limit:J,linked_partitioning:1,offset:t.state.page*J}).then(function(e){t.commit("uppendResults",{collection:e.collection}),e.next_href?t.commit("updateNextHref",{next_href:e.next_href}):t.commit("updateNextHref",{next_href:""})})}},getters:{fullPages:function(t){return Math.floor(t.results.length/F)},allPages:function(t){return Math.ceil(t.results.length/F)},pageResults:function(t,e){return function(s){var a=6*s,r=6*(s+1);return s==e.allPages&&e.fullPages<e.allPages?t.results.slice(a):t.results.slice(a,r)}}}});a["a"].config.productionTip=!1,new a["a"]({router:q,store:W,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("2856"),r=s.n(a);r.a},"6b11":function(t,e,s){"use strict";var a=s("40b1"),r=s.n(a);r.a},8590:function(t,e,s){},a219:function(t,e,s){"use strict";var a=s("f604"),r=s.n(a);r.a},f604:function(t,e,s){}});
//# sourceMappingURL=app.3498c211.js.map