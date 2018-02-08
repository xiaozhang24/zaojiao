import {cookie} from 'vux'
export default function checkCookie(params) {
  let userInfo = cookie.get(params)
  if (userInfo) {
     this.$vux.toast.show({
          text: `${userInfo}，欢迎你登录`
        })
  } else {
  	 this.$router.push('/login')
  }
}