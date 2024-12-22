const name = "Ankit"
const repoCount = 50

console.log(name + repoCount + " Value");

//InterPolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ankit-Am-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Ankit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ankit.com/Ankit%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));