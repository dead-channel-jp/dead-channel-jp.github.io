!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){const n=jQuery,o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";const r=document.getElementsByTagName("script")[0];let a;r.parentNode.insertBefore(o,r);document.getElementById("front-youtube");function i(){1>window.innerWidth/window.innerHeight?n("#front-youtube").addClass("vertical"):n("#front-youtube").removeClass("vertical")}window.onYouTubeIframeAPIReady=()=>{a=new YT.Player("front-youtube",{videoId:["xsSg2t7ldEU","S2tlc3265TI","4IquOq0mKVE"][Math.floor(3*Math.random())],playerVars:{cc_load_policy:0,controls:0,disablekb:0,iv_load_policy:3,playsinline:1,rel:0,showinfo:0,modestbranding:3},events:{onReady:e=>{e.target.mute(),e.target.playVideo()},onStateChange:e=>{e.data==YT.PlayerState.PLAYING&&n(".front-header").addClass("done"),e.data==YT.PlayerState.ENDED&&e.target.playVideo()}}})},n(document).ready((function(){let e;n('a[href^="#"]').click((function(e){e.preventDefault();const t=n(this).attr("href"),o=jQuery("#"===t?"html":t).offset().top-0;n("body,html").animate({scrollTop:o},400,"swing")})),i(),n(window).resize(()=>{e&&clearTimeout(e),e=setTimeout(i,100)})}))}]);
//# sourceMappingURL=app.js.map