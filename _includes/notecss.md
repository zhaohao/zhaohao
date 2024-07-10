<style type="text/css">
body {
  background: #dcd9d2 url(/assets/template/bgp00.svg);
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
  background: #f1eee4a0;
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
  background: radial-gradient(#afaba757 6px, transparent 7px) repeat-y;
  background-size: 30px 30px;
  border-right: 0px solid #f1eee4a0;
  box-sizing: border-box;
}
.paper-content {
  margin: 60px 30px 30px 75px;
  background: linear-gradient(transparent, transparent 29px, #cccccc 28px);
  background-size: 30px 30px;
}
</style>
<div class="paper">
<div class="paper-content">
{{ content }}
</div>
</div>
</body>