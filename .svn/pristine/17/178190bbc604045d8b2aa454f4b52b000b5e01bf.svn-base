<template>
  <div>
    <group>
      <selector ref="defaultValueRef" title="选择班级" :options="list" v-model="defaultValue"></selector>
    </group>
   <group>
      <cell title="齐瑞杰" value="2018-1-30" is-link></cell>
    </group>
    <tabbar>
          <tabbar-item badge="2"  link="/news" selected>
              <i slot="icon" class="ion-chatbubble"></i>
              <span slot="label">未读</span>
          </tabbar-item>
          <tabbar-item link="/apps">
            <i slot="icon" class="ion-android-apps"></i>
            <span slot="label">已查看</span>
          </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {  Selector, Tabbar, TabbarItem, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

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
    Badge,
     Tabbar, TabbarItem, Selector
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
        value: '贝多芬'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
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