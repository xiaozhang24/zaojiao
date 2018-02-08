<template>
  <div class="me">
  	<div class="header vux-1px-b">
  		<p class="text">我的</p>
  	</div>
  	<scroller lock-x >
  	  <div class="main-warpper">
	  	<split></split>
	  	<div class="user-info">
	  		<div class="avatar">
	  			<img src="">
	  		</div>
	  	</div>
	  	<split></split>
	  	<div class="user-account">
	  		<group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>

		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>
		    <group>
		      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
		    </group>

	  	</div>
	  </div>
  	</scroller>
  </div>
</template>

<script>
import {Scroller, Group, Cell, Loading} from 'vux'
import Split from '@/components/base/split'
import {mapGetters} from 'vuex'
import store from '@/vuex/store'

const url = "api/master/Index/upload"
export default {

 mounted() {
	setTimeout(() => {
	  store.state.isLoading = false
	},1000)
 },
 components: {
    Group,
    Cell,
    Loading,
    Split,
    Scroller
  },
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
	.me{
		background: #fff;
		position: fixed;
		top: 0;
		bottom: 54px;
		width:100%;
		.header{
			height: 45px;
			width: 100%;
			text-align: center;
			.text{
				line-height: 45px;
    			height: 100%;
    			font-size: 16px;
    			color: #666;
			}
		}
		.main-warpper{
			.user-info{
			padding: 15px 10px;
			.avatar{
				width: 50px;
				height: 50px;
				background: #ccc;
				border-radius: 50%;
				border:2px solid #f40;
			}
		}
	  }	
	}
</style>
