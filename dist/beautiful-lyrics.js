var beautifulDlyrics=(()=>{var a,o="2.3.1",i=Spicetify.Player,l=new Map,e=()=>{var e=null==(e=null==(e=i.data)?void 0:e.track)?void 0:e.metadata,e=e?{Large:e.image_xlarge_url,Big:e.image_large_url,Default:e.image_url,Small:e.image_small_url}:void 0;if((null==e?void 0:e.Default)!==(null==a?void 0:a.Default)){a=e;for(var[t,r]of l)r()}},r=(i.addEventListener("songchange",e),e(),"os-viewport .lyrics-lyrics-container"),n="under-main-view",s="os-padding .main-nowPlayingView-content",c={NowPlaying:void 0,FullScreen:void 0},d={NowPlaying:void 0,FullScreen:void 0},u=(e,t)=>{var r;e!==c[t]&&(null!=(r=d[t])&&r.call(d),d[t]=void 0,e&&(d[t]=(e=>{const t=document.createElement("div"),r=(t.classList.add("lyrics-background-container"),document.createElement("img")),i=document.createElement("img");r.classList.add("lyrics-background-color"),i.classList.add("lyrics-background-back"),t.appendChild(r),t.appendChild(i);var o=()=>{var e=null!=(e=null==a?void 0:a.Default)?e:"";r.src=e,i.src=e},o=(l.set(e,o),o(),()=>{e.classList.contains("lyrics-background")||e.classList.add("lyrics-background")});o();const n=new MutationObserver(o);return n.observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1}),e.prepend(t),()=>{n.disconnect(),t.remove(),e.classList.remove("lyrics-background"),l.delete(e)}})(e)),c[t]=null!=e?e:void 0)},t=()=>{var e=document.body.querySelector("."+s),t=(e=null!=(t=null==(e=null!=(t=null==(e=null!=(t=null==e?void 0:e.parentElement)?t:null)?void 0:e.parentElement)?t:null)?void 0:e.parentElement)?t:null,null!==document.body.querySelector("."+r));u(e,"NowPlaying"),u(t?document.body.querySelector("."+n):null,"FullScreen")},y="lyrics-lyrics-contentWrapper",v="main-nowPlayingView-lyricsContent",b={NowPlaying:void 0,FullScreen:void 0},m={NowPlaying:void 0,FullScreen:void 0},g=r=>{const a=new Map;let l=0;const s=(e,t)=>{e.style.fontSize="Active"==t.State?l+.5+"rem":""},i=()=>{let t;for(var[e,r]of a){e=e.classList;e.contains("lyrics-lyricsContent-active")?(r.State="Active",t=r.LayoutOrder):e.contains("lyrics-lyricsContent-unsynced")?r.State="Unsynced":e.contains("lyrics-lyricsContent-highlight")?r.State="Sung":r.State="Unsung"}for(var[i,o]of a){var n="Active"===o.State||"Unsynced"===o.State;let e;e=n?0:void 0===t?4:Math.min(Math.abs(o.LayoutOrder-t),4);n=n?"var(--lyrics-color-active)":"Sung"===o.State?"var(--lyrics-color-passed)":"var(--lyrics-color-inactive)";!1===i.classList.contains("lyric")&&i.classList.add("lyric"),s(i,o),i.style.color="transparent",i.style.textShadow=`0 0 ${e}px `+n}};let o,c;{const t=n=>{var e=Array.from(r.children).indexOf(n);new MutationObserver(i).observe(n,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1});let t=!1;void 0===c&&0===n.innerText.length&&((c=new ResizeObserver(e=>{var t,r,i,o;l=(t=n,t=getComputedStyle(n),r=getComputedStyle(document.documentElement),parseFloat(t.fontSize)/parseFloat(r.fontSize));for([i,o]of a)s(i,o)})).observe(n),t=!0),a.set(n,{Observer:o,LayoutOrder:e,State:"Unsung",IsFontSizeObserver:t}),i()},n=e=>{e instanceof HTMLDivElement&&e.classList.contains("lyrics-lyricsContent-lyric")&&t(e)};(o=new MutationObserver(e=>{for(const r of e)if("childList"===r.type){for(const i of r.addedNodes)n(i);for(const o of r.removedNodes){var t;o instanceof HTMLDivElement&&(null!=(t=a.get(o))&&t.IsFontSizeObserver&&(null!=c&&c.disconnect(),c=void 0),a.delete(o))}}})).observe(r,{attributes:!1,childList:!0,subtree:!1});for(const e of r.childNodes)n(e)}return()=>{o.disconnect(),null!=c&&c.disconnect();for(const e of a.values())e.Observer.disconnect()}},f=(e,t)=>{var r;e!==b[t]&&(null!=(r=m[t])&&r.call(m),m[t]=void 0,e&&(m[t]=g(e)),b[t]=null!=e?e:void 0)},p=()=>{var e=document.body.querySelector("."+v),t=document.body.querySelector("."+y);f(e,"NowPlaying"),f(t,"FullScreen")};var h=async function(){t(),p(),new MutationObserver(()=>{t(),p()}).observe(document.body,{attributes:!1,childList:!0,subtree:!0});{let r;const i=async()=>{fetch("https://cdn.jsdelivr.net/gh/surfbryce/beautiful-lyrics@main/dist/beautiful-lyrics.js",{cache:"no-cache"}).then(e=>e.text()).then(e=>{e=null==(e=e.match(/\d+\.\d+\.\d+/))?void 0:e[0];let t=5;void 0!==e&&e!==o&&e!==r&&(r=e,Spicetify.showNotification(`<h3>Beautiful Lyrics has a new Update!</h3>
						<h4 style = 'margin-top: 4px; margin-bottom: 4px; font-weight: normal;'>Reinstall the Extension to get it.</h4>
						<span style = 'opacity: 0.75;'>Version ${o} -> ${e}</span>`,parseFloat(e)-parseFloat(o)<0||1<=Math.abs(parseInt(e)-parseInt(o)),7500),t=15),setTimeout(i,60*t*1e3)})},e=()=>{void 0===Spicetify.showNotification?setTimeout(e,0):i()};e()}};(async()=>{await h()})()})();(async()=>{var e;document.getElementById("beautifulDlyrics")||((e=document.createElement("style")).id="beautifulDlyrics",e.textContent=String.raw`
  .main-lyricsCinema-controls,.main-nowPlayingView-lyricsControls{mix-blend-mode:overlay}.lyric:hover{text-shadow:0 0 0 var(--lyrics-color-active)!important}.lyrics-lyricsContent-active{margin-top:.25em;margin-bottom:.25em}.lyrics-background .main-trackInfo-artists{opacity:.75;filter:brightness(1.15)}.main-nowPlayingView-coverArt{opacity:.85;box-shadow:rgba(0,0,0,.2705882353) 0 9px 20px 0}.main-nowPlayingView-section{background-color:var(--background-tinted-base)!important}#lyrics-cinema .os-scrollbar,.Root__main-view:has(.lyrics-background) .os-scrollbar,.os-host:has(.lyrics-background) .os-scrollbar{padding:5px}#lyrics-cinema .os-scrollbar .os-scrollbar-handle,.Root__main-view:has(.lyrics-background) .os-scrollbar .os-scrollbar-handle,.os-host:has(.lyrics-background) .os-scrollbar .os-scrollbar-handle{mix-blend-mode:overlay;background-color:rgba(252,249,249,.117)!important}.lyrics-lyrics-container,.main-nowPlayingView-section{--lyrics-color-inactive:rgb(240 240 240 / 51%)!important}.os-viewport .lyrics-lyrics-background{background:0 0}.os-viewport .lyrics-lyrics-container{margin-top:25vh}.os-viewport .lyrics-lyrics-container.lyrics-lyrics-coverTopBar{margin-top:7.5vh}.lyrics-background{overflow:hidden;position:static}.lyrics-background.main-nowPlayingView-sectionHeaderSpacing.main-nowPlayingView-lyricsGradient{background:0 0}.lyrics-background.os-viewport:not(:has(.main-nowPlayingView-content)){overflow:initial}.lyrics-background.under-main-view>.lyrics-background-container{max-width:35%;max-height:30%;scale:290% 340%;transform-origin:left top}.lyrics-background.os-padding:has(.main-nowPlayingView-content) .lyrics-background-container{border-radius:var(--border-radius-1);filter:saturate(2) brightness(.7)}.lyrics-background-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;filter:saturate(1.5) brightness(.8)}.lyrics-background-back,.lyrics-background-color{width:200%;position:absolute;border-radius:100em;animation:rotate 35s linear infinite}.lyrics-background-color{right:0;top:0;filter:blur(40px);z-index:10;mix-blend-mode:revert}.lyrics-background-back{left:0;bottom:0;filter:blur(40px);z-index:1;animation-direction:reverse}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}:root{--beautiful-lyrics-random-degree:258deg}@keyframes rotate{0%{transform:rotate(var(--beautiful-lyrics-random-degree))}100%{transform:rotate(calc(var(--beautiful-lyrics-random-degree) + 360deg))}}
      `.trim(),document.head.appendChild(e))})();