<style type="text/css">
:root{
--bgcolor:#e1e1e1;
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
--bgcolor:#e1e1e1;
}

.toggle{
  font-size: 20px;
  color: #33b3c3;
  background-color: #111;
  border: 0px;
  width: 25px;
  height: 25px;
  position: fixed;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  left: unset;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.toggle:hover {
  transform:rotate(360deg);
  -ms-transform:rotate(360deg); 	/* IE 9 */
  -moz-transform:rotate(360deg); 	/* Firefox */
  -webkit-transform:rotate(360deg); /* Safari  Chrome */
  -o-transform:rotate(360deg); 	/* Opera */
}

body{
  background: var(--bgcolor) /* url(/assets/template/bgp00.svg) */;
  filter: invert(var(--darknumer)) hue-rotate(var(--darkdegree));
  transition: all 0.5s ease-in-out;
}
img,
video,
pre {
  filter: invert(var(--darknumer)) hue-rotate(var(--darkdegree));
}
hr::after {
  background: #f1eeed;
}
.list-page a {
	background: #f1eeed;
}
.current-page {
	background: #f1eeed;
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
  background: #f4f4f4;
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
  border-right: 0px solid #f1eeed00;
  box-sizing: border-box;
}
.paper-content {
  margin: 60px 30px 30px 75px;
  background: linear-gradient(transparent, transparent 29px, #6587833b 28px);
  background-size: 30px 30px;
}
</style>
<div class="paper">
<div class="paper-content">
<button onclick="toggle()" class="toggle"><i class="fa fa-adjust fa-rotate-180 fa-fw"></i></button>
{{ content }}
</div>
</div>
</body>
