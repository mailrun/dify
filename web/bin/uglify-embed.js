const fs = require('node:fs')
// https://www.npmjs.com/package/uglify-js
const UglifyJS = require('uglify-js')

const { readFileSync, writeFileSync } = fs

writeFileSync('public/embed.min.js', UglifyJS.minify({
  'embed.js': readFileSync('public/embed.js', 'utf8'),
}).code, 'utf8')

// 这段代码使用 Node.js 的文件系统模块（fs）和 UglifyJS 库来压缩名为 “embed.js” 的文件，并将压缩后的内容写入 “public/embed.min.js” 文件中。
// 首先引入了 Node.js 的文件系统模块（fs）和 UglifyJS 库。然后，使用 fs 的同步读取文件方法（readFileSync）读取 “public/embed.js” 文件的内容，
// 并将其作为参数传入 UglifyJS.minify 方法进行压缩。最后，使用 fs 的同步写入文件方法（writeFileSync）将压缩后的代码写入 “public/embed.min.js” 
// 文件中，编码格式为 “utf8”。