---
layout: post
title: Nexus5联通166号码无法使用数据网络问题修复
subtitle: 
date: 2018-02-20 09:30:27 +0800
author: zhaohao
categories:
  - Diary
description: 
tags: net
image:  /assets/template/bgp10.jpg 
comments: true 
---

订了联通的166号码，在iPhone、MI6、ZIMIFI上使用一切正常，但是换到破解了联通4G使用功能的Nexus5上只能拨打电话收发短信无法使用数据网络，而这台N5之前使用其它联通号码用数据网络完全无问题。   

对比发现插入此166号码卡后N5移动网络设置中的 接入点名称(APN) 列表为空，选择新建接入点则出现错误提示“此用户无权修改接入点名称设置”。   

尝试搜索多种方式解决未果，最后想到找寻系统目录中与接入点APN相关的文件探查一下。   

由于手机已经root，进入 system/etc/ 目录，找到了apns-conf.xml这个文件，发现文件中配置了大量运营商的接入点信息。   

搜索文件中与联通相关的接入点，与能用此卡上网的MI6上的接入点3gnet对比，发现缺少mnc="09"的接入点，简单粗暴的复制了已有的一项粘贴到文件中，备份并替换原有文件，修改文件权限为原始状态。   

重启手机，进入APN，重置为默认设置，空空的界面出现了添加的这一个接入点。信号栏的LTE标志顺利出现。莫名其妙的是以上操作完成后再次从设置界面添加接入点居然可以顺利添加并保存了。  


```xml  

  /system/etc/apns-conf.xml


    <apn carrier="联通连接互联网 (China Unicom)"
      mcc="460"
      mnc="09"
      apn="3gnet"
      type="default,supl"
    />
``` 

comments: true 
-----

ps:附加信息：

国际移动用户识别码（IMSI：International Mobile Subscriber Identification Number）

IMSI=MCC+MNC+MSIN （移动国家号码MCC、移动网号MNC、移动用户识别码MSIN）

IMSI是区别移动用户的标志，储存在SIM卡中，可用于区别移动用户的有效信息。其总长度不超过15位，同样使用0~9的数字。

MCC是移动用户所属国家代号，占3位数字，中国的MCC规定为460。

MNC是移动网号码，由两位或者三位数字组成，用于识别移动用户所归属的移动通信网.

MSIN是移动用户识别码，用以识别某一移动通信网中的具体的移动用户。

```xml
目前MCC+MNC具体分配状况

移动：46000，46002，46007，46020；

联通：46001，46006，46009；

电信：46003，46005，46011；    

```

   
Tuesday, February 20, 2018