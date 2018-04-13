var person = {
  firstName: '',
  lastName: '',
  age: '',
  birthday: () => {
    this.age++;
  }
}

var names = ['Dustin Hammack', 'Alyona Hammack', 'Brutus Hammack', 'Rusty Hammack'];
var ages = [29, 26, 5, 8];
var el = document.getElementById('content');

names.forEach(function(name, i) {
//   var indx = indexOf(' ');
  person.firstName = name.substr(0, name.indexOf(' '));
  person.lastName = name.substr(name.indexOf(' '));
  person.age = ages[i];
  
  el.innerHTML += '<p>Name: ' + person.firstName + ' ' + person.lastName + '<br/>Age: ' + person.age + '<p>';  
});
