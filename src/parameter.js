//默认参数

{
  function f(x,y,z){
    if(y===undefined){
      y=1
    }
    if(z===undefined){
      z=3
    }
    return x+y+z
  }
  console.log(f(1,2))
}

{
  function f(x,y,z){
    var x = x||1
    var z = z||2
    return x+y+z
  }
  console.log(f(1,2))
}
//ES6
{
  function f(x,y=3,z=6){
    return x+y+z
  }
  console.log(f(1))
}
{
  function checkParameter(){
    throw new Error('Can\'t be empty')
  }
  function f(x=checkParameter(),y=1,z=3){
    return x+y+z
  }
  console.log(f(1))
  try {
    f(1)
  } catch (e) {
    console.log(e)
  } finally {

  }
}

//可变参数
{
  function f(){
    var a = Array.prototype.slice.call(arguments);
    var sum=0;
    a.forEach(item => {
      sum+=item*1
    });
    return sum;
  }
  console.log(f(1,1,2,3))
}
{
  function f(...a){
    var sum=0;
    a.forEach(item => {
      sum+=item*1
    });
    return sum;
  }
  console.log(f(1,1,2,3))
}
{
  //合并数组 ES5
  var params = ['hello',1,1];
  var other = [true,false,2].concat(params);
  console.log(other)
}
{
  //合并数组 ES6
  var params = ['hello',1,1];
  var other = [true,false,2,...params];
  console.log(other)
}