<template>
  <div>
    <h2>开发环境搭建</h2>
    <div>
      <h3>node版本管理器(nvm)的安装</h3>
      <pre>
      1、下载nvm安装包，下载地址https://github.com/coreybutler/nvm-windows/releases，下载安装版，解压安装即可(nvm-setup)，安装路径尽量不要有特殊字符和空格
      2、命令行输入nvm检查是否安装成功，熟悉几个nvm的命令，如
      nvm node_mirror https://npm.taobao.org/mirrors/node/(设置安装node镜像的地址，否则安装太慢)
      nvm npm_mirror https://npm.taobao.org/mirrors/npm/(设置安装npm镜像的地址，否则安装太慢)
      nvm root url(安装node的地址)
      nvm install 1.1.1(安装版本号为1.1.1的node.js)
      nvm list(列出当前可用的node版本)
      nvm use 1.1.1(使用1.1.1版本的node.js)
      注意：也许使用nvm use 没有效果，其实只需要手动修改环境变量即可，将NVM_SYMLINK修改为node的地址
      </pre>
      <h3></h3>
    </div>
    <div>
      <h3>移动端抓包工具安装</h3>
    </div>
  </div>
</template>