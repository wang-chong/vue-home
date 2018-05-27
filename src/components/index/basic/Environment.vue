<template>
  <div>
    <h2>开发环境搭建</h2>
    <div>
      <h3>node版本管理器(nvm)的安装</h3>
      <pre>
      1、下载nvm安装包，下载地址<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank">https://github.com/coreybutler/nvm-windows/releases</a>，下载安装版，解压安装即可(nvm-setup)，安装路径尽量不要有特殊字符和空格
      2、cmd命令行输入nvm检查是否安装成功，熟悉几个nvm的命令，如
      nvm node_mirror https://npm.taobao.org/mirrors/node/(设置安装node镜像的地址，否则安装太慢)
      nvm npm_mirror https://npm.taobao.org/mirrors/npm/(设置安装npm镜像的地址，否则安装太慢)
      nvm root url(安装node的地址)
      nvm install 6.2.1(安装版本号为6.2.1的node.js)
      nvm list(列出当前可用的node版本)
      nvm use 6.2.1(使用6.2.1版本的node.js)
      3、检查nodejs和npm是否设置成功
      cmd命令行输入node -v
      cmd命令行输入npm -v
      注意：也许使用nvm use 没有效果，其实只需要手动修改环境变量即可，将NVM_SYMLINK修改为node的地址(也就是安装nvm的时候设置的node的地址)
      </pre>
    </div>
    <div>
      <h3>sublime less to css</h3>
      <pre>
      1、通过package control安装less2css插件
      2、通过npm全局安装less
      3、通过npm全局安装clean-css
      4、如果正常的话已经可以正常将less同步转换成css,在同级目录下生成对应的css。
      </pre>
    </div>
    <div>
      <h3>mysql+navicat for mysql安装</h3>
      <pre>
      1、分别下载两个软件，地址：
      <a href="https://pan.baidu.com/s/1C0lz4WzMR502h2ciqBVyJA" target="_blank"><span>navicat</span></a>
      <a href="https://pan.baidu.com/s/1dK5K9aI2WfD8EiUzQsavgQ" target="_blank"><span>mysql</span></a>
      2、按步骤默认选项安装，其中navicat的注册码就在文件夹内
      3、安装完成后进入navicat进行连接数据库，如果报错1251，按照以下步骤进行更新即可
      （1）进入安装mysql的文件夹的bin目录下，启动命令行窗口
      （2）使用语句mysql -uroot -p
      （3）输入密码
      （4）更改加密方式：ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
      （5）更改密码： ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';  //123为新密码
      （6）刷新： FLUSH PRIVILEGES;
        // 如果报错ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%'：
        则是远程访问权限不正确，先选择数据库，查看一下再更改：
      </pre>
    </div>
    <div>
      <h3>移动端抓包工具安装</h3>
      <p>教程地址：https://www.cnblogs.com/rrl92/p/7928770.html</p>
    </div>
    <div>
      <h3>字体选择缩减工具安装</h3>
      <p>工具名：fontmin,下载地址https://pan.baidu.com/s/1fY8nzzXrYp_3izKLi8lFAQ</p>
    </div>
  </div>
</template>