import HTable from './HTable'

HTable.install = (Vue, options) => {
  Vue.component('h-table', HTable)
}

export default HTable
