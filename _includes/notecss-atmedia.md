<style type="text/css">
body {
  /*
  background-image: url(/assets/template/bgp05.jpg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	*/
  background: #e8e7e1  url(/assets/template/bgp00.svg);
}  

hr {
  border: none;
  border-top: 3px double #a9c7c3;
  color: #367168;
  overflow: visible;
  text-align: center;
  height: 15px;
}

hr::after {
  background: #f8f6f1;
  content: 'ℤ'; /*'𒈝';*/
  padding: 0 3px;
  position: relative;
  top: -1.2em;
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

@media only screen and (width>=900px) {
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
    margin: 60px 20px 30px 90px;
    background: linear-gradient(transparent, transparent 29px, #e5e4e1 28px);
    background-size: 30px 30px;
}
}

@media only screen and (width<900px) {
.paper:before {
    content: '';
    position: absolute;
    top: 30px; 
    bottom: 30px; 
    left: 15px;
    width: 60px;
    background: radial-gradient(#afaba757 6px, transparent 7px) repeat-y;
    background-size: 30px 30px;
    border-right: 0px solid #f9f8f8;
    box-sizing: border-box;
}
.paper-content {
    margin: 60px 20px 30px 60px;
    background: linear-gradient(transparent, transparent 29px, #e5e4e1 28px);
    background-size: 30px 30px;
} 
}
</style>
<div class="paper">
<div class="paper-content">
{{ content }}
</div>
</div>
</body>