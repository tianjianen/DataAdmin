<h1 align="center"> Data-Admin </h1>


## 介绍

data-admin 是一个成熟的企业应用解决方案，基于 vue2.0 和 heyui 组件库的中后端线上数据库操作系统。


## 准备

项目基于以下依赖:

- [hey-ui](https://www.heyui.top/)
- [vue](https://cn.vuejs.org/index.html)
- [vuex](https://vuex.vuejs.org/zh-cn/)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [axios](https://github.com/axios/axios)
- [js-model](https://www.npmjs.com/package/js-model)
- [manba](https://www.npmjs.com/package/manba)
- [hey-utils](https://www.npmjs.com/package/hey-utils)
- [hey-global](https://www.npmjs.com/package/hey-global)
- [hey-log](https://www.npmjs.com/package/hey-log)

提前了解和学习这些知识将大大有助于这个项目的使用。

## 功能

```
 - 数据管理
   - 数据查询
   - 脱敏字段配置
   - SQL操作记录
 - 审批管理
   - 发起审批
   - 审批列表
    - 审批中
    - 已审批
 - 用户管理
   - 用户列表
 - 权限管理
   - 用户权限列表
 - 系统管理
```

## 开始


需要全局安装 vue-cli@3.0.0+

```bash
# clone the project
https://github.com/tianjianen/DataAdmin.git

cd DataAdmin


# install dependency
yarn install

# run
yarn serve
```

## 开发

**hey.conf.js**，将反向代理地址修改至真正的项目后端地址.

```js
devServer: {
  "proxy": {
    "/api": {
      //proxy address
      "target": "http://umock.ch-un.com"
    }
  },
  historyApiFallback: true
},
```

## 构建

我们建议所有构建环境使用相同的代码，具体方案请参考开发文档。

```
# build
yarn build
```

## 浏览器支持

现代浏览器以及 Internet Explorer 9+.

**系统已经自动安装配置好 polyfill.**


## License

[MIT](https://github.com/tianjianen/DataAdmin/master/LICENSE)

