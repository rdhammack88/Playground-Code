
///////////////////////// WORKED!! /////////////////////////////////



function truthCheck(collection, pre) {
  // Is everyone being true?
  
  for(var obj in collection) {
    if(collection[obj].hasOwnProperty(pre) &&  !Boolean(collection[obj][pre]) || collection[obj][pre] === undefined) {
      return false;
    }
  }  
  return true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// truthCheck([{"single": ""}, {"single": "double"}], "single");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


/////////////////////////////#####################################



/////////////////////////////#####################################




function truthCheck(collection, pre) {
  // Is everyone being true?
//   var res = true;
  
//   var users = [];
  
  collection.forEach(function(user) {
//     users.push(user[pre]);
    
    if(user[pre] === null || user[pre] === undefined || isNaN(user[pre]) || user[pre] <= 0 || user[pre] === '') {
      return false;
    }
    
  });
  
//   return users;
  
//   collection.forEach(function(user) {
//     return user;
// //     if(user[pre] == undefined && isNaN(user[pre]) && user[pre] <= 0 && user[pre] == '') {
// // //     if(user[pre].length && user[pre] !== undefined) {
// //       res = false;
// //     }
//   });
  
//   for(var user in collection) {
//     return user;
//   }
  
  return true;
//   return pre;
//   return res;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");

// truthCheck([{"single": "yes"}], "single");

// truthCheck([{"single": ""}, {"single": "double"}], "single");

// truthCheck([{"single": "double"}, {"single": undefined}], "single");

truthCheck([{"single": "double"}, {"single": NaN}], "single");










/////////////////////////////#####################################




function truthCheck(collection, pre) {
  // Is everyone being true?
  
  collection.forEach(function(obj) {
//     if(obj[pre] == 'female') {
//       return this.user;
//     }
    
//     if(obj.hasOwnProperty(pre) ) {
//       return obj[pre];
//     }
  });
  
  
  for(var obj in collection) {
    if(collection[obj].hasOwnProperty(pre) &&  !Boolean(collection[obj][pre]) || collection[obj][pre] === undefined) {
      return false;
    }
  } //!collection[obj][pre].length ||
  
  return true;
  
//   for(var obj in collection) {
//     if(obj[pre]) {
//       return obj[pre];
//     }
//   }
//   return false;
  
//   return pre;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// truthCheck([{"single": ""}, {"single": "double"}], "single");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")




/////////////////////////////#####################################


// function truthCheck(collection, pre) {
//   // Is everyone being true?
  
//   collection.forEach(function(obj) {
// //     return "object";
//     if(obj.pre) {
//       return true;
//     } else {
//       return false;
//     }
//   });
  
//   return pre;
// }

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");





