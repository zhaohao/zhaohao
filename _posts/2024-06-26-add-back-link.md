---
layout: post 
title: "页面设置后退按钮"
draft: false 
date: 2024-06-26
categories: 
  - "weblog"
tags: 
  - "html"
  - "jekyll"
  - "theme"
---

在修改主题的时候，遇到一个问题，就是从主页面点击进文章页后，在文章页中需要设置导航按钮用于返回。最初只是直接简单的添加了回主页的链接，这样只能说是勉强能用了。  
假如遇到从非主页点击进入文章页面，如果还是直接返回主页的话就丢失了原来浏览所处的位置而被重置到了主页，这样就同浏览页面的直观感受割裂了。所以如果能采用类似浏览器的后退一步的操作的话才能解决这个问题。  
最初使用：

```html
<a href="javascript:history.go(-1)">Go Back</a>
```

或者

```html
<a href="javascript:history.back()">Go Back</a>
```

去操作，发现chrome或者edge里都好，但在安卓的Via浏览器中不起作用。后面修改为onclick事件：

```html
<a onclick="(() => (history.length === 1) ? window.location = '/' : history.back()()"> Go back </a>
```

能够正常使用了。  
通过后退按钮，能够从文章页面返回到点击发生的历史页面而不是简单回到主页了。

Wednesday, June 26, 2024
