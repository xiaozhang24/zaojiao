<template>
  <div class="mail">
  	3333333
	 <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Group, Cell, Loading} from 'vux'
import {mapGetters} from 'vuex'
import store from '@/vuex/store'

const url = "api/master/Index/upload"
export default {
 computed:{
    ...mapGetters([
      'isLoading'
    ])
 },
 mounted() {
	setTimeout(() => {
	  store.state.isLoading = false
	},1000)
 },
 components: {
    Group,
    Cell,
    Loading
  },
}
</script>

<style lang="less">
	.news{
		position: fixed;
		top: 0;
		bottom: 50px;
		width:100%;
	}
</style>
