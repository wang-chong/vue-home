<template>
  <div class="welcome">Welcome Home!</div>
</template>

<style lang="scss" scoped>
.welcome{
  text-align: center;
  padding: 200px;
  font-size: 30px;
  font-weight: 900;
  background-image: linear-gradient(to right, #f3d7d7, #538816);
  // 以下给文字添加背景
  // text/content-box/padding-box/border-box
  background-position: center;
  -webkit-background-clip: text;
  color: transparent;
}
</style>