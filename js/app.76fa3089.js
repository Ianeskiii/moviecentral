(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/moviecentral/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034b":function(t,e,a){},3921:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABoklEQVR42u3VSyhEURzH8TOUDVZYiWYhShaTZyyUBbKQleRVk0LSxMZrY2HjtaFJQkl5JStZCAtlQZ5ZSJHFNLLCChvl8T3do8bh3rkzk4Vy6tOd7pl7fp1zz/0fh/jl5vgPCDcgC3VIxwuOMI971Z+IRuQhBldYwnmwgCiMoAGzOEEsSlGOVvW/KWxiG8/IQRMW0I03swA5eBGq8KD15WNd/a7EodafgDXsqZBvAWnYRybuTJauTF23TPqTcIFCXOsBvUiGJ+ibs25e3GJID5gWxsuciTCgWRgvv0UP8KppjUcY0CGM5fboAW0ogDvCgDkcYFIPSMUpnHgKc/A4+JANvx4g2wou0R9mwAAyUPN5Qw9IwTGqsRvi4MVYRS5uzAJkq1DrKL/cM5uDu4TxZbuxEdhhVovkDCZQL4xyYNVkGVlEu5rBl2ZVTUuwLIztOygC6otqsm71CWM71mLnp0GClWu5s2QVfVfT96n7TrWM8nlZVf1mA9g5D6LRg050qXujGMMwXq0eDuXAcaklE2pJbG2AUE+0eHV9tPvA3z+TPwDkH0sZhv6IlwAAAABJRU5ErkJggg=="},"44da":function(t,e,a){},"545a":function(t,e,a){"use strict";a("44da")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"flex justify-between border-b border-gray-500"},[a("Navbar"),a("Searchbar")],1),a("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img",attrs:{src:a("9d64"),alt:""}})]),s("ul",{staticClass:"flex mt-5"},[s("li",[s("router-link",{staticClass:"ml-5",attrs:{to:"/"}},[t._v(" Movies ")])],1),s("li",[s("router-link",{staticClass:"ml-5",attrs:{to:"/actors"}},[t._v(" Actors ")])],1),s("li",[this.$store.state.isUserLoggedIn?s("router-link",{staticClass:"ml-5",attrs:{to:"/profile"}},[t._v(" Profile ")]):t._e()],1)])],1)},o=[],l=(a("f240"),a("2877")),c={},u=Object(l["a"])(c,i,o,!1,null,"4037c33c",null),m=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 flex relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],ref:"searchBox",staticClass:"rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus:outline-none focus:outlne-shadow",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.debounceSearch],focus:t.handleFocus}}),a("div",{staticClass:"absolute top-0 or-3"},[a("svg",{staticClass:"fill-current w-4 text-gray-300 mt-2 ml-2 mt-3",attrs:{viewBox:"0 0 24 24"}},[a("path",{staticClass:"heroicon-ui",attrs:{d:"M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"}})])]),a("div",{staticClass:"absolute mt-10 ml-2 rounded bg-gray-600 w-60 z-50"},[t.showSearchResult?a("ul",{staticClass:"mt-3"},t._l(t.searchResult,(function(e,s){return a("li",{key:s,staticClass:"flex items-center border-b border-gray-500 p-1"},[a("img",{staticClass:"w-10",attrs:{src:t.posterPath(e.poster_path),alt:""}}),a("router-link",{attrs:{to:"/movie/"+e.id},nativeOn:{click:function(e){t.showSearchResult=!1}}},[a("span",{staticClass:"ml-3"},[t._v(t._s(e.original_title))])])],1)})),0):t._e(),0==t.searchResult.length&&t.showSearchResult?a("ul",{staticClass:"px-3"},[a("li",[t._v(' 3">No result found for "'+t._s(t.searchTerm)+'"')])]):t._e()])])},p=[],v=(a("96cf"),a("1da1")),h={components:{},data:function(){return{searchResult:[],searchTerm:"",showSearchResult:!1}},mounted:function(){this.keyboardEvents()},methods:{debounceSearch:function(t){var e=this;clearTimeout(this.debounce),this.debounce=setTimeout((function(){t.target.value.length>2?e.fetchSearch(t.target.value):e.showSearchResult=!1}),600)},fetchSearch:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/search/movie?api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e&query="+t);case 3:s=a.sent,e.searchResult=s.data.results,e.showSearchResult=!!s.data.results,console.log(e.searchResult),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},posterPath:function(t){return t?"https://image.tmdb.org/t/p/w500/"+t:"https://via.placeholder.com/50x75"},keyboardEvents:function(){var t=this,e=this;window.addEventListener("click",(function(e){t.$el.contains(e.target)||(t.showSearchResult=!1)})),window.addEventListener("keypress",(function(t){"47"==t.keyCode&&(t.preventDefault(),e.$refs.searhBox.focus())})),window.addEventListener("keydown",(function(e){"Escape"==e.key&&(t.showSearchResult=!1)}))},handleFocus:function(){""!=this.searchTerm&&(this.showSearchResult=!0)}}},f=h,g=Object(l["a"])(f,d,p,!1,null,null,null),b=g.exports,x={name:"App",components:{Navbar:m,Searchbar:b}},_=x,w=Object(l["a"])(_,r,n,!1,null,null,null),C=w.exports,y=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto"},[a("PopularMovies"),a("UpcomingMovies")],1)},M=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-5"},[a("h2",{staticClass:"uppercase mt-5 text-yellow-500 text-lg font-semibold"},[t._v(" Popular Movies ")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"},t._l(t.movies,(function(e){return a("MovieItem",{key:e.id,attrs:{movie:e,genres:t.genres}})})),1)])},O=[],A=a("2909"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/movie/"+t.movie.id}},[a("img",{staticClass:"hover:opacity-60 transition easy-in-out",attrs:{src:t.posterPath}})]),a("h3",[t._v(t._s(t.movie.title))]),a("div",{staticClass:"flex"},[a("svg",{staticClass:"fill-current text-yellow-500 w-4 h-4 mt-1",attrs:{viewBox:"0 0 24 24"}},[a("g",{attrs:{"data-name":"Layer 2"}},[a("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),a("span",{staticClass:"ml-2"},[t._v(t._s(10*t.movie.vote_average)+"% | "+t._s(t.movie.release_date))]),t._v(" "),a("br")]),a("span",{staticClass:"text-sm text-gray-400"},t._l(t.movie.genre_ids,(function(e,s){return a("span",{key:e},[t._v(" "+t._s(t.genreTypeName(e,s))+" ")])})),0)],1)},E=[],j=(a("b0c0"),a("b85c")),P={props:{movie:{required:!0},genres:{required:!0}},computed:{posterPath:function(){return"https://image.tmdb.org/t/p/w500/"+this.movie.poster_path}},methods:{genreTypeName:function(t,e){var a,s=Object(j["a"])(this.genres);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(r.id==t)return this.movie.genre_ids.length-1==e?r.name:r.name+","}}catch(n){s.e(n)}finally{s.f()}}}},I=P,z=Object(l["a"])(I,S,E,!1,null,null,null),T=z.exports,V=1,U={data:function(){return{movies:[],genres:[]}},components:{MovieItem:T},mounted:function(){this.getGenre(),this.getPopular(V)},methods:{getPopular:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/movie/popular?page="+t+"&api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:r=a.sent,(s=e.movies).push.apply(s,Object(A["a"])(r.data.results)),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getGenre:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/genre/movie/list?api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:a=e.sent,t.genres=a.data.genres,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},scroll:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(V+=1,t.getPopular(V+=1))}}}},$=U,L=Object(l["a"])($,R,O,!1,null,null,null),D=L.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"example"}},[a("h2",{staticClass:"uppercase text-yellow-500 font-semibold text-lg mt-20 ml-2"},[t._v("Upcoming Movies")]),a("carousel-3d",{key:t.upcomingMovies.length,attrs:{"controls-visible":!0,clickable:!1,listData:t.upcomingMovies,height:500}},t._l(t.upcomingMovies,(function(e,s){return a("slide",{key:s,attrs:{index:s}},[a("figure",[a("img",{attrs:{src:t.posterImage(e)}}),a("figcaption",[a("router-link",{attrs:{to:"/movie/"+e.id}},[t._v(" "+t._s(e.title)+" ")])],1)])])})),1)],1)},G=[],N=(a("fb6a"),a("2af0")),q=a.n(N),F={components:{Carousel3d:N["Carousel3d"],Slide:N["Slide"]},mounted:function(){this.getUpcomingMovies()},data:function(){return{upcomingMovies:[]}},computed:{},methods:{getUpcomingMovies:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/movie/upcoming?&api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:a=e.sent,t.upcomingMovies=a.data.results.slice(1,6),console.log("dates :"+a.data.results.slice(1,6)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getCurrentDate:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return e},posterImage:function(t){return t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://placehold.it/360x270"}}},H=F,Y=(a("545a"),Object(l["a"])(H,B,G,!1,null,"0668abaf",null)),J=Y.exports,W={components:{PopularMovies:D,UpcomingMovies:J}},Z=W,Q=Object(l["a"])(Z,k,M,!1,null,"0fe8fc7a",null),K=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mx-auto flex mt-20 border-b border-gray-600 pb-2"},[a("img",{staticClass:"w-64",attrs:{src:t.posterPath,alt:""}}),a("div",{staticClass:"ml-24"},[a("h1",{staticClass:"text-3xl font-semibold"},[t._v(t._s(t.movie.title))]),a("span",{staticClass:"text-gray-500 text-sm flex"},[a("svg",{staticClass:"fill-current text-yellow-500 w-4 mr-2",attrs:{viewBox:"0 0 24 24"}},[a("g",{attrs:{"data-name":"Layer 2"}},[a("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),t._v(" "+t._s(10*t.movie.vote_average)+"% | "+t._s(t.movie.release_date)+" "),t._l(t.movie.genres,(function(e,s){return a("span",{key:s,staticClass:"ml-1"},[t._v(" "+t._s(e.name)+" "),t.movie.genres.length-1!=s?a("span",[t._v(",")]):t._e()])}))],2),a("p",{staticClass:"mt-5"},[t._v(" "+t._s(t.movie.overview)+" ")]),a("div",{staticClass:"mt-5"},[a("span",{staticClass:"mt-5 font-semibold"},[t._v("Featured Cast")]),a("div",{staticClass:"flex"},t._l(t.movie.credits.crew,(function(e,s){return a("div",{key:s},[s<2?a("div",{staticClass:"flex flex-col mt-5 mr-5"},[a("span",[t._v(t._s(e.name)+" ")]),a("span",{staticClass:"text-gray-500"},[t._v(t._s(e.job))])]):t._e()])})),0)]),a("div",{staticClass:"mt-5"},[a("a",{staticClass:"cursor-default rounded bg-yellow-500 px-5 py-4 inline-flex text-black",attrs:{target:"blank"},on:{click:function(e){return e.preventDefault(),t.openYoutubeModel(e)}}},[a("svg",{staticClass:"w-6 h-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})]),a("span",{staticClass:"ml-3 cursor-default"},[t._v("Play Trailer")])]),t._m(0)])])]),a("Cast",{attrs:{casts:t.movie.credits.cast}}),a("Images",{attrs:{images:t.movie.images.backdrops},on:{"on-image-click":t.showImageModel}}),a("MediaModel",{attrs:{mediaURL:t.mediaURL,isVideo:this.isVideo},model:{value:t.modelOpen,callback:function(e){t.modelOpen=e},expression:"modelOpen"}})],1)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"rounded bg-yellow-500 px-5 py-4 inline-flex text-black ml-5",attrs:{href:"#"}},[s("img",{attrs:{src:a("3921"),alt:""}}),s("span",{staticClass:"ml-3"},[t._v("Favorite")])])}],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto border-b border-gray-600 px-4 py-4"},[a("h2",{staticClass:"text-4xl font-semibold mb-5"},[t._v(" Cast ")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5"},t._l(t.casts,(function(e,s){return a("div",{key:s,staticClass:"mr-2 mt-5"},[a("router-link",{attrs:{to:"/actor/"+e.id}},[a("img",{staticClass:"hover:opacity-60 transition easy-in-out",attrs:{src:t.castProfileImage(e),alt:""}}),a("span",{staticClass:"text-white-300 text-sm"},[t._v(t._s(e.name)+" ")]),a("div",[a("span",{staticClass:"text-gray-400 text-sm"},[t._v(t._s(e.character)+" ")])])])],1)})),0)])},at=[],st={props:{casts:{required:!0}},methods:{castProfileImage:function(t){return t.profile_path?"https://image.tmdb.org/t/p/w200"+t.profile_path:"https://via.placeholder.com/200x300"}}},rt=st,nt=Object(l["a"])(rt,et,at,!1,null,null,null),it=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto border-b border-gray-600 px-4 py-4"},[a("h2",{staticClass:"text-4xl font-semibold mb-5"},[t._v(" Images ")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"},t._l(t.images,(function(e,s){return a("div",{key:s,staticClass:"mr-2 mt-2"},[a("img",{staticClass:"hover:opacity-60 transition easy-in-out",attrs:{src:t.movieScreener(e),alt:""},on:{click:function(a){return t.openModel(e)}}})])})),0)])},lt=[],ct={props:{images:{required:!0}},methods:{movieScreener:function(t){return t.file_path?"https://image.tmdb.org/t/p/w300"+t.file_path:"https://via.placeholder.com/300x450"},openModel:function(t){var e="";e=t.file_path?"https://image.tmdb.org/t/p/original"+t.file_path:"https://via.placeholder.com/300x450",this.$emit("on-image-click",e)}}},ut=ct,mt=Object(l["a"])(ut,ot,lt,!1,null,null,null),dt=mt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto  z-50",staticStyle:{"background-color":"rgba(0, 0, 0, .5)"},attrs:{tabindex:"0"}},[a("div",{staticClass:"container mx-auto lg:px-32 rounded-lg overflow-y-auto"},[a("div",{staticClass:"bg-gray-900 rounded"},[a("div",{staticClass:"flex justify-end pr-4 pt-2"},[a("button",{staticClass:"text-3xl leading-none hover:text-gray-300",on:{click:t.close}},[t._v(" × ")])]),a("div",{staticClass:"modal-body px-8 py-8"},[a("div",{staticClass:"responsive-container overflow-hidden relative",style:t.isVideo?{"padding-top":"56.25%"}:{}},[t.isVideo?t._e():a("img",{attrs:{src:t.mediaURL}}),t.isVideo?a("iframe",{staticClass:"responsive-iframe absolute top-0 left-0 w-full h-full",staticStyle:{border:"0"},attrs:{allow:"autoplay; encrypted-media",allowfullscreen:"",src:t.mediaURL}}):t._e()])])])])])},vt=[],ht={props:{value:{required:!0},mediaURL:{required:!0},isVideo:{required:!0}},methods:{close:function(){this.$emit("input",!this.value)}}},ft=ht,gt=Object(l["a"])(ft,pt,vt,!1,null,null,null),bt=gt.exports,xt={components:{Cast:it,Images:dt,MediaModel:bt},watch:{"$route.params.id":{handler:function(){this.getMovie(this.$route.params.id)},immediate:!0}},data:function(){return{movie:{credits:{crew:{}},images:{backdrops:{}}},modelOpen:!1,isVideo:!1,mediaURL:""}},computed:{posterPath:function(){return"https://image.tmdb.org/t/p/w500/"+this.movie.poster_path}},methods:{getMovie:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/movie/"+t+"?append_to_response=credits,videos,images&api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:s=a.sent,e.movie=s.data,console.log(e.movie),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},youtubeVideo:function(){if(this.movie.videos)return"https://www.youtube.com/embed/"+this.movie.videos.results[0].key},openYoutubeModel:function(){this.mediaURL=this.youtubeVideo(),this.isVideo=!0,this.modelOpen=!0},openImageModel:function(){this.isVideo=!1,this.modelOpen=!0},showImageModel:function(t){this.mediaURL=t,this.isVideo=!1,this.modelOpen=!0}}},_t=xt,wt=Object(l["a"])(_t,X,tt,!1,null,null,null),Ct=wt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto px-4 py-5"},[a("h2",{staticClass:"text-yellow-500 text-lg font-semibold"},[t._v(" POPULAR ACTORS ")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8"},t._l(this.actors,(function(t){return a("ActorsItem",{key:t.id,attrs:{actor:t}})})),1),a("div",{staticClass:"text-center mt-5"},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.Previous()}}},[t._v("Previous")]),a("a",{staticClass:"ml-5",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.Next()}}},[t._v("Next")])])])},kt=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/actor/"+this.actor.id}},[a("img",{attrs:{src:t.profileImage,alt:""}}),a("h3",[t._v(t._s(t.actor.name))]),a("p",{staticClass:"text-gray-400"},[t._v(" "+t._s(t.knownFor)+" ")])])],1)},Rt=[],Ot={props:{actor:{required:!0}},computed:{profileImage:function(){return"https://image.tmdb.org/t/p/w235_and_h235_face/"+this.actor.profile_path},knownFor:function(){for(var t,e="";t<this.actor.known_for.length-1;t++)e+=this.actor.known_for[t].title;return e}}},At=Ot,St=Object(l["a"])(At,Mt,Rt,!1,null,null,null),Et=St.exports,jt=1,Pt={components:{ActorsItem:Et},data:function(){return{actors:[]}},mounted:function(){this.getActors(jt)},methods:{getActors:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/person/popular?page="+t+"&api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:s=a.sent,e.actors=s.data.results,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},scroll:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(jt+=1,t.getActors(jt+=1))}},Next:function(){jt+=1,this.getActors(jt)},Previous:function(){jt-=1,this.getActors(jt)}}},It=Pt,zt=Object(l["a"])(It,yt,kt,!1,null,null,null),Tt=zt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto px-4 py-16 flex"},[a("div",{staticClass:"flex-none"},[a("img",{attrs:{src:t.profilePath,alt:""}}),a("ul",{staticClass:"flex items-center mt-4"},[a("li",[a("a",{attrs:{href:"https://facebook.com/",title:"Facebook"}},[a("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"}})])])]),a("li",{staticClass:"ml-6"},[a("a",{attrs:{href:"https://instagram.com/",title:"Instagram"}},[a("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])]),a("li",{staticClass:"ml-6"},[a("a",{attrs:{href:"https://twitter.com/",title:"Twitter"}},[a("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),a("li",{staticClass:"ml-6"},[a("a",{attrs:{href:"",title:"Website"}},[a("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 496 512"}},[a("path",{attrs:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 01-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 01-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 00-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 00-15.55-3.1l-31.17 10.39a11.95 11.95 0 00-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 018.93 21.57 46.536 46.536 0 01-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 010-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"}})])])])])]),a("div",{staticClass:"ml-20 "},[a("h2",{staticClass:"text-4xl font-semibold"},[t._v(" "+t._s(this.actor.name)+" ")]),a("div",{staticClass:"flex mt-2"},[a("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-4",attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"}})]),a("span",{staticClass:"ml-2 text-gray-500 text-sm"},[t._v(t._s(this.actor.birthday)+" (24)")]),a("span",{staticClass:"ml-2 text-gray-500 text-sm"},[t._v(t._s(this.actor.place_of_birth)+" ")])]),a("p",{staticClass:"text-gray-300 mt-8"},[t._v(t._s(this.actor.biography))]),a("h4",{staticClass:"mt-12 font-semibold"},[t._v("Known For")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8"},t._l(this.knownFor,(function(e){return a("div",{key:e.id},[a("router-link",{staticClass:"text-gray-400 text-sm leading-normal hover:text-white",attrs:{to:"/movie/"+e.id}},[a("img",{staticClass:"mt-1 hover:opacity-75 transition ease-in-out duration-150",attrs:{src:t.movieImage(e),alt:""}}),t._v(" "+t._s(e.name)+" ")])],1)})),0)])])},Ut=[],$t=(a("4de4"),{mounted:function(){this.getActor(this.$route.params.id),this.getCredits(this.$route.params.id)},data:function(){return{socialDetails:[],actor:{},knownFor:[]}},computed:{profilePath:function(){return"https://image.tmdb.org/t/p/w300/"+this.actor.profile_path}},methods:{getActor:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/person/"+t+"?api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:s=a.sent,e.actor=s.data,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getCredits:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.get("/person/"+t+"/combined_credits?api_key=4a8a8d89f3e4792a5aa5377b9fb43f4e");case 3:s=a.sent,e.knownFor=s.data.cast.filter((function(t){return"movie"==t.media_type})).slice(1,6),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},movieImage:function(t){return t.poster_path?"https://image.tmdb.org/t/p/w185/"+t.poster_path:"https://via.placeholder.com/185x278"}}}),Lt=$t,Dt=Object(l["a"])(Lt,Vt,Ut,!1,null,null,null),Bt=Dt.exports,Gt=new y["a"]({mode:"history",routes:[{path:"/moviecentral/",name:"home",component:K},{path:"/moviecentral/movie/:id",name:"movie",component:Ct},{path:"/moviecentral/actors",name:"actors",component:Tt},{path:"/moviecentral/actor/:id",name:"actordetails",component:Bt}]}),Nt=Gt,qt=a("bc3a"),Ft=a.n(qt),Ht="4a8a8d89f3e4792a5aa5377b9fb43f4e",Yt=Ft.a.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer "+Ht}}),Jt=(a("034b"),a("2f62"));s["a"].use(Jt["a"]);var Wt=new Jt["a"].Store({state:{isUserLoggedIn:!1},mutations:{SET_USER_LOGGED_IN:function(t,e){t.setUserLoggedIn=e}},actions:{setUserLoggedIn:function(t,e){var a=t.commit;console.log(a,e),a("SET_USER_LOGGED_IN")}},getters:{}});s["a"].prototype.$http=Yt,s["a"].config.productionTip=!1,s["a"].use(y["a"]),s["a"].use(q.a),new s["a"]({render:function(t){return t(C)},router:Nt,store:Wt}).$mount("#app")},"70ff":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.8be967db.png"},f240:function(t,e,a){"use strict";a("70ff")}});
//# sourceMappingURL=app.76fa3089.js.map