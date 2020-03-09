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


function checkForPalindrome(str) {
  const len = str.length;
  const check = new Map();
  
  for(let i = 0; i < len;i++) {
    check.has(str.charAt(i)) ? check.delete(str.charAt(i)) : check.set(str.charAt(i), null);
  }
  return check.size === 0 || (check.size === 1 && len % 2 === 1);
}

function deleteDuplicatesUgly() {
  
  const str = "Hello good sir"
  const unique = Array.from(new Set(Array.from(str))).join('');
  console.log(unique);
}

function delDup(str) {
  const len = str.length;
  const check = new Map();
  let charMap;
  for(let i = 0; i < len;i++) {
    let cha = str.charAt(i);
    charMap = Array.from(check.has(cha) ? '' : check.set(cha, null)).join();
  }
  return charMap.replace(/,/g, '', );
}


