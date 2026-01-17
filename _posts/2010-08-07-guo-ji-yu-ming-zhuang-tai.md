---
layout: post 
title: "国际域名状态"
draft: false 
date: 2010-08-07
categories: 
  - "weblog"
---

1、.com.net国际域名几种状态  
  
<Active> 正常状态  
  
<Server Hold> 注册局暂停，域名没有解析，可以续费  
  
<Server Update prohibited> 注册局禁止更新，不能修改，可以续费  
  
<Server Transfer prohibited> 注册局禁止转移，不能转移注册商  
  
<Server Delete prohibited> 注册局禁止删除  
  
<Server Renew prohibited> 注册局禁止续费  
  
<Client Hold> 注册商暂停，域名没有解析，可以续费  
  
<Client Update prohibited> 注册商禁止更新，不能修改，可以续费  
  
<Client Transfer prohibited> 注册商禁止转移，不能转移注册商  
  
<Client Delete prohibited> 注册商禁止删除  
  
<Client Renew prohibited> 注册商禁止续费  
  
<Redemption period> 偿还期，域名过期后由注册商申请删除域名，域名进入偿还期，偿还期30天内不能正常使用，但可以交纳赎回费用恢复域名，否则进入删除期  
  
<Pending Restore> 域名进入偿还期后，由注册商申请恢复，交费后进入恢复期，提交报告后，域名可以恢复正常  
  
<Pending Delete> 域名30天偿还期后进入5天的删除期，删除期不允许其他人注册，此状态表明域名即将被删除释放  
  
<Pending Transfer> 域名处于转移状态  
  
  
2、org的几种域名状态  
  
<OK>This is the nominal status value for a domain object at all times,whether or not the domain has pending operations or prohibitions.  
  
正常状态，可以做任何操作  
  
<New>This is the nominal status for a newly created domain object. The domain can be modified unless locked.  
  
 新注册，可以修改，但不能进行锁定lock操作  
  
<Active>The domain can be modified and appears in a zone. This is the nominal status for a domain object once it has been published in a zone.  
  
正常状态,可以修改，正常解析  
  
<Locked>The domain cannot be transferred, renewed, or deleted. (Though the status value can be changed.) Hierarchical and associated objects cannot be added or removed from the domain object.  
  
锁定，域名解析正常，不能更改任何信息，不能转移注册商  
  
<Hold>The domain will not be published in a zone for DNS resolution. Names without at least two name servers may be placed on Hold status; in this case submit nameserver data through your registrar.  
  
暂停，域名没有被解析，不能正常使用。被暂停的原因较多，应联系当前注册商查询原因并申请解除  
  
<Pending Transfer>A transfer request has been received for the domain, and completion of the request is pending.The domain cannot be renewed, deleted, or updated while in this state.  
  
转移中，表明已经有注册上提出转移入申请，正等待当前注册商是否同意的过程中。此状态不能更改人和信息，不能续费,域名解析正常，不影响使用  
  
<Pending Delete Restorable>A delete request has been received for the domain. The domain has been removed from the zone,but has not yet been purged from the registry database. The domain cannot be renewed, deleted,transferred, or updated while in this state.  
  
偿还期，缴纳手续费可以恢复，此状态最多保持30天  
  
<PENDING DELETE – SCHEDULED FOR RELEASE>  
  
删除期 不可恢复，等待删除释放后重新注册  
  
<Client Hold>The domain will not be published in a zone for DNS resolution.  
  
用户申请hold,没有解析  
  
<Client Lock>The domain cannot be transferred, renewed, deleted, or updated.An update command may be used to change the status value. Hierarchical and associated objects cannot not be added or removed from the domain object.  
  
用户申请锁定，不能转移、不能删除、不能更改。如果要更改信息，必须先更改这个状态  
  
<Inactive>  
  
域名没有解析，不能正常使用。一般是由于域名的dns没有填写，或填写不完整造成的，最少需要填写2个dns才能正常解析。  
  

stardust@live.com

stardust@live.com
