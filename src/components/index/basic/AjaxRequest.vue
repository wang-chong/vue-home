<template>
  <div>
    <h-table
      :headers="headers"
      :bodylist="userList"
      :bodysProp="bodyProp"></h-table>
    <div class="operate create">
      <h3>增</h3>
      <h-input v-model="createUserName" />
      <button @click="createUser">增加一个用户</button>
    </div>
    <div class="operate delete">
      <h3>删</h3>
      <h-input v-model="deleteUserName" />
      <button @click="deleteUser">删除指定用户</button>
      <button @click="deleteLastUser">删除最后一个用户</button>
    </div>
    <div class="operate update">
      <h3>改</h3>
      <h-input v-model="updateUserName" />
      <button @click="updateUser">更新用户信息(软删除)</button>
    </div>
    <div class="operate refer">
      <h3>查</h3>
      <h-input v-model="referUserName" />
      <button @click="referUser">查询指定信息的用户</button>
    </div>
  </div>
</template>

<script>
import { getAllUser, deleteUser, deleteLastUser, updateUser, referUser } from '@/assets/js/api/User'
import { register } from '@/assets/js/api/Common'

export default {
  data () {
    return {
      // 表格数据，所有的用户
      userList: [],
      // 表格头部信息
      headers: ['用户名', '用户ID'],
      // 表格body部分数据的字段名
      bodyProp: ['userName', 'userId'],
      createUserName: '',
      deleteUserName: '',
      updateUserName: '',
      referUserName: ''
    }
  },
  mounted () {
    this.getAllUser()
  },
  methods: {
    // 查询所有用户
    getAllUser () {
      const vm = this
      const onSuccess = (res) => {
        vm.userList = res.data || []
      }
      getAllUser(onSuccess)
    },
    // 创建一个用户
    register () {
      const vm = this
      const param = {
        userName: vm.createUserName
      }
      const onSuccess = (res) => {
        if (res) {
          vm.getAllUser()
        }
      }
      register(param, onSuccess)
    },
    // 删除一个用户
    deleteUser () {
      const vm = this
      const param = {
        userName: vm.deleteUserName
      }
      const onSuccess = (res) => {
        if (res) {
          vm.getAllUser()
        }
      }
      deleteUser(param, onSuccess)
    },
    // 删除最后一个用户
    deleteLastUser () {
      const vm = this
      const onSuccess = (res) => {
        if (res) {
          vm.getAllUser()
        }
      }
      deleteLastUser(onSuccess)
    },
    // 更新用户信息
    updateUser () {
      const vm = this
      const param = {
        userName: vm.updateUserName
      }
      const onSuccess = (res) => {
        if (res) {
          vm.getAllUser()
        }
      }
      updateUser(param, onSuccess)
    },
    // 查询用户信息
    referUser () {
      const vm = this
      const param = {
        userName: vm.referUserName
      }
      const onSuccess = (res) => {
        vm.userList = res.data
      }
      referUser(param, onSuccess)
    }
  }
}
</script>

<style lang="scss" scoped>
.operate{
  margin-top: 0.2rem;
  background-color: #fff;
  padding: 0.1rem 0.05rem;
}
</style>