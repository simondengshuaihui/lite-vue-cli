# Title

一个精简版的vue脚手架.

## Install
可全局安装或使用npx

```js
npm install -g @huicode/lite-cli 
```

## Usage
推荐使用npx安装

```js
npx @huicode/lite-cli create <your app name>

cd <your app name>

npm run dev
```
基于webpack打包，可选项babel、linter、vue-router、vuex
生成模板文件结构
```
.
├── babel.config.js
├── build
│   ├── base.config.js
│   ├── dev.config.js
│   └── pro.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    ├── main.js
    ├── router
    │   └── index.js
    ├── store
    │   └── index.js
    └── views
        ├── About.vue
        └── Home.vue
```


## TODO
- [ ] 单元测试
- [ ] 远程模板拉取
- [ ] 文件覆盖判断

## License

MIT © Richard McRichface