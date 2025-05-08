//neccessary variables for accessing info



//functions for complex calculations(battle outcomes, supply subtraction, etc)


//function to determine who wins a battle
function landDetermine(size, power, enemySize, enemyPower, self, foe)
{
   const fullPop = size;
   const enemyFullPop = enemySize;
 
   let population = fullPop;
   let enemyPopulation = enemyFullPop;
 
   const strength = power;
   const foeStrength = enemyPower;
 
   const battle = setInterval(function(){

let randomKills = Math.floor(Math.random() * ((fullPop/11 - fullPop/100) + fullPop/100))*(strength * strength);
let randomEnemyKills = Math.floor(Math.random() * ((enemyFullPop/11 - enemyFullPop/100) + enemyFullPop/100))*(foeStrength * foeStrength);
let extraChance = Math.floor(Math.random() * (7 - 1));
let extraFoeChance = Math.floor(Math.random() * (7 - 1));

if(extraChance === 15)
{
   randomKills * (Math.floor(Math.random() * (5 - 2))/2);
}

if(extraFoeChance === 15)
   {
       randomEnemyKills * (Math.floor(Math.random() * (5 - 2))/2);
   }
 if(enemyFullPop*2 <= fullPop)
 {
   randomEnemyKills = randomEnemyKills*1.5;
 }
 population -= randomEnemyKills/2;
 enemyPopulation -= randomKills/2;

 population = Math.floor(population);
 enemyPopulation = Math.floor(enemyPopulation);

console.log(population + " Size");
console.log(enemyPopulation + " enemySize");
console.log(randomKills + " kills");
console.log(randomEnemyKills + " deaths");
   if(population <= 0 || enemyPopulation <= 0)
   {
       clearInterval(battle);
       if(population <= 0)
       {
        return self;
       }else
       {
        return foe;
       }
   }

},1000)
}


 

