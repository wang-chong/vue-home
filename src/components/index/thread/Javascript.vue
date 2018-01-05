<template>
  <div class="javascript">
    <div class="worker-box">
      <p>此计数来自worker1,后台运行的js,不会对页面产生阻塞</p>
      <p>count等于{{count}}</p>
      <button @click="workerStart(1)">worker1开始计数</button>
      <button @click="workerStop(1)">worker1停止计数</button>
    </div>
    <div class="worker-box">
      <p>待排序数组如下</p>
      <p>
        <span v-for="item in arr">{{item}}|</span>
      </p>
      <p>此排序来自worker2,后台运行的js,排序过程中不会对页面产生阻塞</p>
      <div v-if="arrResult.length > 0">
        <p>排序结果如下：</p>
        <span v-for="item in arrResult">{{item}}|</span>
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
      arr: [19, 73, 49, 40, 63, 49],
      arrResult: []
    }
  },
  methods: {
    workerStart (idx) {
      const vm = this
      if (typeof (Worker) !== 'undefined') {
        if (!workers[idx]) {
          const workerjs = '/static/js/worker/worker' + idx + '.js'
          workers[idx] = new Worker(workerjs)
          let message = ''
          switch (idx) {
            case 1:
              break
            case 2:
              message = vm.arr
              break
          }
          workers[idx].postMessage(message)
          workers[idx].onmessage = (msg) => {
            const result = msg.data
            switch (idx) {
              case 1:
                vm.count1 = result
                break
              case 2:
                vm.arrResult = result
                vm.workerStop(idx)
                break
            }
          }
        }
      }
    },
    workerStop (idx) {
      if (workers[idx]) {
        workers[idx].terminate()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.javascript{
  width: 6rem;
  margin: 0 auto;
  padding: 0.3rem;
  position: relative;
  background-color: #efebd0;
  border-radius: 8px;
  margin-top: 0.3rem;
  .worker-box{
    margin: 20px;
    border-radius: 8px;
    padding: 20px;
    background-color: #b1d7e8;
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
}
</style>
