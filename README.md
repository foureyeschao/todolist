# ToDoList

一个用原生 js 写的 ToDoList

### 项目特点

用 js 配合 CouchDB 实现 的 ToDoList

### 技术栈

ES5 + CSS3 + CouchDB

### 关联项目

- 设计部分：[todolist-design](https://github.com/norvca/todolist-design)

- 服务端部分：[todolist-backend](https://github.com/norvca/todolist-backend)

### 预览地址

https://norvca.github.io/todolist/app/dist

### 基本功能演示

![](http://g.recordit.co/0hhMlzvanm.gif)

### 同步功能演示

![](https://raw.githubusercontent.com/norvca/pictures/master/sync.gif)

## 项目进度

> 项目重新改版，进度清零

- [x] 增
- [x] 删
- [x] 改
- [x] 查
- [x] 显示任务日期
- [x] 页面主题选择功能
- [x] 给任务添加详情
- [x] 任务添加到不同的仓库
- [x] 任务按重要程度搜索
- [x] 已完成、垃圾箱功能
- [x] 清除全部任务
- [x] 随机事件发生器（实现一半效果）
- [ ] 登陆功能（游客登录与邮箱注册）
- [x] 实现中文模糊搜索功能
- [x] 代码模块化
- [x] ES6 重写
- [ ] 运用设计模式

## 已知问题

- [x] ~~时间戳功能有问题，新的时间戳栏会覆盖旧的日期栏~~

  通过 indexedDB 的 openCursor 游标里各项任务的时间属性 来判断是否添加新的时间戳

- [x] ~~元素 contenteditable 属性可供点选的范围会超过元素本身。~~

  使元素变成块级元素可解决该 BUG

- [x] ~~SVG 图标内有多个元素, 点击冒泡导致有时点击不到。~~

  给图标里内容添加 pointer-events: none; 属性

- [x] ~~点击左侧菜单栏时右侧任务详情更新不及时~~

  因为涉及异步操作，引入 promise 解决

- [x] ~~在中等宽度 (ipad) 页面显示不够好~~

  css 部分还是有待改进，看完 css: the missing manual 回来改进 css 部分

- [x] ~~数据库中 [xxx.openCursor().onsuccess](https://github.com/norvca/ToDoList/blob/1935a84e905c1bcc7dcb5afc021bc6603b771977/app/assets/js/modules/DB.js#L132) 里的代码里的代码会多执行一次~~

  没有把代码放入 `if(cursor)` 的判断条件里，会导致多执行一次。

- [x] ~~动态添加的 DOM 节点不能立刻触发 CSS 的 transition 属性~~

  用 CSS 的 animation 属性模拟第一次 transition 功能 , [参考链接](https://christianheilmann.com/2015/08/30/quicky-fading-in-a-newly-created-element-using-css/)
