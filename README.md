# fsdemo-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 问题记录
升级到Node.JS v17版本以上，会有个bug，需要加入环境变量，目前已经通过修改package.json来修正了这个问题

```
export NODE_OPTIONS=--openssl-legacy-provider
```

### node等工具组件升级以后的package更新方法，会自动修订package-lock.json

```
npm outdated
npm update
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
