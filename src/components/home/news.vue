<template>
  <div class="news">
  	11111111111
  </div>
</template>

<script>
import { Group, Cell, Loading} from 'vux'
import store from '@/vuex/store'

const url = "api/master/Index/upload"
export default {
 components: {
    Group,
    Cell
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
