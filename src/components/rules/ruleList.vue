<template>
  <div class="mail">
  	3333333
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

<template>
  <div>
     <group>
      <cell is-link link="/apps/rules/phar">
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">保教用药记录</span> <badge text="1"></badge></span>
      </cell>
      <cell is-link link="/apps/rules/phar">
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">班主任幼儿用药观察</span> <badge text="1"></badge></span>
      </cell>
      <cell is-link link="/apps/rules/baby">
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">幼儿观察记录</span> <badge text="1"></badge></span>
      </cell>
    </group>
   	
  </div>
</template>
<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'


export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
