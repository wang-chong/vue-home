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
    <div class="card">
      姓名： 张三
      <p>年龄： 22</p>
      <p>加入时间：1{{w}}天</p>
    </div>
    <div class="card">
      姓名： 李四
      <p>年龄： 33</p>
      <p>加入时间：2{{c}}天</p>
    </div>
    <div class="card">
      姓名： 王五
      <p>年龄： 44</p>
      <p>加入时间：1259天</p>
    </div>
    <div class="card">
      考试结果
      <p>第一：{{w >= c ? '张三' : '李四'}}</p>
      <p>第二：王五</p>
      <p>第三：{{w < c ? '张三' : '李四'}}</p>
      <p>特殊：{{ w === c}}</p>
    </div>
  </div>
</template>

<script>
import { login, register, logout, getcore } from '@/assets/js/api/Common'

export default{
  data () {
    return {
      param: {
        userName: '',
        password: ''
      },
      w: 0,
      c: 0
    }
  },
  mounted () {
    this.getcore()
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
    },
    getcore () {
      const vm = this
      const onSuccess = (res) => {
        const data = res.data.split('^')
        const w = data[data.length - 5]
        const c = data[data.length - 4]
        vm.w = w
        vm.c = c
      }
      const onError = (res) => {
        console.log(res)
      }
      getcore(onSuccess, onError)
      setTimeout(() => {
        vm.getcore()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  border: 1px solid rgba(100,100,100,0.5);
  float: left;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>