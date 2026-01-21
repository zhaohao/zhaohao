---
layout: post 
title: "IPV6设置整理"
Date: 2010-08-28T12:47:00.000Z
pubDatetime: 2010-08-28T12:47:00.000Z
published: 2010-08-28T12:47:00.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2010-08-28-ipv6-she-zhi-zheng-li"
draft: false
---
  
  
  
  
  
  
  
  
  

CMD :

C:UsersAcui>netsh  
netsh>int  
netsh interface>ipv6  
netsh interface ipv6>isatap  
netsh interface ipv6 isatap>set route [isatap.sysu.edu.cn](http://isatap.sysu.edu.cn/)  
netsh interface ipv6 isatap>set state enabled  
netsh interface ipv6 isatap>quit

  
  
可用ISATAP IPV6 ROUTER  
[isatap.sysu.edu.cn](http://isatap.sysu.edu.cn/) / [isatap.tsinghua.edu.cn](http://isatap.tsinghua.edu.cn/) / [isatap.shu.edu.cn](http://isatap.shu.edu.cn/)  
[isatap.hust.edu.cn](http://isatap.hust.edu.cn/) /  [isatap.sjtu.edu.cn](http://isatap.sjtu.edu.cn/) / [isatap.scu.edu.cn](http://isatap.scu.edu.cn/)  
  
附：网络上有人整理的一些网站IPV6地址  
#Google和各种网站的IPv6服务hosts #利用IPv6技术翻墙，保证Google服务可用  
#发布地址：[http://docs.google.com/View?id=dfkdmxnt\_61d9ck9ffq](http://docs.google.com/View?id=dfkdmxnt_61d9ck9ffq)  
#共享链接：[http://docs.google.com/Doc?docid=0ARhAbsvps1PlZGZrZG14bnRfNjFkOWNrOWZmcQ&hl=zh\_CN](http://docs.google.com/Doc?docid=0ARhAbsvps1PlZGZrZG14bnRfNjFkOWNrOWZmcQ&hl=zh_CN)  
#表格版的host列表地址：[http://spreadsheets.google.com/ccc?key=0AhhAbsvps1PldEVXVzBkR3hBaWFnbEQ0OWIwMU5ycmc&hl=zh\_CN](http://spreadsheets.google.com/ccc?key=0AhhAbsvps1PldEVXVzBkR3hBaWFnbEQ0OWIwMU5ycmc&hl=zh_CN)

stardust@live.com