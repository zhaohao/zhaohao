<style type="text/css">
body {
  background: #e8e7e1  url(/assets/template/bgp00.svg);
}  
hr::after {
  background: #f4f2ed;
}
.listing-item,.listing-seperator {
	font-family: Consolas, Galdeano, "Microsoft Yahei", "lxgw wenkai screen", monospace, sans-serif;
}
.list-page a {
	background: #f4f2ed;
}
.current-page {
	background: #f4f2ed;
}
.paper {
  position: relative;
  width: 97%;
  max-width: 1280px;
  min-width: 360px;
  height: auto;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.3);
  overflow: hidden;
  line-height: 30px;
  background: #f8f6f1ba;
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.paper:before {
  content: '';
  position: absolute;
  top: 30px; 
  bottom: 30px; 
  left: 30px;
  width: 60px;
  background: radial-gradient(#afaba757 6px, transparent 7px) repeat-y;
  background-size: 30px 30px;
  border-right: 0px solid #f9f8f8;
  box-sizing: border-box;
}
.paper-content {
  margin: 60px 30px 30px 75px;
  background: linear-gradient(transparent, transparent 29px, #e5e4e1 28px);
  background-size: 30px 30px;
}
</style>
<div class="paper">
<div class="paper-content">
{{ content }}
</div>
</div>
</body>