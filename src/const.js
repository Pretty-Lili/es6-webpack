// ES5常量写法
// 定义一个全局属性。设置不可写

Object.defineProperty(window, 'PI2', {
  value: 3.1415926,
  writable: false
})

console.log(PI2)

// ES6

const PI = 1234
console.log(PI)