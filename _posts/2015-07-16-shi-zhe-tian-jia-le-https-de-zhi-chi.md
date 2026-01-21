---
layout: post 
title: "试着添加了HTTPS的支持"
Date: 2015-07-16T10:47:00.000Z
pubDatetime: 2015-07-16T10:47:00.000Z
published: 2015-07-16T10:47:00.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2015-07-16-shi-zhe-tian-jia-le-https-de-zhi-chi"
draft: false
---
在StartSSL上面申请了免费的SSL证书，`StartCom Class 1 Primary Intermediate Server CA`  
Nginx配置中最初是在一个Server中监听80添加了443，结果https链接正常访问，http访问出现Error 400  
  

  
400 Bad Request  
The plain HTTP request was sent to HTTPS port  

  
  
后面再网上搜索加尝试最终找到解决办法，分开配置server，分别对应443和80，80端口的设置跳转到https，问题解决。  
  

  
......前面省略  
server {  
#listen 80 default\_server;  
#listen \[::\]:80 default\_server ipv6only=on;  
listen 443;  
root /xxx;  
index index.php index.html index.htm;  
server\_name zhao.im/;  
ssl on;  
ssl\_certificate    /xxx/xxx.crt;  
ssl\_certificate\_key     /xxx/xxx.key;  
ssl\_session\_timeout 5m;  
ssl\_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;  
ssl\_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";  
ssl\_prefer\_server\_ciphers on;  
error\_page 497 "https://$host$uri?$args";  
......后面省略  
}  
#------------------------------  
server {  
listen 80;  
server\_name zhao.im/;  
rewrite ^/(.\*) https://$server\_name$1 permanent;  
}  

stardust@live.com