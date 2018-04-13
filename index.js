var person = {
  firstName: '',
  lastName: '',
  age: '',
  birthday: () => {
    this.age++;
  }
}

var names = ['Dustin', 'Alyona', 'Brutus', 'Rusty'];
var ages = [29, 26, 5, 8];
var el = document.getElementById('content');

names.forEach(function(name, i) {
  person.name = name;
  person.age = ages[i];
  
  el.innerHTML += '<p>Name: ' + person.name + '<br/>Age: ' + person.age + '<p>';  
});
