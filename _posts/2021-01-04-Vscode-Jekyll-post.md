---
layout: post 
title: "VSCode中插入jekyll文章模版"
draft: false 
date: 2021-01-04
categories: 
  - "weblog"
tags: 
  - "ai"
---

使用Visual Studio Code中的代码片段Snippets功能，可以方便的插入所需的文件头。  
创建全局Snippets，使用一些当前日期时间变量，插入所需格式的信息。

```json
{
    "jekyll post": {
        "scope": "",
        "prefix": "jekyll",
        "body": [
            "---",
            "layout: post",
            "title: $0  ",
            "subtitle:  ",
            "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:00 +0800 ",
            "categories: ",
            "  - Diary",
            "description: ",
            "image: /assets/img/post-default.jpg ",
            "image: /Media/$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE-.jpg ",
            "---",
            "$CURRENT_DAY_NAME, $CURRENT_MONTH_NAME $CURRENT_DATE, $CURRENT_YEAR",
            "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE-.md",
            ""
        ]

    }
}
```

![mousegif](/images/KDCys4g40gExXDK5NQGjNBgzyoCNT2MScQU5GgHz0IgprACBTIekVIgyu0CDyyhEs4FlA4hbOSAUjE51FUuITEl4Vc+AcU2IVQKHNgOIZkWIZmCIBEeIY0yHHBpoYW+IVuyINiGId0WIcYoj12mId6mGSQQAIasIV7yEl4WIaBAAAAOw==)

Monday, January 04, 2021
