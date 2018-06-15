<template>
  <div class="test1">
    <el-upload
      class="avatar-uploader"
      action='/api/common/file/upload'
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="img">
      <img :src="src">
    </div>
    <button @click="getFileUrlById">获取图片</button>
    <vh-upload></vh-upload>
  </div>
</template>

<script>
import { getFileUrlById } from '@/assets/js/api/Common'
import upload from './fileupload/Upload'

export default {
  components: {
    'vh-upload': upload
  },
  data () {
    return {
      imageUrl: '',
      fileId: null,
      src: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.fileId = res
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      return true
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
    },
    getFileUrlById () {
      const onSuccess = (res) => {
        this.src = res.data.url
      }
      const onError = (err) => {
        console.log(err)
      }
      getFileUrlById(this.fileId, onSuccess, onError)
    }
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>