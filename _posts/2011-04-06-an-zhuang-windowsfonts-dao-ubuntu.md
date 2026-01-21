---
layout: post 
title: "安装windows Fonts到ubuntu"
Date: 2011-04-06T13:40:00.000Z
pubDatetime: 2011-04-06T13:40:00.000Z
published: 2011-04-06T13:40:00.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2011-04-06-an-zhuang-windowsfonts-dao-ubuntu"
draft: false
---
1 拷贝微软字体到桌面的windows7fonts文件：  
2 sudo gnome-open /usr/share/fonts ———————打开fonts文件夹  
3 拷贝windows7fonts到文件夹内 ———————直接拉进去就可以了 if 自动配置\_\_> ok,stop here.  
OR\_\_\_\_\_\_\_\_\_>>  
sudo cd /usr/share/fonts——————进入字体文件夹  
4 sudo chmod 755 windows7fonts -R ——————权限设置  
  
5 ：建立字体缓存  
1） sudo mkfontscale  
2）sudo mkfontdir  
3）sudo fc-cache -fv  
————————————————————————————————————————————————————————  
原文链接：[http://forum.ubuntu.org.cn/viewtopic.php?f=8&t=196512&sid=464293325ffc611865972be3c46ab707&start=0](http://forum.ubuntu.org.cn/viewtopic.php?f=8&t=196512&sid=464293325ffc611865972be3c46ab707&start=0)  
最后由 wowoto 编辑于 2009-11-26 4:42，总共编辑了 10 次

stardust@live.com