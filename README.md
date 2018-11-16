# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 介绍
```
# 适配用vw，750px相当于100vw，自动会把px转化为vw

# common为公共组件

# page为页面

# 非兄弟组件 非父子组件通信用vuex

# 页面路由 用vue-router

# static存放静态文件，该目录下可以直接输入地址访问

# 在package.json文件中配置"dev"加上--host 0.0.0.0既可以localhost访问又可以ip地址访问，ip地址访问主要为了在同一个局域网下能用真机调试

# 在config/index.js中配置 build的assetsPublicPath:'./'为了打包以后放在服务器上不管是否为根目录都能访问

# 在开发环境上配置proxyTable（生产环境不生效）可以进行接口联调，但是在生产环境下就需要后端人员配置服务器代理
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
