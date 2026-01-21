---
layout: post 
title: "日志里添加二维码"
Date: 2024-04-24T07:55:00.000Z
pubDatetime: 2024-04-24T07:55:00.000Z
published: 2024-04-24T07:55:00.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2024-04-24-jquery-qrcode"
draft: false
---
今天一个博客上看到有文章的二维码链接，通过搜索知道了可以通过 jquery.qrcode.js在前端实时生成字符串的二维码。所以试着在这里也加了这个功能。

首先需要将 jquery.qrcode.min.js 和 jquery 引入到页面，通过jquery.qrcode生成需要的二维码。里面可以包含二维码的各项自定义设置项，如宽高色彩等信息。也可以定义生成二维码为table还是canvas类型。

```html
<script src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.qrcode.min.js"></script>

<script>
    jQuery(function(){

    jQuery('#qrcode').qrcode({
    render: "table",
    width: 160,
    height: 160,
    foreground: "#337778",
    background: "#efefef",
    text: "{{ page.url }}"
    });

    })
</script>
```

后面就可以在需要的页面里添加上生成的QR码。可以在里面根据需要设置一下显示的样式。

```html
<div id="qrcode" style=" align-self: start; margin:0px 10px 10px 0px; padding:20px; box-shadow: inset #2c7f7f 0 0 15px 10px;" ></div>
```

于是每个有需要显示二维码的页面都可以动态生成相机友好的二维码了。  
但是总感觉放页面上有些突兀，后面兜兜转转放到了页面开头，也算不那么违和。

Wednesday, April 24, 2024