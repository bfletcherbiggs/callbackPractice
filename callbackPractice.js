/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the sayHi function that makes the code above work,

   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

*/


// 1. Write a function called first that returns the first item of the array using a callback function

  // Code Here


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});

function first(arr,cb){
  cb(arr[0]);
}


// 2. Write a function called last which returns the last item of the array using a callback function.

  //Code Here

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

function last(arr,cb){
  cb(arr[arr.length-1]);
}

// 3. Write a function called multiply that multiplies two numbers using a callback function.

  //Code Here


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})

function multiply(val1,val2,cb){
  cb(val1*val2)
}



// 4. Write a function called contains that checks if a name exists in an array.
// If it does, return true using the callback, if not return false.

  //Code Here

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

function contains (arr,name,cb){
  if (arr.indexOf(name)!==-1){
    cb(true);
  }
  cb(false);
}



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns
// the callback function with the array of unique names.

    //Code Here

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

function uniq(arr,cb) {
  var narr = [];
  arr.map(function(x){
    if (narr.indexOf(x) ===-1){
      narr.push(x);
    }
  })
  cb(narr);
}

// May not work every time - because Filter returns an array
// function uniq(arr,cb) {
//   var narr = [];
//   arr.filter(function(x){
//     if (narr.indexOf(x) ===-1){
//       narr.push(x);
//     }
//   })
//   cb(narr);
// }


// 6. Write a function called each that takes in an array of names. For each item, use a callback
// function to return the indices and item.

    //Code Here

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});


function each(arr,cb) {
  for (name in arr){
    cb(arr[name],name)
  }
}


// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID
// and returns that user.

 //Code Here

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});

function getUserById(obj,str,cb){
  for(user in obj){
    if (str === obj[user].id){
      cb(obj[user]);
    }
  }
}

function getUserById(obj,str,cb){

  obj.map(function(index){
    if (index.id === str){
      cb(index)
    }
  })
}
