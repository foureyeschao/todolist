!function(e){function t(t){for(var o,s,c=t[0],l=t[1],u=t[2],d=t[3]||[],h=0,f=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(p&&p(t),a.push.apply(a,d);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return 0===i.length&&(a.forEach((function(e){if(void 0===r[e]){r[e]=null;var t=document.createElement("link");c.nc&&t.setAttribute("nonce",c.nc),t.rel="prefetch",t.as="script",t.href=s(e),document.head.appendChild(t)}})),a.length=0),e}var o={},r={6:0},i=[],a=[];function s(e){return c.p+""+({3:"delete-all-7c994651",5:"login-01e7b97c"}[e]||e)+"."+{3:"01ff2a2f90a1439f5d56",5:"ab075b45bf937bffa52e"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=s(e);var l=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u,h=(i.push([187,0,1,2]),n());t([[],{},0,[3,5]])}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));var o,r=n(17);function i(){o=r.a}function a(){(o=r.b).deleteAllTasks()}var s={db:o=localStorage.getItem("DB-name")&&localStorage.getItem("CouchDB-auth")?r.a:r.b,addTask:function(e,t){o.addTask(e,t)},showTask:function(e,t){o.showTask(e,t)},searchTask:function(e){o.searchTask(e)},modifyTask:function(e,t,n){o.modifyTask(e,t,n)},showDetail:function(e){o.showDetail(e)},deleteAllTasks:function(){o.deleteAllTasks()}}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(81),n(63),n(82);function o(e){return"userdb-".concat(function(e){e=unescape(encodeURIComponent(e));for(var t="",n=0;n<e.length;n++)t+=e.charCodeAt(n).toString(16);return t}(e))}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return q}));var o,r=n(118),i=n(25),a=n(17),s=n(51);function c(e,t,n){return new i.a(e.syncUrl,{fetch:function(e,o){return o.headers.set("X-CouchDB-dbName",t),o.headers.set("X-Auth-CouchDB-Token",n),o.credentials="omit",i.a.fetch(e,o)},skip_setup:!0})}function l(e,t){var n=document.querySelector(".todolist__sync-state");return i.a.sync(e,t,{live:!0,heartbeat:!1,timeout:!1,retry:!0}).on("active",(function(e){console.log(e),n.innerText="与云端硬盘同步数据中..."})).on("change",(function(e){console.log(e),a.a.showCurrentTask(),n.innerText="数据同步完成!"})).on("paused",(function(e){console.log(e)})).on("error",(function(e){console.log(e),localStorage.clear()}))}var u=n(0);n(79);var d=function(){var e=localStorage.getItem("User-name");return'<div class="profile-popup fade">\n                  <div class="profile-popup__container">\n                    <div class="profile-popup__utils">\n                      <span class="profile-popup__utils__return hidden">&larr;</span>\n                      <span class="profile-popup__utils__gap"></span>\n                      <span class="profile-popup__utils__close close">X</span>\n                    </div>\n                    <div class="profile-popup__content">\n                      <h2>你好，'.concat(e,'！</h2>\n                      <button class="profile-popup__btn profile-popup__btn--change-username button">修改用户名</button>\n                      <button class="profile-popup__btn profile-popup__btn--change-password button">修改密码</button>\n                      <button class="profile-popup__btn profile-popup__btn--logout button">登出</button>\n                    </div>\n                  </div>\n                </div>')},p=n(20),h=n(89),f=n.n(h);function m(e){var t=document.querySelector(".current-username"),n=document.querySelector(".new-username"),o=document.querySelector(".profile-popup__welcome");e.preventDefault(),f.a.post(s.a.changeUsernameUrl,{currentUsername:t,newUsername:n}).then((function(e){console.log(e.data)})).catch((function(e){o.innerText="用户名已存在！",o.classList.add("error"),console.log(e.response.data)}))}var _=function(){document.querySelector(".form__change-username").addEventListener("submit",m)};function v(){var e=document.querySelector(".site-header__login"),t=document.querySelector(".site-header__profile"),n=localStorage.getItem("User-name").slice(0,1).toUpperCase();t.firstElementChild.innerText=n,e.classList.add("hidden"),t.classList.remove("hidden"),t.addEventListener("click",g)}function g(){var e,t,n,o,r;document.body.insertAdjacentHTML("beforeend",d()),e=document.querySelector(".profile-popup__utils__close"),t=document.querySelector(".profile-popup__utils__return"),n=document.querySelector(".profile-popup__btn--logout"),o=document.querySelector(".profile-popup__btn--change-username"),r=document.querySelector(".profile-popup__btn--change-password"),e.addEventListener("click",T),t.addEventListener("click",S),o.addEventListener("click",y),r.addEventListener("click",b),n.addEventListener("click",k)}function y(){var e=document.querySelector(".profile-popup__container"),t=document.querySelector(".profile-popup__content");w(),t.classList.add("hidden"),e.insertAdjacentHTML("beforeend",'<div class="profile-popup__change-username">\n                          <h2 class="profile-popup__welcome">修改用户名</h2>\n                          <form class="profile-popup__form form form__change-username">\n                            <div class="form-control">\n                              <input\n                                class="current-username profile-popup__input"\n                                name="username"\n                                type="text"\n                                placeholder="当前用户名"\n                              />\n                              <p></p>\n                            </div>\n                            <div class="form-control">\n                              <input\n                                class="new-username profile-popup__input"\n                                name="newUsername"\n                                type="text"\n                                placeholder="新用户名"\n                              />\n                              <p></p>\n                            </div>\n                            <button class=\'profile-popup__button change-username__submit\' type="submit">提交</button>\n                          </form>\n                        </div>'),_()}function b(){var e=document.querySelector(".profile-popup__container"),t=document.querySelector(".profile-popup__content");w(),t.classList.add("hidden"),e.insertAdjacentHTML("beforeend",'<div class="profile-popup__change-password">\n                          <h2 class="profile-popup__welcome">修改密码</h2>\n                          <form class="profile-popup__form form form__change-password">\n                            <div class="form-control">\n                              <input\n                                class="password profile-popup__input"\n                                name="password"\n                                type="text"\n                                placeholder="当前密码"\n                              />\n                              <p></p>\n                            </div>\n                            <div class="form-control">\n                              <input\n                                class="new-password profile-popup__input"\n                                name="new-password"\n                                type="password"\n                                placeholder="输入新密码"\n                              />\n                              <p></p>\n                            </div>\n                            <div class="form-control">\n                              <input\n                                class="confirm-new-password profile-popup__input"\n                                name="confirm-new-password"\n                                type="password"\n                                placeholder="确认新密码"\n                              />\n                              <p></p>\n                            </div>\n                            <button class=\'profile-popup__button change-password__submit\' type="submit">提交</button>\n                          </form>\n                        </div>')}function k(){var e;localStorage.removeItem("User-name"),localStorage.removeItem("DB-name"),localStorage.removeItem("CouchDB-auth"),e=document.querySelector(".site-header__login"),document.querySelector(".site-header__profile").classList.add("hidden"),e.classList.remove("hidden"),T(),o.cancel(),Object(u.c)(),p.a.freshPage()}function T(){var e=document.querySelector(".profile-popup");document.body.removeChild(e)}function S(){var e=document.querySelector(".profile-popup__container");document.querySelector(".profile-popup__content").classList.remove("hidden");var t=document.querySelector(".profile-popup__change-username"),n=document.querySelector(".profile-popup__change-password");if(document.querySelector(".profile-popup__utils__return").classList.add("hidden"),t)return e.removeChild(t);e.removeChild(n)}function w(){document.querySelector(".profile-popup__utils__return").classList.remove("hidden")}function L(e,t){v(),Object(u.b)(),function(e,t,n){var i=Object(r.a)(t),a=c(s.a,i,n);o=l(e,a)}(a.a.db,e,t),a.a.showTask("taskType","work")}function q(){var e=localStorage.getItem("DB-name"),t=localStorage.getItem("CouchDB-auth"),n=localStorage.getItem("User-name");e&&t&&n?(!function(e){var t=localStorage.getItem("DB-name"),n=localStorage.getItem("CouchDB-auth"),r=c(s.a,t,n);o=l(e,r)}(a.a.db),v(),u.a.showTask("taskType","work")):u.a.showTask("taskType","work")}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));n(143),n(67),n(70),n(77),n(149),n(79),n(150),n(81),n(66),n(63),n(92),n(82),n(87),n(68),n(110);var o=n(25),r=n(128),i=n(20);n(69);function a(e){var t='<li id="things_'.concat(e._id,'" class="todolist__content ').concat(e.level,'" idnum="').concat(e._id,"\">\n                            <div>\n                              <span class='todolist__title' contenteditable='true' idnum=").concat(e._id,"> ").concat(e.title," </span>\n                            </div>\n                            <div class='icon__todo'>\n                              <svg class='icon icon__nofinish' aria-hidden='true' name='search' idnum=").concat(e._id,">\n                                <use class='icon__finish' xlink:href='#icon-eglass-finish1'></use>\n                                <use xlink:href='#icon-eglass-finish'></use>\n                              </svg>\n                              <svg class='icon icon__delete' aria-hidden='true' name='search' idnum=").concat(e._id,">\n                                <use xlink:href='#icon-delete'></use>\n                              </svg>\n                            </div>\n                          </li>");return document.createRange().createContextualFragment(t)}function s(e){var t=e.taskTime,n=e.taskWeek,o="<li class=\"todolist__time\">\n                            <span class='todolist__week'>".concat(n,"</span>\n                            <span class='todolist__date'>").concat(t,"</span>\n                          </li>");return document.createRange().createContextualFragment(o)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}o.a.plugin(r.a);var l=new o.a("userDB"),u=new o.a("visitorDB"),d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.db=t,this.toDayString=(new Date).toString(),this.input=i.a.get_input_element(),this.level=i.a.get_level_element(),this.taskLists=document.querySelector(".todolist__tasks"),this.detail=document.querySelector(".detail__paragraph"),this.detailTitle=document.querySelector(".detail__title")}var t,n,o;return t=e,(n=[{key:"addTask",value:function(e,t){var n=this.taskCreater(e,t);this.db.put(n).then((function(){console.log("添加到数据库成功！")})).catch((function(e){console.log(e)}))}},{key:"showTask",value:function(e,t){var n=this;return this.db.createIndex({index:{fields:[e]}}).then((function(){return"taskType"===e?n.db.find({selector:{taskType:t},sort:[{taskType:"desc"}]}).then((function(e){n.redrawTasksUI(e.docs)})):n.db.find({selector:{level:t},sort:[{level:"desc"}]}).then((function(e){n.redrawTasksUI(e.docs)}))}))}},{key:"showCurrentTask",value:function(){var e=document.querySelector(".sidebar__act").getAttribute("taskType");this.showTask("taskType",e)}},{key:"redrawTasksUI",value:function(e){var t="",n=document.createElement("ul");n.classList.add("todolist__list"),e.forEach((function(e){if(t!==e.taskTime){t=e.taskTime;var o=s(e);n.appendChild(o)}var r=a(e);n.appendChild(r)})),this.taskLists.innerHTML="",this.taskLists.appendChild(n),n.firstChild?(n.firstChild.nextSibling.classList.add("todolist__focus"),this.showDetail(e[length]._id)):this.showDetail()}},{key:"searchTask",value:function(e){var t,n=this,o=document.createElement("ul");o.classList.add("todolist__list"),console.log(this),this.db.allDocs({include_docs:!0,descending:!0}).then((function(r){if(r.rows.forEach((function(n){if((n=n.doc).title&&-1!==n.title.indexOf(e)){t!==n.taskTime&&(t=n.taskTime,o.appendChild(s(n)));var r=a(n);o.appendChild(r)}})),n.taskLists.innerHTML="",n.taskLists.appendChild(o),o.firstChild){var i=o.firstChild.nextSibling;i.classList.add("todolist__focus"),n.showDetail(i.getAttribute("idnum"))}else n.showDetail()}))}},{key:"modifyTask",value:function(e,t,n){var o=this;this.db.get(e).then((function(e){e[t]=n,o.db.put(e)}))}},{key:"showDetail",value:function(e){var t=this;e?this.db.get(e).then((function(e){var n=e.title,o=e.detail;t.detailTitle.innerText=n,t.detail.value=o,t.detail.placeholder="添加任务详情..."})):(this.detailTitle.innerText="",this.detail.value="",this.detail.placeholder="此分类目前没有任务哦~")}},{key:"deleteAllTasks",value:function(){var e=this;this.db.allDocs().then((function(t){return Promise.all(t.rows.map((function(t){return e.db.remove(t.id,t.value.rev)})))})).then((function(){i.a.freshPage()})).catch((function(e){console.log(e+"删除数据库失败！")}))}},{key:"taskCreater",value:function(e,t){var n=this.input.value,o=this.level.getAttribute("level"),r=(new Date).toLocaleDateString(),i=document.querySelector(".sidebar__act").getAttribute("taskType"),a=this.toDayString.slice.call(this.toDayString,0,3).toUpperCase(),s={_id:(new Date).toISOString(),title:n,level:o,taskTime:r,taskType:i,taskWeek:a,detail:null};return e&&(s.title=e,s.level=t),s}}])&&c(t.prototype,n),o&&c(t,o),e}(),p=new d(l),h=new d(u)},170:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);n(63),n(92),n(67),n(68);var o=n(0),r=[0,1,2];n(160),n(162),n(163),n(69),n(129),n(165),n(77),n(79),n(81),n(166),n(82),n(87),n(110);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=["level-light","level-usual","level-heavy"],c=["bgc-light","bgc-usual","bgc-heavy"];var l=document.querySelector(".icon__level"),u=document.querySelector(".site-header__loginButton"),d=document.querySelector(".site-header__loginIcon"),p=document.querySelector(".sidebar__content"),h=document.querySelector(".sidebar__delete"),f=document.querySelector(".todolist"),m=document.querySelector(".detail__paragraph");l.addEventListener("click",(function(){s=[].concat(i(s.slice(1)),i(s.slice(0,1))),c=[].concat(i(c.slice(1)),i(c.slice(0,1))),function(){var e=document.querySelector(".icon__level");e.setAttribute("class","icon icon__level ".concat(s[0])),e.setAttribute("level",c[0])}()})),u.addEventListener("click",(function(){n.e(5).then(n.bind(null,191)).then((function(e){(0,e.createPopup)()}))})),d.addEventListener("click",(function(){n.e(5).then(n.bind(null,191)).then((function(e){(0,e.createPopup)()}))})),p.addEventListener("click",(function(e){var t=document.querySelectorAll(".sidebar__list-type"),n=e.target;if(n.classList.contains("sidebar__list-type")){t.forEach((function(e){e.classList.remove("sidebar__act")})),n.classList.add("sidebar__act");var i=n.getAttribute("taskType");o.a.showTask("taskType",i)}else if(n.classList.contains("sidebar__list-level")){r.push(r.shift());var a=n.children,s=a[r[0]],c=s.getAttribute("level");Array.prototype.forEach.call(a,(function(e){e.classList.remove("active")})),s.classList.add("active"),o.a.showTask("level",c)}})),f.addEventListener("focusout",(function(e){if("SPAN"===e.target.tagName.toUpperCase()){var t=e.target,n=t.getAttribute("idnum"),r=t.innerText;o.a.modifyTask(n,"title",r)}})),f.addEventListener("click",(function(e){var t=document.querySelector(".todolist__list"),n=document.querySelector(".todolist__focus");if(e.target.classList.contains("icon__nofinish")){var r=e.target.getAttribute("idnum");o.a.modifyTask(r,"taskType","finish");var i=e.target.parentNode.parentNode,a=i.previousSibling.classList.contains("todolist__content"),s=i.nextSibling;if((!a&&null==s||!a&&!s.classList.contains("todolist__content"))&&i.parentNode.removeChild(i.previousSibling),i.parentNode.removeChild(i),t.firstChild){if(i===n){var c=t.firstChild.nextSibling;c.classList.add("todolist__focus"),o.a.showDetail(c.getAttribute("idnum"))}}else o.a.showDetail()}})),f.addEventListener("click",(function(e){var t=document.querySelector(".todolist__list"),n=document.querySelector(".todolist__focus");if(e.target.classList.contains("icon__delete")){var r=e.target.getAttribute("idnum");o.a.modifyTask(r,"taskType","bin");var i=e.target.parentNode.parentNode,a=i.previousSibling.classList.contains("todolist__content"),s=i.nextSibling;if((!a&&null==s||!a&&!s.classList.contains("todolist__content"))&&i.parentNode.removeChild(i.previousSibling),i.parentNode.removeChild(i),t.firstChild){if(i===n){var c=t.firstChild.nextSibling;c.classList.add("todolist__focus"),o.a.showDetail(c.getAttribute("idnum"))}}else o.a.showDetail()}})),f.addEventListener("click",(function(e){if(e.target.classList.contains("todolist__content")){var t=e.target.parentNode.childNodes,n=e.target.getAttribute("idnum");t.forEach((function(e){e.classList.remove("todolist__focus")})),e.target.classList.add("todolist__focus"),o.a.showDetail(n)}})),m.addEventListener("focusout",(function(){var e=document.querySelector(".todolist__focus").getAttribute("idnum"),t=this.value;o.a.modifyTask(e,"detail",t)})),h.addEventListener("click",(function(){n.e(3).then(n.bind(null,192)).then((function(e){(0,e.createPopup)()}))}));n(83),n(66),n(168);function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=document.querySelector(".site-header__random-task__fire"),g=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.randomTaskBtn=t,this.randomContent=n,this.randomLevel=o,this.event()}var t,n,r;return t=e,(n=[{key:"event",value:function(){this.randomTaskBtn.addEventListener("click",this.randomTask.bind(this))}},{key:"randomTask",value:function(){var e=parseInt(Math.random()*this.randomContent.length),t=parseInt(3*Math.random()),n=document.querySelector(".sidebar__act").getAttribute("taskType");o.a.addTask(this.randomContent[e],this.randomLevel[t]),o.a.showTask("taskType",n)}}])&&_(t.prototype,n),r&&_(t,r),e}();new g(v,["读完那本英文原著","中午去睡个好觉","日语入门学习","尝试做些家常菜","了解一些设计常识"],["bgc-light","bgc-usual","bgc-heavy"]);var y=n(20);function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var k=document.querySelector(".site-header__search-box__content"),T=document.querySelector(".icon__add"),S=y.a.get_input_element(),w=y.a.inActColor,L=function(){function e(t,n,o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.searchBox=t,this.addBtn=n,this.input=o,this.inActColor=r,this.event()}var t,n,r;return t=e,(n=[{key:"event",value:function(){this.searchBox.addEventListener("click",this.openSearchTask.bind(this)),this.input.addEventListener("keyup",this.searchTask),this.input.addEventListener("keyup",this.addTask2.bind(this)),this.addBtn.addEventListener("click",this.addTask1.bind(this))}},{key:"openSearchTask",value:function(e){var t=document.querySelector(".sidebar__act").getAttribute("taskType");e.target.classList.contains("icon__search")&&(this.inActColor(e.target),this.inActColor(this.input),this.inActColor(this.searchBox),this.input.focus(),this.input.value="",this.input.classList.contains("act-color")||o.a.showTask("taskType",t))}},{key:"searchTask",value:function(e){e.target.classList.contains("act-color")&&o.a.searchTask(this.value)}},{key:"addTask1",value:function(){var e=document.querySelector(".sidebar__act").getAttribute("taskType");this.input.value&&(o.a.addTask(),o.a.showTask("taskType",e),this.input.value="")}},{key:"addTask2",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event,t=e.which||e.keyCode||e.charCode,n=document.querySelector(".sidebar__act").getAttribute("taskType");document.activeElement.value&&13==t&&"INPUT"===document.activeElement.tagName.toUpperCase()&&(o.a.addTask(),o.a.showTask("taskType",n),this.input.value="")}}])&&b(t.prototype,n),r&&b(t,r),e}();new L(k,T,S,w);function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var C=document.querySelector(".site-header"),A=document.querySelector(".site-header__theme-btn"),E=function(){function e(t,n,o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.theme=t,this.themeIconName=n,this.siteHeader=o,this.themeBtn=r,this.event()}var t,n,o;return t=e,(n=[{key:"event",value:function(){this.themeBtn.addEventListener("click",this.changeTheme.bind(this))}},{key:"changeTheme",value:function(){var e=this.themeBtn.children[0].children[0];this.theme.push(this.theme.shift()),this.themeIconName.push(this.themeIconName.shift()),this.siteHeader.setAttribute("class","site-header "+this.theme[0]),e.setAttribute("xlink:href",this.themeIconName[0])}}])&&q(t.prototype,n),o&&q(t,o),e}();new E(["","theme-green","theme-purple","theme-gradual"],["#icon-theme","#icon-theme1","#icon-theme2","#icon-theme3"],C,A);n(170);var x=n(127);Object(x.b)()},20:function(e,t,n){"use strict";var o=document.querySelector(".todolist__sync-state"),r=document.querySelector(".todolist__tasks"),i=document.querySelector(".detail__paragraph"),a=document.querySelector(".detail__title"),s={get_input_element:function(){return document.querySelector(".site-header__search-box__input")},get_level_element:function(){return document.querySelector(".icon__level")},inActColor:function(e){return e.classList.toggle("act-color")},freshPage:function(){o.innerText="",r.innerText="",a.innerText="",i.innerText=""}};t.a=s},51:function(e,t,n){"use strict";t.a={syncUrl:"http://192.168.71.129:4000",signinUrl:"http://192.168.71.129:3000/api/user/login",registerUrl:"http://192.168.71.129:3000/api/user/register",changeUsernameUrl:"http://192.168.71.129:4000/api/user/changeUsername"}}});