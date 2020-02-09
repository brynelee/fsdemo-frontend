import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        status: '',
        //token: localStorage.getItem('token') || '',
        token: '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, user) {
            state.status = 'success';
            state.token = user.userToken;
            state.user = user;
        },
        auth_usernotexist(state) {
            state.status = 'user_not_exist';
        },
        auth_passwordincorrect(state) {
            state.status = 'password_incorrect';
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
            state.user = {};
        }
    },
    actions: {
        //{commit}是省略context的简写方式
        Login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
                // axios post params是url参数，data是payload内容，二者有区别。
                //axios.post('/usercenter/login', {username: 'dahai', password: '666666'})
                axios({
                    method: 'post',
                    //url: `${this.baseURL}/getuserlist`
                    url: '/usercenter/login',
                    params: user
                }).then(resp => {
                    console.log("Login axios request got response: ", resp);
                    let errorMessage;
                    let user = {};

                    //based on error code to process login logic
                    let error_code = parseInt(resp.data.errorCode);

                    switch (error_code) {
                        case 1: //login success, proceed with token proccesing
                        case 4: //token expired, proceed with token proccessing (save the new token too)
                            console.log("Store: login responded successfully, proceed to store the information.");
                            user.userToken = resp.data.userToken;
                            user.username = resp.data.username;
                            localStorage.setItem('token', user.userToken);
                            // 每次请求接口时，需要在headers添加对应的Token验证
                            axios.defaults.headers.common['Authorization'] = user.userToken;
                            // 更新token
                            commit('auth_success', user);
                            console.log("Store: the response username is ", user.username);
                            console.log("Store: the state.user is ", this.state.user);
                            break;

                        case 2: //password is incorrect, need to tell the user to input again
                            errorMessage = resp.data.errorMessage;
                            console.log(errorMessage);
                            commit('auth_passwordincorrect');
                            break;

                        case 3: //user does not exist, need to tell the user to input again or register
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
        Logout({commit}, logoutInfo) {
            console.log("Store: Logout will be sent to the server for user: ", logoutInfo.username);
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    //url: `${this.baseURL}/getuserlist`
                    url: '/usercenter/logout',
                    params: logoutInfo
                }).then(response => {
                    console.log("Store: User ", logoutInfo.username, "Logout got response from the server with error code ", response.data.errorCode);
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
        // getters主要用来生成一些派生属性。
        // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        username: state => state.user.username
    }
});

export default store;