<template>
  <div>
    <h2>flex布局</h2>
    <div class="part">
      <h3>总览表</h3>
      <img src="/static/imgs/flex/flex.png" class="flex">
    </div>
    <div class="part">
      <h3>part1、横向居中</h3>
      <div class="flex-center">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
      <pre>
      .flex-center{
        display: flex;
        justify-content: center;
      }
      .item{
        width: 100px;
        height: 100px;
        background-color: green;
        line-height: 100px;
        text-align: center;
        margin: 0 10px;
      }
      </pre>
      <p>如果flex容器不够宽，那么会自动压缩子项目的宽度，如下</p>
      <div class="flex-center small">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
      <pre>
      .small{
        width: 200px;
        margin: 10px auto;
      }
      </pre>
    </div>
    <div class="part">
      <h3>part2、纵向居中</h3>
      <div class="flex-middle">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
      <pre>
      .flex-middle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 300px;
      }
      item同上
      </pre>
      <p>如果容器高度不够，并不会压缩item的高度，而是垂直居中，上下超出容器(IE下会压缩下面的item)，如下</p>
      <div class="flex-middle small-height">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
      <pre>
      .small-height{
        height: 100px;
        background-color: #fff;
      }
      </pre>
    </div>
    <div class="part">
      <h3>part3、横向从右到左</h3>
      <div class="flex-row-reverse">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
    </div>
    <div class="part">
      <h3>part4、纵向从下到上</h3>
      <div class="flex-column-reverse">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
    </div>
    <div class="part">
      <h3>part5、纵向从下到上，靠右</h3>
      <div class="flex-column-row-reverse">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part{
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #e5d1e8;
}
.flex{
  width: 100%;
}
.flex-center{
  display: flex;
  justify-content: center;
}
.item{
  width: 100px;
  height: 100px;
  background-color: green;
  line-height: 100px;
  text-align: center;
  margin: 0 10px;
}
.small{
  width: 200px;
  margin: 10px auto;
}
.flex-middle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
}
.small-height{
  height: 100px;
  background-color: #fff;
}
.flex-row-reverse{
  display: flex;
  flex-direction: row-reverse;
}
.flex-column-reverse{
  display: flex;
  flex-direction: column-reverse;
}
.flex-column-row-reverse{
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
}
</style>
