<template>
  <div class="apps">
     <x-header :left-options="{showBack: false}">
         我的应用
         <a slot="right" @click="qr()" class="ion-android-expand" style="font-size: 24px"></a>
    </x-header>
     <div class="page">
        <grid col="4">
	      <grid-item link="/component/cell" label="活动管理">
	         <i slot="icon" class="icon ion-fireball" size="25"></i>
	      </grid-item>
	      <grid-item link="/apps/rules" label="用药管理">
	        <i slot="icon" class="icon ion-mouse"></i>
	      </grid-item>
	      <grid-item link="/component/cell" label="请假管理">
	        <i slot="icon" class="icon ion-ios-paper"></i>
	      </grid-item>
	      <grid-item  label="班级相册" @click.native="init()">
	        <i slot="icon" class="icon ion-mouse"></i>
	      </grid-item>
	    </grid>
     </div>
  </div>
</template>

<script>

import {  WechatPlugin,InlineCalendar,XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, GridItem,  Grid,Group, Cell} from 'vux'
import {mapGetters} from 'vuex'
import store from '@/vuex/store'
import http from '@/assets/common/js/https'
import wx from 'weixin-js-sdk'

export default {
 mixins: [http],
 components: {
    Group,
    Cell,
    GridItem, 
    Grid,XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem,InlineCalendar
  },
  methods: {
      qr() {
         
          var that = this;
          this.apiPost('/master/Jssdk/getJssdkConfig').then((res) =>{
              if (res.code == 200) {
              	// that.wxConfig(res.employee);
                wx.config({
                  debug: false,
                  appId: res.employee.appId,
                  timestamp: res.employee.timestamp,
                  nonceStr: res.employee.noncestr,
                  signature: res.employee.signature,
                  jsApiList: ['scanQRCode']
                })
              }
          });
          wx.ready(function(){
            wx.scanQRCode()
  			    // wx.scanQRCode({
         //          // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
         //          needResult : 1,
         //          desc : 'scanQRCode desc',
         //          success : function(res) {
         //              console.log(res);
         //          }
         //      });
		    });
      }
  },
  created(){

  }
}
</script>

<style scoped lang="less">
  .apps{
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 54px;
    width:100%;
    .page{
      text-align: center;
      .icon{
        position: relative;
        top: -5px;
      }
    }
  }
	i{
		font-size: 24px;
	}
	.devider {
	    width: 100%;
	    height: 15px;
	    background: #eee; 
	}
  
</style>
