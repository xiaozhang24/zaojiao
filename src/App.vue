<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import '@/assets/common/less/ionicons.less'
import axios from 'axios'
import http from '@/assets/common/js/https'
import {mapGetters} from 'vuex'
import { Loading} from 'vux'

export default {

   created() {
     
   },
   computed:{
	  ...mapGetters([
	    'isLoading'
	  ])
   },
    mounted() {
			store.state.isLoading = false
	 },
   methods: {
  
   },
   components: {
   	 Loading
   }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
