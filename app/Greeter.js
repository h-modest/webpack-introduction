//非ES6语法的表示
// var config = require('./config.json')
//
// module.exports = function(){
//   var greet = document.createElement('div')
//   greet.textContent = config.greetText
//   return greet
// }

//ES6子组件渲染Greeter.js模块
import React, { Component } from 'react'
import Config from './config.json'
import styles from './Greeter.css' //导入

class Greeter extends Component {
  render(){
    return (
      <div className={styles.root}>
        { Config.greetText }
      </div>
    )
  }
}

export default Greeter
