<template>
  <div class="hy-upload">
    <input
      ref="input"
      type="file"
      accept="image/*"
      class="upload-input"
      :disabled="disabled"
      @change="onChange"
    >
  </div>
</template>

<script>
import ajax from '@/assets/js/Ajax'

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
      }
    },
    handleFile (file) {
      var base64String = file.content
      // 这里对base64串进行操作，去掉url头，并转换为byte
      var bytes = window.atob(base64String.split(',')[1])

      var array = []
      for (var i = 0; i < bytes.length; i++) {
        array.push(bytes.charCodeAt(i))
      }
      var blob = new Blob([new Uint8Array(array)], {type: file.file.type})
      var fd = new FormData()
      fd.append('file', blob, file.file.name)
      console.log(fd)
      const onSuccess = (res) => {
        console.log(res)
      }
      const onError = (err) => {
        console.log(err)
      }
      const option = {
        url: `/upload`,
        method: 'post',
        data: fd
      }
      ajax(option, onSuccess, onError)
    }
  }
}
</script>

<style lang="scss" scoped>
.hy-upload{
  width: 50px;
  overflow: hidden;
  background-color: red;
  .upload-input{
    opacity: 0;
  }
}
</style>
