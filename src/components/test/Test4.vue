<template>
  <div>
    <h3>文件上传</h3>
    <van-uploader :after-read="onRead">
      <van-icon name="photograph" />
    </van-uploader>
    <hy-upload
      :disabled="disabled"
      ></hy-upload>
  </div>
</template>

<script>
import ajax from '@/assets/js/Ajax'
import upload from '@/components/globalComponents/Upload'

export default {
  components: {
    'hy-upload': upload
  },
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    onRead (file) {
      console.log(file)
      this.handleFile(file)
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
