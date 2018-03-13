export function FruitsApi () {
  this.names = [
    'Chris', 'Svetla', 'Duncan', 'Vlad', 'Dennis', 'Amir', 'Kunjan', 'Aaron', 'Kirby', 'Michael',
    'Bryan', 'Edward', 'Stan', 'Eric', 'Jennifer', 'Kristy', 'Jason', 'Phoebe', 'Kate', 'Denise',
    'Abigail', 'Ethan', 'Lucia', 'Harry', 'David', 'Cameron', 'Erica', 'Sophie', 'Francis', 'Brian',
    'Paco', 'Luke', 'Margie', 'Sacha', 'Desmond', 'Ruby', 'Wanda', 'Rosalie', 'Angel', 'Layla', 'Flynn',
    'Anthony', 'Jasmine', 'Janie', 'Debbie', 'Keith', 'Porter', 'Francisco', 'Javier', 'Rudolph'
  ];
  this.letters = 'ABCDEFGHIJKLMNOPRSTVWY'.split('');
  this.fruits = [
    'blackberries', 'apple', 'orange', 'banana', 'pear', 'watermelon', 'cherries', 'mango',
    'grapes', 'apple', 'orange', 'cantaloupe', 'strawberries', 'kiwi', 'pineapple', 'pomegranate'
  ];

}

FruitsApi.prototype.pickFruits = function(num) {
  var availFruits = [];
  var rerun = true;
  while(rerun) {
    for (var j = 0; j < num; j++) {
      var index = Math.floor(Math.random() * this.fruits.length);
      availFruits.push(this.fruits[index]);
    }
    var seen = availFruits[0];
    for (var i = 1; i < availFruits.length; i++) {
      if (availFruits[i] != seen) {
        rerun = false;
      }
    }
  }
  return availFruits;
};

FruitsApi.prototype.get=function(callback) {
  var iter = 30 + Math.round(Math.random()*50);

  var fruitIter = 3 + Math.ceil(Math.random()*4);
  var availFruits =this.pickFruits(fruitIter);

  var arr = [];
  for (var i=0; i<iter; i++) {
    var randF = Math.floor(Math.random() * this.names.length);
    var randL = Math.floor(Math.random() * this.letters.length);
    var randFruit = Math.floor(Math.random() * availFruits.length);
    arr[i] = {
      name: this.names[randF] + ' ' + this.letters[randL] + '.',
      favoriteFruit: availFruits[randFruit]
    }
  }
  var timeout = Math.floor(Math.random()*500) + 100;
  setTimeout(function(){
    if (callback) {
      callback(arr);
    }
  }, timeout);
}
