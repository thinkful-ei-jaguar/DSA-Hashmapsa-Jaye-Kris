const hm = require('./HashMap')

function main() {
  let lotr = new hm(11)
  lotr.MAX_LOAD_RATIO = 0.5 
  lotr.SIZE_RATIO = 3
  lotr.set("Hobbit", "Bilbo")
  lotr.set("Hobbit", "Frodo")
  lotr.set("Wizard", "Gandolf")
  lotr.set("Human", "Aragorn")
  lotr.set("Elf", "Legolas")
  lotr.set("Maiar", "The Necromancer")
  lotr.set("Maiar", "Sauron")
  lotr.set("RingBearer", "Gollum")
  lotr.set("LadyOfLight", "Galadriel")
  lotr.set("HalfElven", "Arwen")
  lotr.set("Ent", "Treebeard")

  console.log(lotr)
  console.log(lotr.get('Maiar'))
  console.log(lotr.get('Hobbit'))

}

//main()

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new hm();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new hm();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

//WhatDoesThisDo()

let array = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

function anagram(array) {
  const anagramMap = new Map();
  for(let i = 0; i < array.length; i++) {
    const key = array[i].split('').sort().join('');
    const anagramArray = new Set();
    let filteredArray = [];
    if(!anagramMap.has(key)) {
      filteredArray = array.filter(word => word.length === key.length);
      for(let j = 0; j < filteredArray.length; j++) {
        const temp = filteredArray[j].split('').sort().join('');
        if(temp === key) {
          anagramArray.add(filteredArray[j]);
        }
      }
      anagramMap.set(key, anagramArray);
    }
  }
  console.log(anagramMap.entries());
}

//anagram(array);

