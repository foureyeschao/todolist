// 加载各模块
import * as sidebar from '../ui/sidebar';
import * as todolistMain from '../ui/todolist';
import * as todolistDetail from '../ui/detail';
import levelChanger from '../ui/header/level-changer';
import createRandomTask from '../ui/header/random-task';
import searchBar from '../ui/header/search-bar';
import themeChanger from '../ui/header/theme-changer';

const levelChangeBtn = document.querySelector('.icon__level') as SVGElement;
const loginButton = document.querySelector('.site-header__loginButton') as HTMLSpanElement;
const loginIcon = document.querySelector('.site-header__loginIcon') as SVGElement;
const sidebarContent = document.querySelector('.sidebar__content') as HTMLDivElement;
const deleteData = document.querySelector('.sidebar__delete') as HTMLLIElement;
const section = document.querySelector('.todolist') as HTMLElement;
const detail = document.querySelector('.detail__paragraph') as HTMLTextAreaElement;
const randomTaskBtn = document.querySelector('.site-header__random-task__fire') as HTMLSpanElement;
const searchBox = document.querySelector('.site-header__search-box__content') as HTMLDivElement;
const searBarInput = document.querySelector('.site-header__search-box__input') as HTMLInputElement;
const addBtn = document.querySelector('.icon__add') as SVGElement;
const themeBtn = document.querySelector('.site-header__theme-btn') as HTMLDivElement;

// header 区域
// 开启查找任务功能
searchBox.addEventListener('click', searchBar.openSearchTask);

// 查找任务
searBarInput.addEventListener('keyup', searchBar.searchTask);

// 添加任务
searBarInput.addEventListener('keyup', searchBar.addTask2);
addBtn.addEventListener('click', searchBar.addTask1);

// 添加随机任务
randomTaskBtn.addEventListener('click', createRandomTask);

// 切换任务类型
levelChangeBtn.addEventListener('click', levelChanger.changeLevel.bind(levelChanger));

// 切换主题
themeBtn.addEventListener('click', themeChanger.changeTheme);

// 显示登陆注册功能模态框
loginButton.addEventListener('click', createLoginPopupDesktop());

// 显示登陆注册功能模态框：手机模式
loginIcon.addEventListener('click', createLoginPopupPhone());

// sideBar 区域
// 左侧任务栏类别、等级导航
sidebarContent.addEventListener('click', sidebar.navigate);

// todolist 区域
// 修改任务标题
section.addEventListener('focusout', todolistMain.changeTaskTitle);

// 任务已完成功能
section.addEventListener('click', todolistMain.finishTask);

// 删除任务
section.addEventListener('click', todolistMain.deleteTask);

// 点击任务显示详情
section.addEventListener('click', todolistMain.showTaskDetail);

// 右侧任务详情区域
detail.addEventListener('focusout', todolistDetail.refreshDetail);

// 显示删库模态框
deleteData.addEventListener('click', createDeletePopup());

// 动态加载的登录框
function createLoginPopupDesktop() {
  return () => {
    import(/* webpackChunkName: "login", webpackPrefetch: true */ '../ui/popups/login-popup').then(
      ({ default: loginPopup }) => {
        loginPopup.createPopup();
      },
    );
  };
}

// 动态加载的登录框
function createLoginPopupPhone() {
  return () => {
    import(/* webpackChunkName: "login", webpackPrefetch: true */ '../ui/popups/login-popup').then(
      ({ default: loginPopup }) => {
        loginPopup.createPopup();
      },
    );
  };
}

// 动态加载的删除任务框
function createDeletePopup() {
  return () => {
    import(/* webpackChunkName: "delete-all", webpackPrefetch: true */ '../ui/popups/deleteAll-popup').then(
      ({ deleteAllPopup }) => {
        deleteAllPopup.createPopup();
      },
    );
  };
}
