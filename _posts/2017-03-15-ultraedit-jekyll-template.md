---
layout: post
title: 使用UltraEdit快速插入Jekyll日志模板
subtitle: 
date: 2017-03-15 19:57:27 +0800
categories:
  - Weblog
tags:
  - Jekyll
comments: true 
---
使用UltraEdit的模板功能，可以快捷的插入Jekyll日志所需的头文件。
以下为自己所用的模板。

```ruby
comments: true 
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
image: /media/images/.jpg 
#模板中调用的图片
comments: true 
---


[DATE_TEXT] 
#自己习惯结尾插入的日期记录

[DATE_USER]yyyy-MM-dd[DATE_USER_END]-.md
#编辑完成后剪切此处作为保存时候的文件名部分
```
Wednesday, March 15, 2017