<template>
  <div>
    <div class="container">
      <div class="content"></div>
      <div class="content"></div>
    </div>
    <div class="flex border c1">
      <div class="flex border c2">
        <div class="flex border c4">
          <div class="flex border c6 center">6</div>
          <div class="flex border c7 center">7</div>
        </div>
        <div class="flex border c5">
          <div class="flex border c8">
            <div class="flex border c11 center">11</div>
            <div class="flex border c12 center">12</div>
          </div>
          <div class="flex border c9 center">9</div>
          <div class="flex border c10 center">10</div>
        </div>
      </div>
      <div class="flex border c3">
        <div class="flex border c13 center">13</div>
        <div class="flex border c14 center">14</div>
      </div>
    </div>
    <div class="flex border cc">
      <div class="border cc1"></div>
      <div class="border cc2"></div>
      <div class="border cc3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '9999'
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  background-color: green;
}
.content{
  width: 50px;
  height: 10px;
  margin: 5px;
  background-color: red;
  flex-grow: 1;
}
.flex{
  display: flex;
}
.center{
  justify-content: center;
  align-items: center;
}
.border{
  border: 0 solid black;
  box-shadow: 2px 2px 2px rgba(100,100,100,0.2);
}
.c1{
  flex-direction: column;
  height: 400px;
  width: 400px;
}
.c2{
  flex-direction: row;
  height: 300px;
  .c4{
    flex-direction: column;
    width: 50px;
    flex-grow: 1;
    .c6{
      height: 70%;
      // flex-grow: 0.5;
    }
    .c7{
      flex-grow: 1;
    }
  }
  .c5{
    width: 300px;
    flex-direction: column;
    .c8{
      flex-direction: row;
      height: 80px;
      flex-grow: 1;
      .c11{
        width: 30%;
        height: 100%;
        // flex-shrink: 1;
      }
      .c12{
        width: 30%;
        height: 100%;
        flex-grow: 1;
      }
    }
    .c9{
      flex-grow: 1;
      height: 50px;
    }
    .c10{
      height: 30px;
      flex-grow: 1;
    }
  }
}
.c3{
  height: 50px;
  flex-grow: 1;
  .c13{
    height: 100%;
    flex-grow: 0.5;
  }
  .c14{
    height: 100%;
    flex-grow: 1;
  }
}

.cc{
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  border: 1px solid red;
  margin-top: 20px;
  .cc1, .cc2, .cc3{
    width: 100%;
    height: 50px;
    flex-grow: 1;
  }
  .cc1{
    background-color: red;
  }
  .cc2{
    background-color: green;
  }
  .cc3{
    background-color: yellow;
  }
}
</style>