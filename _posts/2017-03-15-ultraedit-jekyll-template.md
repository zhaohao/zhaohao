---
layout: post 
title: "使用UltraEdit快速插入Jekyll日志模板"
Date: 2017-03-15T03:57:27.000Z
pubDatetime: 2017-03-15T03:57:27.000Z
published: 2017-03-15T03:57:27.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2017-03-15-ultraedit-jekyll-template"
draft: false
---
使用UltraEdit的模板功能，可以快捷的插入Jekyll日志所需的头文件。 以下为自己所用的模板。

```ruby
---
layout: post
title: ^  
#设置插入模板后光标位置
subtitle: 
date: [DATE_USER]yyyy-MM-dd[DATE_USER_END] [TIME_USER]HH':'mm':'ss[TIME_USER_END] +0800 
#符合格式的日期时间
categories:
  - Diary
description: 
image: /resource/img/.jpg 
#模板中调用的图片
---


[DATE_TEXT] 
#自己习惯结尾插入的日期记录

[DATE_USER]yyyy-MM-dd[DATE_USER_END]-.md
#编辑完成后剪切此处作为保存时候的文件名部分
```

Wednesday, March 15, 2017