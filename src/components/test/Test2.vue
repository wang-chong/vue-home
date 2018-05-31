<template>
  <div>
    <div class="register-form">
      <!-- <h4>注册新用户</h4> -->
      <h-input v-model="param.userName"></h-input>
      <h-input v-model="param.password"></h-input>
      <el-button type="primary" @click="register">register</el-button>
    </div>
    <div class="login-form">
      <!-- <h4>用户登录</h4> -->
      <h-input v-model="param.userName"></h-input>
      <h-input v-model="param.password"></h-input>
      <el-button type="primary" @click="login">login</el-button>
    </div>
    <div class="logout-form">
      <!-- <h4>用户登出</h4> -->
      <el-button type="primary" @click="logout">logout</el-button>
    </div>
  </div>
</template>

<script>
import { login, register, logout } from '@/assets/js/api/Common'

export default{
  data () {
    return {
      param: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      const onSuccess = (res) => {
        console.log(res)
      }
      const onError = () => {
        console.log('error')
      }
      register(this.param, onSuccess, onError)
    },
    login () {
      const onSuccess = (res) => {
        console.log(res)
      }
      const onError = () => {
        console.log('error')
      }
      login(this.param, onSuccess, onError)
    },
    logout () {
      const onSuccess = (res) => {
        console.log(res)
      }
      const onError = () => {
        console.log('error')
      }
      logout(this.param, onSuccess, onError)
    }
  }
}
</script>