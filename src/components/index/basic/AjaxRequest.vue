<template>
  <div>
    <table>
      <thead>
        <th>用户名</th>
        <th>用户ID</th>
      </thead>
      <tbody>
        <tr v-for="item in userList">
          <td>{{ item.userName }}</td>
          <td>{{ item.userId }}</td>
        </tr>
      </tbody>
    </table>
    <div class="operate create">
      <h3>增</h3>
      <my-input v-model="createUserName" />
      <button @click="createUser">增加一个用户</button>
    </div>
    <div class="operate delete">
      <h3>删</h3>
      <my-input v-model="deleteUserName" />
      <button @click="deleteUser">删除指定用户</button>
      <button @click="deleteLastUser">删除最后一个用户</button>
    </div>
    <div class="operate update">
      <h3>改</h3>
      <my-input v-model="updateUserName" />
      <button @click="updateUser">更新用户信息(软删除)</button>
    </div>
    <div class="operate refer">
      <h3>查</h3>
      <my-input v-model="referUserName" />
      <button @click="referUser">查询指定信息的用户</button>
    </div>
  </div>
</template>

<script>
import { getAllUser, createUser, deleteUser, deleteLastUser, updateUser, referUser } from '@/assets/js/api/User'

export default {
  data () {
    return {
      userList: [],
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
    getAllUser () {
      const vm = this
      getAllUser()
      .then(function (res) {
        vm.userList = res.data || []
      })
      .catch(function (res) {
        console.log('catch')
        console.log(res)
      })
    },
    createUser () {
      const vm = this
      createUser({
        userName: vm.createUserName
      })
      .then((res) => {
        if (res) {
          vm.getAllUser()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    deleteUser () {
      const vm = this
      deleteUser({
        userName: vm.deleteUserName
      })
      .then((res) => {
        if (res) {
          vm.getAllUser()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    deleteLastUser () {
      const vm = this
      deleteLastUser()
      .then((res) => {
        if (res) {
          vm.getAllUser()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    updateUser () {
      const vm = this
      updateUser({
        userName: vm.updateUserName
      })
      .then((res) => {
        if (res) {
          vm.getAllUser()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    referUser () {
      const vm = this
      referUser({
        userName: vm.referUserName
      })
      .then((res) => {
        vm.userList = res.data
      })
      .catch((e) => {
        console.log(e)
      })
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