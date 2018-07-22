# gulp_learning
### gulp工具的学习
### 它是什么？  前端自动化脚本。

## 应用场景：
```
把一个文件拷贝到另外一个位置
把多个 JS 或者 CSS 文件合并成一个文件,以减少网络请求数
对JS文件和CSS进行合并压缩,以减少网络流量
把Sass或者Less文件编译成CSS
压缩图像文件,以减少网络流量
创建一个可以实时刷新页面内容的本地服务器等等。
```

### gulp中的流：
```
gulp正是通过流和代码优于配置的策略来尽量简化任务编写的工作。
类似jquery里的链式操作，把各个方法串连起来构建完整的任务。
用gulp编写任务也可看作是用Node.js编写任务。
当使用流时，gulp不需要生成大量的中间文件，只将最后的输出写入磁盘，整个过程因此变得非常快。
```
1 安装
 先初始化项目，npm init, 增加package.json

2 npm install --save-dev gulp

 npm i -g gulp	 全局装 以便后续使用gulp命令。

3在项目根目录下创建一个名为 gulpfile.js 的文件

4 gulp.task('hello', function () {
   console.log('您好');
});
那么就可以在命令行 gulp taskName： 如 gulp hello 就会在命令行输出 您好
不输入任务名称的话会默认找default任务，找不到会报错

5 gulp --tasks-simple 会以纯文本的方式显示所载入的 gulpfile 中的 task 列表
 这会让你很容易观察gulp的所有任务。

6  四个常用API：
gulp.task(),
gulp.src()
gulp.dest()
gulp.watch()

7 常用的插件：
编译 Sass：gulp-sass
编译 Less：gulp-less
合并文件：gulp-concat
压缩js 文件：gulp-uglify
重命名js文件：gulp-rename
优化图像大小：gulp-imagemin
压缩css 文件：gulp-minify-css
创建本地服务器：gulp-connect
实时预览 gulp-connect

8 参考文章：
https://juejin.im/entry/586a417561ff4b006d77fe85#comment
