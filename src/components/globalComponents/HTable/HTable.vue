<template>
  <table class="h-table">
      <thead v-if="headers">
        <th v-for="head in headers">{{head}}</th>
      </thead>
      <tbody>
        <tr v-for="item in bodylist">
          <td v-for="prop in bodysProp">{{ item[prop] }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  props: {
    'headers': [Boolean, Array],
    'bodylist': {
      type: Array
    },
    'bodysProp': Array
  },
  data () {
    return {}
  }
}
</script>

<!-- add 'scoped' means the css style is useful only in this page -->
<style lang="scss" scoped>
table.h-table {
  border-collapse:collapse;
  width: 100%;
  background-color: #fff;

  thead {
    box-shadow: none;
    line-height: 2;

    th {
      text-align: left;
      text-transform: none;
      padding: 0.12rem;
    }
  }
  tbody {
    line-height: 1.5;
    tr{
      &:nth-child(odd){
        background-color: rgba(0,0,0,.05);
      }
      &:hover{
        background-color: rgba(0, 0, 0, .07);
      }
      td {
        text-align: left;
        padding: 0.12rem;
      }
    }
  }
}
</style>
