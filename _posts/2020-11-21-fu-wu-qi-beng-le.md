---
layout: post 
title: "服务器崩了"
Date: 2020-11-21T02:11:00.000Z
pubDatetime: 2020-11-21T02:11:00.000Z
published: 2020-11-21T02:11:00.000Z
description: ""
author: "stardust"
tags: []
category: "Memos"
slug: "2020-11-21-fu-wu-qi-beng-le"
draft: false
---
服务器崩了。

![](/images/2020/2020-11-21-baa8a3f5.jpg)

一大早新装了SSH Shell，连到VPS看到更新和重启的提示，随手就给更新重启了，然后就没有然后了，连接无限超时，失联了。网页进KiviVM控制台看到QEMU-KVM Agent is not running inside VE，服务器崩了，旧的能用的快照过期清理了，数据什么的数据什么的只能通过新快照找回，就是网速不咋样很不愿费时间折腾了。好多年都是无脑upgrade -y，终于该来的还是来了，墨菲定理诚不我欺。

![](/images/2020/2020-11-21-27706014.jpg)

满血复活，看到有16号的自动备份，瞬间复活成功，不用不到200kB/s的速度下文件了。不知道那52个更新里哪个有问题，懒的先不更它了。

![](/images/2020/2020-11-21-c281a2d9.jpg)