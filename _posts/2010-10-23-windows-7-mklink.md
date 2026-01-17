---
layout: post 
title: "Windows 7 Mklink"
draft: false 
date: 2010-10-23
categories: 
  - "weblog"
---

C:UsersAcui>mklink  
创建符号链接。  
MKLINK \[\[/D\] | \[/H\] | \[/J\]\] Link Target  
/D 创建目录符号链接。默认为文件符号链接。  
/H 创建硬链接，而不是符号链接。  
/J 创建目录联接。  
Link 指定新的符号链接名称。  
Target 指定新链接引用的路径  
C:UsersAcui>mklink /d C:UsersAcuiAppDataLocalgoogle E:FileTreeAppDatalocalGoogle  
为 C:UsersAcuiAppDataLocalgoogle <<===>> E:FileTreeAppDatalocalGoogle 创建的符号链接

stardust@live.com
