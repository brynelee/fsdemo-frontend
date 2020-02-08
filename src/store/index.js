import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: ''
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user;
        },
        auth_usernotexist(state){
            state.status = 'user_not_exist';
        },
        auth_passwordincorrect(state){
            state.status = 'password_incorrect';
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
        }
    },
    actions: {
        //{commit}是省略context的简写方式
        Login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
                //axios.post('/api/login', user)
                //axios.post('/api/login', {username: 'dahai', password: '666666'})
                axios({
                        method: 'post',
                        //url: `${this.baseURL}/getuserlist`
                        url: '/api/login',
                        params: user
                }).then(resp => {
                    console.log("Login axios request got response: ", resp);
                    let errorMessage, userToken, username;
                    //todo: based on error code to process login logic
                    let error_code = parseInt(resp.data.errorCode);

                    switch(error_code){
                        case 1: //login success, proceed with token proccesing
                        case 4: //token expired, proceed with token proccessing (save the new token too)
                            console.log("Store: login responded successfully, proceed to store the information.");
                            userToken = resp.data.userToken;
                            username = resp.data.username;
                            localStorage.setItem('token', userToken);
                            // 每次请求接口时，需要在headers添加对应的Token验证
                            axios.defaults.headers.common['Authorization'] = userToken;
                            // 更新token
                            commit('auth_success', userToken, username);
                            console.log("Store: the username is ", username);
                            break;

                        case 2: //todo: password is incorrect, need to tell the user to input again
                            errorMessage = resp.data.errorMessage;
                            console.log(errorMessage);
                            commit('auth_passwordincorrect');
                            break;

                        case 3: //todo: user does not exist, need to tell the user to input again or register
                            errorMessage = resp.data.errorMessage;
                            console.log(errorMessage);
                            commit('auth_usernotexist');
                    }

                    resolve(resp)
                }).catch(err => {
                    console.log("Login axios request got error: ", err);
                    commit('auth_error');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    reject(err)
                })
            })
        },
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/logout')
                    .then(response => {
                        commit('logout');
                        localStorage.removeItem('token');
                        // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
                        delete axios.defaults.headers.common['Authorization'];
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
        }
    },
    getters: {
        // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        loginStatus: state => state.status,
        user: state => state.user
    }
});

export default store;