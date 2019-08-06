//对象代理

{
  var Person = function(){
    var data = {
      name: 'es3',
      sex: 'male',
      age: 12
    }
    this.get = function(key){
      return data[key]
    }
    this.set = function(key,value){
      if(key !== 'sex'){
        data[key] = value
      }
    }
  }
  var person = new Person();
  console.table({
    name:person.get('name'),
    sex:person.get('sex'),
    age:person.get('age')
  });
  console.log('1111')
}
{
  var Person ={
    name: 'es5',
    age: 12
  };
  Object.defineProperty(Person,'sex',{
    writable: false,
    value: 'male'
  });
  console.table({
    name: Person.name,
    sex: Person.sex,
    age: Person.age
  })
  try {
    Person.sex = 'female'
    console.table({
      name: Person.name,
      sex: Person.sex,
      age: Person.age
    })
  } catch (e) {
    console.log(e)
  }
  
}