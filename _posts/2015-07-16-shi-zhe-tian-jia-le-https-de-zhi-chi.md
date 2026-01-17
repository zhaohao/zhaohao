---
layout: post 
title: "试着添加了HTTPS的支持"
draft: false 
date: 2015-07-16
categories: 
  - "weblog"
---

在StartSSL上面申请了免费的SSL证书，`StartCom Class 1 Primary Intermediate Server CA`  
Nginx配置中最初是在一个Server中监听80添加了443，结果https链接正常访问，http访问出现Error 400  
  

```
400 Bad RequestThe plain HTTP request was sent to HTTPS port
```

  
  
后面再网上搜索加尝试最终找到解决办法，分开配置server，分别对应443和80，80端口的设置跳转到https，问题解决。  
  

```
......前面省略server {#listen 80 default_server;#listen [::]:80 default_server ipv6only=on;listen 443;root /xxx;index index.php index.html index.htm;server_name zhao.im;ssl on;ssl_certificate    /xxx/xxx.crt;ssl_certificate_key     /xxx/xxx.key;ssl_session_timeout 5m;ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";ssl_prefer_server_ciphers on;error_page 497 "https://$host$uri?$args";......后面省略}#------------------------------server {listen 80;server_name zhao.im;rewrite ^/(.*) https://$server_name$1 permanent;}
```

stardust@live.com
