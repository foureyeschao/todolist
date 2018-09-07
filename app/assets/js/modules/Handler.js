// 加载各模块
import {sidebarModule} from "./SidebarModule";
import {todolistModule} from "./TodolistModule";
import {detailModule} from "./DetailModule";
import {modalModule} from "./ModalModule";
import {signin} from "./Login/Signin";
import {signup} from "./Login/Signup";
import {helperFunction} from "./HelperFunction";


// 定义事件处理函数
const handler = (function() {
    // 变量声明
    const loginButton = document.querySelector(".site-header__loginButton");
    const loginIcon = document.querySelector(".site-header__loginIcon");
    const sidebarContent = document.querySelector(".sidebar__content");
    const deleteData = document.querySelector(".sidebar__delete");
    const section = document.querySelector(".todolist");
    const detail = document.querySelector(".detail__paragraph");
    const yes = document.querySelector(".modal__btn-yes");

    // header 区域
    // 显示登陆注册功能模态框
    loginButton.addEventListener("click", signin.createSingleLoginModal);
    loginIcon.addEventListener("click", signin.createSingleLoginModal);

    // 登陆按钮提交
    document.body.addEventListener("blur", signup.vertify, true);
    document.body.addEventListener("click", signup.submit);

    // 登陆注册栏切换
    document.body.addEventListener("click", signin.changeState);

    // 退出登陆框
    document.body.addEventListener("click", signin.exit);

    // sideBar 区域
    // 左侧任务栏类别、等级导航
    sidebarContent.addEventListener("click", sidebarModule.navigation);

    // 显示删库模态框
    deleteData.addEventListener("click", modalModule.createSingleDeleteModal);


    // todolist 区域
    // 修改任务标题
    section.addEventListener("focusout", todolistModule.changeTaskTitle);

    // 任务已完成功能
    section.addEventListener("click", todolistModule.finishTask);

    // 删除任务
    section.addEventListener("click", todolistModule.deleteTask);

    // 点击任务显示详情
    section.addEventListener("click", todolistModule.showTaskDetail);


    // 右侧任务详情区域
    detail.addEventListener("focusout", detailModule.refreshDetail);


    // 模态框区域
    // 是否清空数据库
    document.body.addEventListener("click", modalModule.deleteAllTasks);
    document.body.addEventListener("click", modalModule.regretDeleteTasks);
})();

export {handler};