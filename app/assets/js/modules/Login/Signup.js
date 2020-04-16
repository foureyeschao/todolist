import axios from 'axios';
import {
  checkLength,
  checkRequired,
  checkEmail,
  checkPasswordMatch,
  checkusername,
  checkpassword,
} from './validator';
import api from '../api/urls';
import * as loginPopup from '../layout/popups/login-popup';

function checkAndSubmit(e) {
  e.preventDefault();
  const signupForm = document.querySelector('.login__signup__form');
  const username = signupForm.querySelector('.username');
  const password = signupForm.querySelector('.password');
  const confirmPassword = signupForm.querySelector('.confirmPassword');
  const email = signupForm.querySelector('.email');

  const isCheckPassed = validate(username, password, confirmPassword, email);
  if (isCheckPassed) {
    submitInfo(username.value, password.value, email.value);
  }
}

function validate(username, password, confirmPassword, email) {
  const formControls = document.querySelectorAll(
    '.login__signup .form-control',
  );
  const list = Array.from(formControls);

  checkRequired([username, password, confirmPassword, email]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPassword);
  checkusername(username);
  checkpassword(password);

  // 检查前端输入是否全部通过
  const isCheckPassed = list.every(el => {
    return !el.classList.contains('form-error');
  });

  return isCheckPassed;
}

// 提交信息到服务端
function submitInfo(username, password, email) {
  axios
    .post(api.registerUrl, {
      username: username,
      password: password,
      email: email,
    })
    .then(res => {
      setSuccessInfo('注册成功！');
      loginPopup.exit();
      console.log(res.data);
    })
    .catch(err => {
      setErrorInfo('用户名已存在！');
      console.log(err.response.data);
    });
}

function setSuccessInfo(info) {
  const welcome = document.querySelector(
    '.login__signup .login__signup__welcome',
  );
  welcome.innerText = info;
  welcome.classList.remove('error');
}

function setErrorInfo(info) {
  const welcome = document.querySelector(
    '.login__signup .login__signup__welcome',
  );
  welcome.innerText = info;
  welcome.classList.add('error');
}

export {checkAndSubmit};
