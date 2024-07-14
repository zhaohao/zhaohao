<style type="text/css">
:root{
--bgcolor:#dcd9d2;
--darknumer:0;
--darkdegree:0deg;
}
[data-theme="dark"] {
--darknumer:1;
--darkdegree:180deg;
--bgcolor:#0e0e0e;
}
[data-theme="light"] {
--darknumer:0;
--darkdegree:0deg;
--bgcolor:#dcd9d2;
}
/*
.toggle{
    font-size: 14px;
    background-color: #555;
    width: 3rem;
    height: 3rem;
    position: fixed;
    border-radius: 50%;
    right: 3%;
    top: 12px;
    left: unset;
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
}
*/

.toggle{
    font-size: 30px;
    color: #33b3c3;
    background-color: #111;
    width: 30px;
    height: 30px;
    position: fixed;
    border-radius: 50%;
    right: 3%;
    top: 1px;
    left: unset;
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
}

body{
    background: var(--bgcolor) url(/assets/template/bgp00.svg);
    filter: invert(var(--darknumer)) hue-rotate(var(--darkdegree));
    transition: all 0.5s ease-in-out;
}
img,
video,
pre {
    filter: invert(var(--darknumer)) hue-rotate(var(--darkdegree));
}
hr::after {
  background: #f1eee4;
}
.list-page a {
	background: #f1eee4;
}
.current-page {
	background: #f1eee4;
}
#tag_cloud {
  padding: 1em 0;
}
.paper {
  position: relative;
  width: 97%;
  max-width: 1200px;
  min-width: 360px;
  height: auto;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.3);
  overflow: hidden;
  line-height: 30px;
  background: #f1eee4;
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.paper:before {
  content: '';
  position: absolute;
  top: 15px; 
  bottom: 15px; 
  left: 10px;
  width: 60px;
  background: radial-gradient(#aaaaaa 6px, transparent 7px) repeat-y;
  background-size: 30px 30px;
  border-right: 0px solid #f1eee4;
  box-sizing: border-box;
}
.paper-content {
  margin: 60px 30px 30px 75px;
  background: linear-gradient(transparent, transparent 29px, #6587833b 28px);
  background-size: 30px 30px;
}
</style>
<button onclick="toggle()" class="toggle">◐</button>
<div class="paper">
<div class="paper-content">
{{ content }}
</div>
</div>
</body>