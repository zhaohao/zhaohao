---
layout: post 
title: "申请免费赛门铁克VeriSign-DV-SSL证书"
draft: false 
date: 2016-11-12
categories: 
  - "weblog"
---

![20111111-20161111](/images/2016-11-12-symantec-dv-ssl.jpg)

经过了StartSSL风波，最近一直使用acme.sh签署Let's Encrypt的ECC证书。  
今天偶然发现通过阿里云可以免费签署赛门铁克VeriSign的DV域名验证级别的一年期证书，马上尝试了下。

证书是通过国内的天威诚信数字证书管理系统自动签发，提交申请后，如果使用DNS验证，则添加验证CNAME记录，被系统检测到记录后自动就签署证书了。

相比较Let's Encrypt的证书，自我感觉Symantec的品牌更加“大气”一些，而且一年的时间比三个月更省心了。

不足的地方是无法像Let's Encrypt那样添加多个子域名，单个证书只能包含裸域和WWW子域，还有一点是没办法签署ECC证书了。

```c
签发者信息：
CN = Symantec Basic DV SSL CA - G1
OU = Domain Validated SSL
OU = Symantec Trust Network
O  = Symantec Corporation
C  = US 
```

Saturday, November 12, 2016
