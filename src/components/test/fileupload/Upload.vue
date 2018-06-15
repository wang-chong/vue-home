<template>
  <div class="hy-upload">
    <span class="upload-title">图片</span>
    <div class="upload-icon">
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="upload-input"
        :disabled="disabled"
        @change="onChange"
      >
    </div>
    <div class="pic-list" v-if="waitList.length > 0">
      <div
        class="wait-pic"
        v-for="pic in waitList"
        :style="{backgroundImage: `url(${pic.url})`}"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ajax from './ajax'

export default {
  props: {
    disabled: Boolean,
    beforeRead: Function,
    beforeUpload: Function,
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  data () {
    return {
      waitList: [],
      httpRequest: ajax
    }
  },
  methods: {
    onChange (event) {
      const vm = this
      let { files } = event.target
      if (vm.disabled || !files.length) {
        return
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0)
      if (!files || (vm.beforeRead && !vm.beforeRead(files))) {
        return
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(vm.readFile)).then(contents => {
          let oversize = false
          const payload = files.map((file, index) => {
            if (file.size > vm.maxSize) {
              oversize = true
            }

            return {
              file: files[index],
              content: contents[index]
            }
          })

          vm.onAfterRead(payload, oversize)
        })
      } else {
        vm.readFile(files).then(content => {
          vm.onAfterRead(
            { file: files, content },
            files.size > vm.maxSize
          )
        })
      }
    },
    readFile (file) {
      const vm = this
      return new Promise(resolve => {
        const reader = new FileReader()

        reader.onload = event => {
          resolve(event.target.result)
        }

        if (vm.resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (vm.resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },
    onAfterRead (files, oversize) {
      if (oversize) {
        this.$emit('oversize', files)
        return false
      } else {
        this.afterRead && this.afterRead(files)
        this.$refs.input && (this.$refs.input.value = '')
      }
    },
    afterRead (file) {
      let doUpload = true
      if (this.beforeUpload) {
        // 此处返回false可以阻止上传
        doUpload = this.beforeUpload()
      }
      if (doUpload !== false) {
        // 开始向后台上传图片
        this.handleFile(file)
        this.waitList.push({ url: file.content })
      }
    },
    handleFile (file) {
      // const { uid } = file;
      const options = {
        headers: this.headers || {},
        withCredentials: this.withCredentials || false,
        file: file,
        data: this.data,
        filename: this.name,
        action: '/api/common/file/upload',
        onProgress: e => {
          console.log(e)
        },
        onSuccess: res => {
          console.log(res)
          // this.onSuccess(res, file);
          // delete this.reqs[uid];
        },
        onError: err => {
          console.log(err)
          // this.onError(err, file);
          // delete this.reqs[uid];
        }
      };
      const req = this.httpRequest(options);
      // this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
      // var base64String = file.content
      // // 这里对base64串进行操作，去掉url头，并转换为byte
      // var bytes = window.atob(base64String.split(',')[1])

      // var array = []
      // for (var i = 0; i < bytes.length; i++) {
      //   array.push(bytes.charCodeAt(i))
      // }
      // var blob = new Blob([new Uint8Array(array)], {type: file.file.type})
      // var fd = new FormData()
      // fd.append('file', blob, file.file.name)
      // console.log(fd)
      // const onSuccess = (res) => {
      //   console.log(res)
      // }
      // const onError = (err) => {
      //   console.log(err)
      // }
      // api(ApiList.fileUpload, fd)
      // .then(onSuccess)
      // .catch(onError)
    }
  }
}
</script>

<style scoped>
.hy-upload{
  padding: 10px;
  text-align: left;
}
.upload-icon{
  width: 20px;
  height: 20px;
  overflow: hidden;
  float: right;
  border: 1px solid rgba(100,100,100,0.5);
  position: relative;
}
.upload-icon::before{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 1px;
  background-color: rgba(100,100,100,0.4);
}
.upload-icon::after{
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: rgba(100,100,100,0.4);
}
.upload-input{
  opacity: 0;
}
.pic-list{
  height: 60px;
  overflow: auto;
  border: 1px solid rgba(100,100,100,0.3);
}
.wait-pic{
  height: 100%;
  width: 60px;
  margin-right: 1%;
  float: left;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
