---
layout: post 
title: "从Typecho导出到Jekyll"
Date: 2025-07-11T03:51:00.000Z
pubDatetime: 2025-07-11T03:51:00.000Z
published: 2025-07-11T03:51:00.000Z
description: ""
author: "stardust"
tags: []
category: "Memos"
slug: "2025-07-11-typecho-to-jekyll"
draft: false
---
今天又翻看域名，想起以前设置的Astro博客和Jekyll博客，然后就再次试图在几个系统之间进行同步，搜到了Typecho上的Tp2MD插件，可以将typecho的文章转换为Jekyll适用的md文件，遂尝试使用。

修改了下适合自用的一些字段和格式，基本一切顺利转换完成，尝试Jekyll编译几个文件也挺正常。但是把全部文件编译时候，却总是出错：

```
Liquid Exception: undefined method `gsub' for 11:Integer in /var/www/zhaohao/_layouts/post.html
```

出错信息里完全定位不到具体文件，但只是部分md文件加入会报错，确信是某篇md内字段或者格式什么的有问题造成的，修修改改无数次都还是报错，就先丢到一边不管了。到后面再次尝试找到问题点，加上搜索报错信息发现的部分类似出错状况，终于发现是md文件里jekyll头文件slug项里有纯数字造成的。遂删除相关字段，问题解决。