<template>
    <div>
        <h1>Text here.</h1>
        <p>{{userTokenString}}</p>
        <button @click="showToken">Show Token</button>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'Key',
        data() {
            return {
                userTokenString: 'Not initialized yet.'
            }
        },
        beforeCreate() {

            let user = {};

            user.userToken = this.$route.query.token;
            user.username = "oauth";
            localStorage.setItem("token", user.userToken);
            console.log("Got token by oauth: ", user.userToken);
            // 每次请求接口时，需要在headers添加对应的Token验证
            axios.defaults.headers.common['Authorization'] = user.userToken;
            // 更新token
            this.$store.commit('auth_success', user);

            this.$router.replace({
                name:'userhome'
            })

        },
        methods: {
            showToken(){
                alert(localStorage.getItem("userToken"))
            }
        }

    }
</script>

<style scoped>

</style>