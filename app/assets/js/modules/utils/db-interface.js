// 加载数据库模块
import {userDB, visitorDB} from '../database/pouchDB';

let db;
// 初始数据库选择：用户数据库或游客数据库
if (localStorage.getItem('DB-name') && localStorage.getItem('CouchDB-auth')) {
  db = userDB;
} else {
  db = visitorDB;
}

function useUserDB() {
  db = userDB;
}

function useVisitorDB() {
  db = visitorDB;
  db.deleteAllTasks();
}

// 定义接口
const backendDB = {
  db,
  // 添加任务
  addTask(randomContent, ramdomLevel) {
    db.addTask(randomContent, ramdomLevel);
  },

  // 渲染任务到页面
  showTask(indexType, value) {
    db.showTask(indexType, value);
  },

  // 搜索任务
  searchTask(value) {
    db.searchTask(value);
  },

  // 修改任务
  modifyTask(idNum, attr, value) {
    db.modifyTask(idNum, attr, value);
  },

  // 展示任务详情
  showDetail(idNum) {
    db.showDetail(idNum);
  },

  // 删除全部任务
  deleteAllTasks() {
    db.deleteAllTasks();
  },
};

export {backendDB, useUserDB, useVisitorDB};
