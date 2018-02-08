<template>
  <div class="home">
  	<router-view></router-view>
  	<tab></tab>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import { Group, Cell} from 'vux'
import store from '@/vuex/store'

const url = "api/master/Index/upload"
export default {

 methods: {
    checkLogin() {
        var token = Lockr.get('token');
        console.log(11);
    },
 },
 created() {
    this.checkLogin();
 },
 components: {
 	Tab,
    Group,
    Cell
  },
}
</script>

<style lang="less">

</style>
