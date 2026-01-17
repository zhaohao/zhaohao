---
layout: post 
title: "Goagent客户端漏洞"
draft: false 
date: 2014-12-06
categories: 
  - "weblog"
---

Goagent客户端惊现pac漏洞，可被远程遍历目录及下载任意文件。  
  
如果你的机器运行着Goagent,那么有可能被人家入侵,只要在浏览器输入以下网址：  
  
http://127.0.0.1:8086/%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f/  
  
(其中127.0.0.1 替换成远程机器的IP） 即可远程遍历目录及下载任意文件。  
  
该漏洞对内网使用的机器（linux、windows）及提供公网PAC服务的，均存在上述问题。  
  
如果有做公网pac的，建议立刻停掉，等待修正。  
  
目前解决方案，禁用pac，修改 proxy.ini 里面的:  
\[pac\]  
enable = 1  
  
修改为：  
\[pac\]  
enable = 0  
  
重新启动Goagent客户端即可。

stardust@live.com
