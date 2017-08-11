//非ES6语法的表示
// var greeter = require('./Greeter.js')
// document.getElementById('app').appendChild(greeter())

//ES6语法定义主模块
import React from 'react'
import { render } from 'react-dom'
import Greeter from './Greeter'

import './main.css' //使用require导入css文件

render(<Greeter />, document.getElementById('app'))
