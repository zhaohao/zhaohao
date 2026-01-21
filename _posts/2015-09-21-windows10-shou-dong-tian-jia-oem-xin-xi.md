---
layout: post 
title: "Windows10手动添加OEM信息"
Date: 2015-09-21T09:17:00.000Z
pubDatetime: 2015-09-21T09:17:00.000Z
published: 2015-09-21T09:17:00.000Z
description: ""
author: "stardust"
tags: []
category: "Default"
slug: "2015-09-21-windows10-shou-dong-tian-jia-oem-xin-xi"
draft: false
---
![oemlogo256px](/images/2015/2015-09-21-7b5b94f3.png)  
  

```
<li>第一步：选取OEM logo素材，调整尺寸为方形（必须，否则图片无法正确显示），为了保证logo原始比例可以用画布留白的方式调整，保存为 oemlogo.bmp 。</li><li>第二步：将 oemlogo.bmp 保存到目录 C:WindowsSystem32oobe ，需要管理员权限。</li><li>第三步：进注册表编辑器找到注册表项 HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionOEMInformation ，没有则新建。在此项中新建名为 Manufacturer 和 Model 的字符串项，值分别对应制造商和型号。新建名为 Logo 的可扩充字符串项，值对应OEM LOGO路径 C:WindowsSystem32oobeoemlogo.bmp </li><li>第四步：退出注册表，进电脑属性看效果。</li>
```

  
  
![2015-09-21-sysinfo](/images/2015/2015-09-21-f79d0490.png)

stardust@live.com