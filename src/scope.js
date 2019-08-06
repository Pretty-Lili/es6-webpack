// ES5中作用域
var callBacks = []
for(var i=0;i<=2;i++){
  callBacks[i] = function(){  //闭包 引用
    return i * 2
  }
}

console.table([
  callBacks[0](),
  callBacks[1](),
  callBacks[2]()
])

//ES6 

const callBacks2 = []
for(let i=0;i<=2;i++){  //let 块级作用域
  callBacks2[i] = function(){  //闭包 引用
    return i * 2
  }
}

console.table([
  callBacks2[0](),
  callBacks2[1](),
  callBacks2[2](),
]);

//ES5 立即执行函数 作用域
(function(){
  var foo = function(){
    return 1
  }
  console.log('foo()===1', foo()===1);
  (function(){
    var foo = function(){
      return 2
    }
    console.log('foo()===2',foo()===2);
  })()
})()

//ES6 块级作用域
{
  var foo = function(){
    return 1
  }
  console.log('foo()===1', foo()===1);
  {
    var foo = function(){
      return 2
    }
    console.log('foo()===2',foo()===2);
  }
}