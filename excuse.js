let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let whoRandom = Math.floor( Math.random()*who.length);
console.log(whoRandom); 
let whatRandom = Math.floor( Math.random()*what.length);
console.log(whatRandom);
let whenRandom = Math.floor( Math.random()*when.length);
console.log(whenRandom); 

console.log(who[whoRandom]+" "+what[whatRandom]+" "+when[whenRandom]);
console.log(what[whatRandom]);
console.log(when[whenRandom]);

let excuse = who[whoRandom]+" "+what[whatRandom]+" "+when[whenRandom];

document.querySelector("#excuse").innerHTML = excuse;