---
layout: post 
title: "Github配置GPG提交签名"
draft: false 
date: 2024-06-30
categories: 
  - "featured"
  - "weblog"
tags: 
  - "github"
  - "gpg"
---

本文为在Github Desktop下配置提交签名的操作步骤。

通过 [GPG4WIN](https://www.gpg4win.org/) 下载Windows版本的GnuPG软件包。**导入已有证书或者生成新的证书密钥**。邮箱地址需要为Github提交所需邮箱地址。证书管理里找到相应公钥的ID，后续配置文件需要用到。如果Gpg4Win为默认路径安装，会在 `C:\Program Files (x86)\` 目录下增加 `GnuPG` 和 `Gpg4win` 两个文件夹。在 `GnuPG` 文件夹中的 `bin` 文件夹里有配置文件所需的 `gpg.exe` 文件。

使用文本工具打开 `C:\Users*UserName_\Documents\GitHub*RepoName_.git\config` 文件。 在其中添加配置项（如下为自己的邮箱证书密钥ID）:

```ini
[user]
  name = zhaohao  #用户名
  email = hao@zhao.im  #邮箱
  signingkey = 312628B6DCFCD4EE  #GPG密钥ID
[gpg]
  program = C:\\Program Files (x86)\\GnuPG\\bin\\gpg.exe  #GPG程序路径,需要双反斜杠
[commit]
  gpgsign = true  #对Commit启用GPG签名
```

配置完成后，再次在Github中提交新的更改时，会验证相应证书密码，并在Github提交列表中显示已验证。

> This commit was signed with the committer's verified signature.  
> zhaohao  
> GPG Key ID: 312628B6DCFCD4EE

Sunday, June 30, 2024
