<template>
  <div class="login">
    <div class="logo-wrapper">
      <div class="logo">
        <img src="https://passport.eteams.cn/static/img/mobile/global/logo.png">
      </div>
    </div>
    <div class="login-from">
     
        <x-input class="login-input"  v-model="username" placeholder="乐育谷账号" keyboard="number" is-type="china-mobile">
          <i slot="label" class="icon ion-android-person"></i>
        </x-input>
        <x-input class="login-input" type="password"  v-model="password" placeholder="密码">
          <i slot="label"  class="icon ion-android-lock"></i>
        </x-input>
         <check-icon class="rememberPwd" :value.sync="checked">自动登录</check-icon>
        <box>
          <x-button class="login-btn" @click.native="handleSubmit()" :gradients="['#1D62F0', '#19D5FD']">登录</x-button>      
        </box>
       
  </div>
  </div>
</template>

<script>
import {CheckIcon, XButton, Checklist, Box, Group, XInput, querystring} from 'vux'
import http from '@/assets/common/js/https'
import store from '@/vuex/store'
import {mapActions, mapGetters} from 'vuex'
export default {
  mixins: [http],
  data() {
    return {
      checked: false,
      username: '',
      password: '',
      warningTest: '账号不能为空'
    }
  },
  computed:{
    ...mapGetters([
      'isLoading'
      ])
  },
  methods: {
    ...mapActions([
      'setUsers'
    ]),
    handleSubmit(){
      var username = this.username
      var password = this.password
      if (username === '' && password === '') {
        this.$vux.toast.show({text: this.warningTest,type: 'warn'
        })
        return
      }
      let data ={
        username:this.username,
        password:this.password
      }
      if (this.checked) {
        data.isRemember = 1
      } else {
        data.isRemember = 0
      }
      this.apiPost('/master/Account/login',data).then((res)=>{
        if (res.code === 200){
          store.commit('setLogin', true)

          Lockr.set('token', res.employee.token)
          this.setUsers({users: this.username})
          Fn.shallowRefresh('/')
        } else {
          this.$vux.toast.show({text: res.msg, type: 'warn'})
        }
       })
    }
  },
  components: {
    CheckIcon,
    Group,
    XButton,
    Checklist,
    XInput,
    Box
  }
}
</script>

<style scoped lang="less">
  .login{
    background: #f2f2f2;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
    .logo-wrapper{
      text-align: center;
      .logo{
        width: 160px;
        margin: 0 auto;
        padding: 30px 0;
        img{
          width: 100%
        }
      }
    }
    .login-from{
      padding: 0 20px;
      .login-input{
        background: #fff;
        border-radius: 5px;
        margin-bottom: 15px;
        font-size: 14px;
        padding-left: 20px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.2);
        .icon{
          font-size: 18px;
          color: #9a9a9a;
          margin-right: 10px;
        }
      }
      .rememberPwd{
        font-size: 14px;
      }
      .login-btn{
        line-height: 2.8;
        font-size: 16px;
        margin-top: 40px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.4)
      }
    }
  }

</style>
