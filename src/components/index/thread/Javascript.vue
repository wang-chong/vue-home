<template>
  <div>
    <div class="worker-box">
      <p>此计数来自worker1,后台运行的js,不会对页面产生阻塞</p>
      <p>count等于{{count}}</p>
      <button @click="workerStart(1)">worker1开始计数</button>
      <button @click="workerStop(1)">worker1停止计数</button>
    </div>
    <div class="worker-box">
      <p>待排序数组如下</p>
      <p v-for="item in arrs">
        {{item}}
      </p>
      <p>此排序来自worker2,后台运行的js,排序过程中不会对页面产生阻塞,并且启用了两次woker2，分别对两个数组进行了排序</p>
      <div v-if="arrResult.length > 0">
        <p>数组1排序结果如下：</p>
        <span>{{arrResult}}</span>
      </div>
      <div v-if="arrResult1.length > 0">
        <p>数组2排序结果如下：</p>
        <span>{{arrResult1}}</span>
      </div>
      <button @click="workerStart(2)">worker2开始排序</button>
    </div>
    <div class="worker-box">
      <h4>总结(注意事项)</h4>
      <ol>
        <li>worker和主线程的通信只能通过postMessage(msg)的形式，并且msg里面不能包含函数,也就是说worker里面不能执行主线程的回调</li>
        <li>运行结束之后在主线程中记得停止worker的运行，否则将会一直监听worker的message</li>
        <li>一般用于比较消耗CPU的功能，防止页面因为js的计算导致假死，上面的worker1就没有必要使用worker</li>
      </ol>
    </div>
  </div>
</template>

<script>
const workers = {}

export default {
  data () {
    return {
      count: 0,
      arrs: [[19, 73, 49, 40, 63, 49], [81, 74, 20, 88, 293, 8, 290, 67]],
      arrResult: [],
      arrResult1: []
    }
  },
  methods: {
    workerStart (idx) {
      const vm = this
      if (typeof (Worker) !== 'undefined') {
        if (!workers[idx]) {
          const workerjs = '/static/js/worker/worker' + idx + '.js'
          workers[idx] = new Worker(workerjs)
          switch (idx) {
            case 1:
              workers[idx].postMessage('')
              workers[idx].onmessage = (msg) => {
                vm.count = msg.data
              }
              break
            case 2:
              workers[idx].postMessage(vm.arrs[0])
              workers[idx + '2'] = new Worker(workerjs)
              workers[idx + '2'].postMessage(vm.arrs[1])
              workers[idx].onmessage = (msg) => {
                vm.arrResult = msg.data
                vm.workerStop(idx)
              }
              workers[idx + '2'].onmessage = (msg) => {
                vm.arrResult1 = msg.data
                vm.workerStop(idx + '2')
              }
              break
          }
        }
      }
    },
    workerStop (idx) {
      if (workers[idx]) {
        workers[idx].terminate()
        workers[idx] = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.worker-box{
  margin: 20px;
  border-radius: 8px;
  padding: 20px;
  background-color: #b1d7e8;
  div{
    margin: 10px 0;
  }
  p{
    margin-bottom: 10px;
  }
  ol{
    list-style-type: simp-chinese-formal;
    li{
      margin: 10px 0;
    }
  }
}
</style>
