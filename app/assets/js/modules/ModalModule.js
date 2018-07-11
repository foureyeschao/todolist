// 加载数据库模块
import {backendDB as db} from "./BackendDB";

const modalModule = {
  // 是否清空数据库功能
  isDeleteDB(e){
    if( e.target.classList.contains("modal__btn-yes") ) {
      this.classList.remove("modal--visible");
      db.deleteAllTasks();
    } else if ( e.target.classList.contains("modal__btn-no") ) {
      this.classList.remove("modal--visible");
    }
  }
};

export {modalModule};