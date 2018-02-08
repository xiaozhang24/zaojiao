const apiMethods = {
  methods: {
    apiGet(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, data).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          // _g.closeGlobalLoading()
          bus.$vux.toast.show({
            text: '请求超时，请检查网络',
            type: 'warn'
          })
        })
      })
    },
    apiPost(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
          resolve(response.data)
        }).catch((response) => {
          console.log('f', response)
          resolve(response)
           bus.$vux.toast.show({
            text: '请求超时，请检查网络',
            type: 'warn'
          })
        })
      })
    },
    apiDelete(url, id) {
      return new Promise((resolve, reject) => {
        axios.delete(url + id).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          // _g.closeGlobalLoading()
          // bus.$message({
          //   message: '请求超时，请检查网络',
          //   type: 'warning'
          // })
        })
      })
    },
    apiPut(url, id, obj) {
      return new Promise((resolve, reject) => {
        axios.put(url + id, obj).then((response) => {
          resolve(response.data)
        }, (response) => {
          // _g.closeGlobalLoading()
          // bus.$message({
          //   message: '请求超时，请检查网络',
          //   type: 'warning'
          // })
          reject(response)
        })
      })
    },
    handelResponse(res, cb, errCb) {
      // _g.closeGlobalLoading()
      if (res.code == 200) {
        cb(res.data)
      } else {
        if (typeof errCb == 'function') {
          errCb()
        }
        this.handleError(res)
      }
    },
    handleError(res) {
      if (res.code) {
        switch (res.code) {
          case 101:
            console.log('cookie = ', Cookies.get('rememberPwd'))
            if (Cookies.get('rememberPwd')) {
              let data = {
                rememberKey: Lockr.get('rememberKey')
              }
              this.reAjax('admin/base/relogin', data).then((res) => {
                this.handelResponse(res, (data) => {
                  this.resetCommonData(data)
                })
              })
            } else {
              _g.toastMsg('error', res.error)
              setTimeout(() => {
                router.replace('/')
              }, 1500)
            }
            break
          case 103:
            _g.toastMsg('error', res.error)
            setTimeout(() => {
              router.replace('/')
            }, 1500)
            break
          // case 400:
          //   this.goback()
          //   break
          default :
            _g.toastMsg('error', res.error)
        }
      } else {
        console.log('default error')
      }
    },
    resetCommonData(data) {
      // _(data.menusList).forEach((res, key) => {
      //   if (key == 0) {
      //     res.selected = true
      //   } else {
      //     res.selected = false
      //   }
      // })
      // Lockr.set('token', data.token)          // 用户sessionid
      window.axios.defaults.headers.authKey = Lockr.get('authKey')
      let routerUrl = ''
      if (data.menusList[0].url) {
        routerUrl = data.menusList[0].url
      } else {
        routerUrl = data.menusList[0].child[0].child[0].url
      }
      setTimeout(() => {
        let path = this.$route.path
        if (routerUrl != path) {
          router.replace(routerUrl)
        } else {
          _g.shallowRefresh(this.$route.name)
        }
      }, 1000)
    },
    reAjax(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          bus.$message({
            message: '请求超时，请检查网络',
            type: 'warning'
          })
        })
      })
    },
    wxConfig(data) {
       this.$wechat.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        this.$wechat.checkJsApi({
          jsApiList: ['scanQRCode'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function(res) {
              console.log(res);
              // 以键值对的形式返回，可用的api值true，不可用为false
              // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          }


      });
    }
  },
  computed: {
    showLoading() {
      return store.state.globalLoading
    }
  }
}

export default apiMethods
