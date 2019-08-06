{
  //ES5
  var events = [1,2,3,4,5];
  var odds = events.map(function(v){
    return v+1;
  });
  console.log(events,odds)
}

//ES6
{
  let events = [1,2,3,4];
  let odds = events.map(v=>v+1);
  console.log(events,odds)
}

{
  var factory = function(){
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: function(){
        return this.a
      }
    }
  }
  console.log(new factory().c.b())
}
{
  var factory = function(){
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: ()=>{
        return this.a
      }
    }
  }
  console.log(new factory().c.b())
}
//箭头函数this的指向，是定义时this的指向
//构造函数的this的指向是构造函数的实例