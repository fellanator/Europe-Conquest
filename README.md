# Europe-Conquest
### Main Game HTML
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>European Conquest</title>
</head>
<body>
    <h4>Time Spent On Site: <span id = 'time'></span> Seconds</h4>
<div id = 'startSelect'>
    <select id = 'chooseCountry' name = 'countries'>
        <option value = ''>Select a country.</option>
    </select>
    <button id = 'select'>select</button>
 
</div>


<div id = 'results'></div>


<div id = 'controller' style = 'display:none;'>
    <h4 id = 'imageStats'></h4>
    <div id = 'takenSelect'>
        <label for = 'takenCountries'>Taken Countries:</label>
        <select class = 'changers' id = 'takenCountries' name = 'takenCountries'> 
            <option value = ''>Select a taken Country.</option>
        </select>
    </div>
    <div id = 'enemySelect'>
        <label for = 'enemyCountries'>Enemy Countries:</label>
        <select class = 'changers' id = 'enemyCountries' name = 'enemyCountries'> 
            <option value = ''>Select an enemy Country.</option>
        </select>
    </div>
    <div id = 'citySelectors'>
        <div id = 'enemyCityContainer'>
        <label for = 'enemyCities'>Target Cities:</label>
        <select id = 'enemyCities' name = 'enemyCities'> 
            <option value = ''>No locations present.</option> 
        </select>
    </div>
    <div id = 'cityContainer'>
        <label for = 'cities'>Owned Cities:</label>
        <select id = 'cities' name = 'cities'> 
            <option value = ''>Select an friendly city.</option>
        </select>
        </div>
        <button id = 'sendTroops'>Send Troops</button>
    </div>
<img id = 'countryImages' src = '' width = '500px' height = '500px'>
<button id = 'previous'>Previous</button>
<button id = 'next'>Next</button>


<div id = 'gameUpdates'><span>Nothing is currently happening.</span></div>
<div id = 'moveTroopsSection'>
    <label for = 'moveFromCity'>Move troops from:</label>
     <select id = 'moveFromCity' name = 'moveFromCity'> 
            <option value = ''>Select a city to move troops from.</option>
    </select>
    <label for = 'moveToCity'>To:</label>
    <select id = 'moveToCity' name = 'moveToCity'> 
            <option value = ''>Select a city to move troops to.</option>
    </select>
    <button id = 'moveTroops'>Move troops</button>
    <input type = 'number' id = 'troopMoveAmount' name = 'troopMoveAmount' placeholder = '0'>
</div>
<div id = 'buildSection'>
    <select id = 'buildSelect' name = 'buildSelect'> 
        <option value = ''>Select a city to build something on.</option>
</select>
<button id = 'buildFarm'>Build farm</button>
<button id = 'buildMilitaryBase'>Build military base</button>
<button id = 'buildTower'>Build tower</button>
<button id = 'buildMine'>Build Mine</button>
</div>
</div>




    <script type = 'module' src = 'main.js' defer></script>
</body>
</html>

```


### Main Game Javascript
```
import  Countries  from './countries.js';

let time = sessionStorage.getItem('Time');
document.getElementById('time').innerHTML = time;
setInterval(()=>{

time++;
document.getElementById('time').innerHTML = time;
}, 1000);

const countries =
{
 
       Albania:{
       Stats:Countries.Albania,
       Borders:[Countries.Montenegro, Countries.Greece, Countries.Kosovo, Countries.Macedonia],
       Coastal:true,
       Naval:1.2,
       Land:1.5,
       Air:1,
       Hostile:false,
       Threatened:1,
       Taken:false,
       Invaded: false,
       },
       Andorra:{
           Stats:Countries.Andorra,
           Borders:[Countries.Spain, Countries.France],
           Coastal:false,
           Naval:1,
           Land:1,
           Air:1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Armenia:{
           Stats:Countries.Armenia,
           Borders:[Countries.Turkiye, Countries.Azerbaijan, Countries.Georgia],
           Coastal:false,
           Naval:1,
           Land:1.3,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Austria:{
           Stats:Countries.Austria,
           Borders:[Countries.Italy, Countries.Germany, Countries.Slovenia, Countries.Hungary, Countries.Slovakia, Countries.Czechia, Countries.Switzerland, Countries.Liechtenstein],
           Coastal:false,
           Naval:1,
           Land:2.3,
           Air:1.8,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Azerbaijan:{
           Stats:Countries.Azerbaijan,
           Borders:[Countries.Armenia, Countries.Georgia],
           Coastal:false,
           Naval:1,
           Land:1.4,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Belarus:{
           Stats:Countries.Belarus,
           Borders:[Countries.Poland, Countries.Lithuania, Countries.Russia, Countries.Latvia, Countries.Ukraine],
           Coastal:false,
           Naval:1,
           Land:1.9,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Belgium:{
           Stats:Countries.Belgium,
           Borders:[Countries.Netherlands, Countries.Luxembourg, Countries.France, Countries.Germany],
           Coastal:true,
           Naval:1.5,
           Land:2.4,
           Air:2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Bosnia:{
           Stats:Countries.Bosnia,
           Borders:[Countries.Croatia, Countries.Montenegro, Countries.Serbia],
           Coastal:true,
           Naval:1.1,
           Land:1.6,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       
       
       Bulgaria:{
           Stats:Countries.Bulgaria,
           Borders:[Countries.Romania, Countries.Turkiye, Countries.Serbia, Countries.Macedonia, Countries.Greece],
           Coastal:true,
           Naval:1.3,
           Land:1.6,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Croatia:{
           Stats:Countries.Croatia,
           Borders:[Countries.Slovenia, Countries.Bosnia, Countries.Montenegro,Countries.Hungary, Countries.Serbia],
           Coastal:true,
           Naval:3,
           Land:3,
           Air:3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Cyprus:{
           Stats:Countries.Cyprus,
           Borders:[],
           Coastal:true,
           Naval:1.7,
           Land:1.1,
           Air:1.9,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Czechia:{
           Stats:Countries.Czechia,
           Borders:[Countries.Germany, Countries.Poland, Countries.Austria, Countries.Slovakia],
           Coastal:false,
           Naval:1,
           Land:1.9,
           Air:1.6,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Denmark:{
           Stats:Countries.Denmark,
           Borders:[Countries.Sweden, Countries.Germany],
           Coastal:true,
           Naval:2,
           Land:1.8,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Estonia:{
           Stats:Countries.Estonia,
           Borders:[Countries.Latvia, Countries.Russia],
           Coastal:true,
           Naval:1.3,
           Land:1.7,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Finland:{
           Stats:Countries.Finland,
           Borders:[Countries.Russia, Countries.Sweden, Countries.Norway],
           Coastal:false,
           Naval:1.6,
           Land:2.3,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       France:{
           Stats:Countries.France,
           Borders:[Countries.Andorra, Countries.Spain, Countries.Switzerland, Countries.Luxembourg, Countries.Belgium, Countries.Italy,Countries.Germany],
           Coastal:true,
           Naval:2.3,
           Land:2.3,
           Air:2.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Georgia:{
           Stats:Countries.Georgia,
           Borders:[Countries.Russia, Countries.Azerbaijan, Countries.Armenia, Countries.Turkiye],
           Coastal:true,
           Naval:1.1,
           Land:1.2,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Germany:{
           Stats:Countries.Germany,
           Borders:[Countries.Poland, Countries.Czechia, Countries.Luxembourg, Countries.Austria, Countries.France, Countries.Belgium, Countries.Netherlands, Countries.Switzerland],
           Coastal:true,
           Naval:2.5,
           Land:2.5,
           Air:2.5,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Greece:{
           Stats:Countries.Greece,
           Borders:[Countries.Albania, Countries.Macedonia, Countries.Bulgaria, Countries.Turkiye],
           Coastal:false,
           Naval:2,
           Land:1.5,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Hungary:{
           Stats:Countries.Hungary,
           Borders:[Countries.Austria, Countries.Serbia, Countries.Romania, Countries.Ukraine, Countries.Slovakia, Countries.Croatia, Countries.Slovenia],
           Coastal:false,
           Naval:1,
           Land:1.6,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Iceland:{
           Stats:Countries.Iceland,
           Borders:[],
           Coastal:true,
           Naval:2.5,
           Land:1.1,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Ireland:{
           Stats:Countries.Ireland,
           Borders:[Countries.Uk],
           Coastal:true,
           Naval:2,
           Land:1.9,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Italy:{
           Stats:Countries.Italy,
           Borders:[Countries.France, Countries.Slovenia, Countries.Switzerland, Countries.Austria],
           Coastal:true,
           Naval:2,
           Land:2,
           Air:2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Kazakhstan:{
           Stats:Countries.Kazakhstan,
           Borders:[Countries.Russia],
           Coastal:false,
           Naval:1,
           Land:1.1,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Kosovo:{
           Stats:Countries.Kosovo,
           Borders:[Countries.Serbia, Countries.Macedonia, Countries.Montenegro, Countries.Albania],
           Coastal:false,
           Naval:1,
           Land:1.3,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Latvia:{
           Stats:Countries.Latvia,
           Borders:[Countries.Lithuania, Countries.Russia, Countries.Estonia, Countries.Belarus],
           Coastal:true,
           Naval:1.2,
           Land:1.4,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Liechtenstein:{
           Stats:Countries.Liechtenstein,
           Borders:[Countries.Switzerland, Countries.Austria],
           Coastal:false,
           Naval:1,
           Land:1,
           Air:1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Lithuania:{
           Stats:Countries.Lithuania,
           Borders:[Countries.Russia, Countries.Latvia, Countries.Belarus],
           Coastal:false,
           Naval:1,
           Land:1.6,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Luxembourg:{
           Stats:Countries.Luxembourg,
           Borders:[Countries.Belgium, Countries.Germany, Countries.France],
           Coastal:false,
           Naval:1,
           Land:1.1,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Macedonia:{
           Stats:Countries.Macedonia,
           Borders:[Countries.Greece, Countries.Albania, Countries.Kosovo, Countries.Bulgaria, Countries.Serbia],
           Coastal:false,
           Naval:1,
           Land:1.3,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Moldova:{
           Stats:Countries.Moldova,
           Borders:[Countries.Russia, Countries.Romania],
           Coastal:false,
           Naval:1,
           Land:1,
           Air:1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Montenegro:{
           Stats:Countries.Montenegro,
           Borders:[Countries.Bosnia, Countries.Croatia, Countries.Serbia, Countries.Kosovo, Countries.Albania],
           Coastal:true,
           Naval:1.5,
           Land:1.3,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Netherlands:{
           Stats:Countries.Netherlands,
           Borders:[Countries.Belgium, Countries.Germany],
           Coastal:true,
           Naval:1.5,
           Land:1.8,
           Air:1.6,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Norway:{
           Stats:Countries.Norway,
           Borders:[Countries.Sweden, Countries.Finland],
           Coastal:true,
           Naval:2,
           Land:1.9,
           Air:1.4,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Poland:{
           Stats:Countries.Poland,
           Borders:[Countries.Germany, Countries.Russia, Countries.Lithuania, Countries.Ukraine, Countries.Belarus, Countries.Slovakia, Countries.Czechia],
           Coastal:true,
           Naval:1.5,
           Land:2,
           Air:2.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Portugal:{
           Stats:Countries.Portugal,
           Borders:[Countries.Spain],
           Coastal:true,
           Naval:2.1,
           Land:1.4,
           Air:1.3,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Romania:{
           Stats:Countries.Romania,
           Borders:[Countries.Ukraine, Countries.Moldova, Countries.Hungary, Countries.Serbia, Countries.Bulgaria],
           Coastal:true,
           Naval:1.2,
           Land:1.7,
           Air:1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Russia:{
           Stats:Countries.Russia,
           Borders:[Countries.Lithuania, Countries.Belarus, Countries.Poland, Countries.Estonia, Countries.Latvia,Countries.Ukraine,Countries.Finland, Countries.Kazakhstan, Countries.Georgia, Countries.Azerbaijan],
           Coastal:false,
           Naval:1,
           Land:3,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Serbia:{
           Stats:Countries.Serbia,
           Borders:[Countries.Croatia, Countries.Hungary, Countries.Romania, Countries.Kosovo, Countries.Montenegro, Countries.Bosnia, Countries.Macedonia],
           Coastal:false,
           Naval:1,
           Land:1.9,
           Air:1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Slovakia:{
           Stats:Countries.Slovakia,
           Borders:[Countries.Austria, Countries.Hungary, Countries.Czechia, Countries.Ukraine, Countries.Poland],
           Coastal:false,
           Naval:1,
           Land:1.2,
           Air:1.2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Slovenia:{
           Stats:Countries.Slovenia,
           Borders:[Countries.Italy, Countries.Croatia, Countries.Austria, Countries.Hungary],
           Coastal:true,
           Naval:1.2,
           Land:1.2,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Spain:{
           Stats:Countries.Spain,
           Borders:[Countries.Andorra, Countries.France, Countries.Portugal],
           Coastal:true,
           Naval:2,
           Land:2,
           Air:1.5,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Sweden:{
           Stats:Countries.Sweden,
           Borders:[Countries.Norway, Countries.Finland, Countries.Denmark],
           Coastal:true,
           Naval:1.6,
           Land:2.1,
           Air:1.5,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Switzerland:{
           Stats:Countries.Switzerland,
           Borders:[Countries.France, Countries.Italy, Countries.Austria, Countries.Germany, Countries.Liechtenstein],
           Coastal:false,
           Naval:1,
           Land:1.5,
           Air:1.5,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Turkiye:{
           Stats:Countries.Turkiye,
           Borders:[Countries.Armenia, Countries.Georgia, Countries.Bulgaria, Countries.Greece],
           Coastal:true,
           Naval:2.1,
           Land:2.1,
           Air:2.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       UK:{
        Stats:Countries.Uk,
           Borders:[Countries.Ireland],
           Coastal:true,
           Naval:3,
           Land:2,
           Air:2,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
       Ukraine:{
           Stats:Countries.Ukraine,
           Borders:[Countries.Russia, Countries.Moldova, Countries.Slovakia, Countries.Romania, Countries.Poland, Countries.Hungary, Countries.Belarus],
           Coastal:true,
           Naval:1.4,
           Land:1.3,
           Air:1.1,
           Hostile:false,
           Threatened:1,
           Taken:false,
           Invaded: false
       },
   
};




const countriesList = [countries.Albania, countries.Andorra, countries.Armenia, countries.Austria, countries.Azerbaijan, countries.Belarus, countries.Belgium, countries.Bosnia, countries.Bulgaria, countries.Croatia, countries.Cyprus, countries.Czechia, countries.Denmark, countries.Estonia, countries.Finland, countries.France, countries.Georgia, countries.Germany, countries.Greece, countries.Hungary, countries.Iceland, countries.Ireland, countries.Italy, countries.Kazakhstan, countries.Kosovo, countries.Latvia, countries.Liechtenstein, countries.Lithuania, countries.Luxembourg, countries.Macedonia, countries.Moldova, countries.Montenegro, countries.Netherlands, countries.Norway, countries.Poland, countries.Portugal, countries.Romania, countries.Russia, countries.Serbia, countries.Slovakia, countries.Slovenia, countries.Spain, countries.Sweden, countries.Switzerland, countries.Turkiye, countries.UK, countries.Ukraine]
const countryImagesList = ['Countries/Albania.png','Countries/Andorra.png','Countries/Armenia.png','Countries/Austria.png','Countries/Azerbaijan.png','Countries/Belarus.png','Countries/Belgium.png','Countries/Bosnia.png','Countries/Bulgaria.png','Countries/Croatia.png','Countries/Cyprus.png','Countries/Czechia.png','Countries/Denmark.png','Countries/Estonia.png','Countries/Finland.png','Countries/France.png','Countries/Georgia.png','Countries/Germany.png','Countries/Greece.png','Countries/Hungary.png','Countries/Iceland.png','Countries/Ireland.png','Countries/Italy.png','Countries/Kazakhstan.png','Countries/Kosovo.png','Countries/Latvia.png','Countries/Liechtenstein.png','Countries/Lithuania.png','Countries/Luxembourg.png','Countries/Macedonia.png','Countries/Moldova.png','Countries/Montenegro.png','Countries/Netherlands.png','Countries/Norway.png','Countries/Poland.png','Countries/Portugal.png','Countries/Romania.png','Countries/Russia.png','Countries/Serbia.png','Countries/Slovakia.png','Countries/Slovenia.png','Countries/Spain.png','Countries/Sweden.png','Countries/Switzerland.png','Countries/Turkiye.png','Countries/UK.png','Countries/Ukraine.png',];
let enemyCountries = [countries.Albania, countries.Andorra, countries.Armenia, countries.Austria, countries.Azerbaijan, countries.Belarus, countries.Belgium, countries.Bosnia, countries.Bulgaria, countries.Croatia, countries.Cyprus, countries.Czechia, countries.Denmark, countries.Estonia, countries.Finland, countries.France, countries.Georgia, countries.Germany, countries.Greece, countries.Hungary, countries.Iceland, countries.Ireland, countries.Italy, countries.Kazakhstan, countries.Kosovo, countries.Latvia, countries.Liechtenstein, countries.Lithuania, countries.Luxembourg, countries.Macedonia, countries.Moldova, countries.Montenegro, countries.Netherlands, countries.Norway, countries.Poland, countries.Portugal, countries.Romania, countries.Russia, countries.Serbia, countries.Slovakia, countries.Slovenia, countries.Spain, countries.Sweden, countries.Switzerland, countries.Turkiye, countries.UK, countries.Ukraine];
let invadedCountries = [];
let takenCountries = [];

//lists for enemy cities and taken cities


let enemyCityList = [];
let friendlyCityList = [];
let currentBattles = [];
let arraySelector = 0;
let enemySelector = 0;
let starterImage;
let imageSelector = 0;
//make a money system with mines should be easy
let money = 0;


let baseCountry;
//mostly for starting off
const choose = document.getElementById('chooseCountry');
const taken = document.getElementById('takenCountries');
const enemy = document.getElementById('enemyCountries');
const results = document.getElementById('results');
//for the basic switching and choosing interface
const controller = document.getElementById('controller');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const imageStats = document.getElementById('imageStats');
const selectors = document.getElementsByClassName('changers');
const targetCities = document.getElementById('enemyCities');
const cities = document.getElementById('cities');
//for the movement of troops
const fromCity = document.getElementById('moveFromCity');
const toCity = document.getElementById('moveToCity');
const moveTroops = document.getElementById('moveTroops');
const troopAmount = document.getElementById('troopMoveAmount');

//for building things in cities
const buildSelect = document.getElementById('buildSelect');
const buildFarm = document.getElementById('buildFarm');
const buildMilitaryBase = document.getElementById('buildMilitaryBase');
const buildTower = document.getElementById('buildTower');
const buildMine = document.getElementById('buildMine');

// to fill all the selects
countriesList.forEach((country) =>{
// these are for the option values
const choice = document.createElement('option');
choice.value = arraySelector;
choice.textContent = country.Stats.Name;
choose.appendChild(choice);
arraySelector++;
});




//start up function to begin the game after a selection
document.getElementById('select').addEventListener('click', function(){

    takenCountries.push(countriesList[document.getElementById('chooseCountry').value]);
    enemyCountries.splice(document.getElementById('chooseCountry').value, 1);
   if(document.getElementById('chooseCountry').value != '')
   {
    document.getElementById('startSelect').style.display = 'none';
    controller.style.display = 'block';
   const countryChoice = countriesList[document.getElementById('chooseCountry').value];
   
   baseCountry = countryChoice;
   starterImage = countryImagesList[document.getElementById('chooseCountry').value];

 countryChoice.Taken = true;
   imageStats.innerHTML = `Country Name: ${countryChoice.Stats.Name} <br> Country Number: ${parseInt(document.getElementById('chooseCountry').value) + 1}`;
   imageSelector = document.getElementById('chooseCountry').value;
   results.textContent = `Country Chosen: ${countryChoice.Stats.Name}`;
  document.getElementById('countryImages').src = starterImage;
  const firstCountry = document.createElement('option');
  firstCountry.value = parseInt(document.getElementById('chooseCountry').value);
  firstCountry.textContent = countryChoice.Stats.Name;
  taken.appendChild(firstCountry);


  enemyCountries.forEach((country) =>{
    // these are for the option values
    const choice = document.createElement('option');
    choice.value = enemySelector;
    choice.textContent = country.Stats.Name;
    country.Stats.Tower = false;
    Object.keys(country.Stats.Cities).forEach(city =>{
       
        enemyCityList.push(city);
        country.Stats.Cities[city].Military = country.Stats.Cities[city].Population/10;
        country.Stats.Cities[city].Tower = false;
        country.Stats.Cities[city].Farm = false;
        country.Stats.Tower = false;
        country.Stats.Cities[city].Base = false;
        country.Stats.Cities[city].Mine = false;
        country.Stats.Cities[city].Supplies = 0;
       
    });
   
    enemy.appendChild(choice);
    enemySelector++;
    if(enemySelector == document.getElementById('chooseCountry').value)
    {
        enemySelector++;
    }
    });




    

    fillCities(countryChoice, cities);
    fillCities(countryChoice, fromCity);
    fillCities(countryChoice, toCity);
    fillCities(countryChoice, buildSelect);
   

    Object.keys(countryChoice.Stats.Cities).forEach(city =>{
       
        friendlyCityList.push(city);
        countryChoice.Stats.Cities[city].Military = countryChoice.Stats.Cities[city].Population/10;
        if(countryChoice.Stats.Cities[city].Capital == true)
        {
            countryChoice.Stats.Cities[city].Tower = true;
            countryChoice.Stats.Cities[city].Farm = true;
            countryChoice.Stats.Cities[city].Base = true;
            countryChoice.Stats.Cities[city].Supplies = countryChoice.Stats.Population/10;
            countryChoice.Stats.Tower = true;
            countryChoice.Stats.Cities[city].Mine = true;
            
           
        }else
        {
            countryChoice.Stats.Cities[city].Tower = false;
            countryChoice.Stats.Cities[city].Farm = false;
            countryChoice.Stats.Cities[city].Base = false;
            countryChoice.Stats.Cities[city].Supplies = 0;
             countryChoice.Stats.Cities[city].Mine = false;
        }

    });
   
    
   
   }else
   {
       results.textContent = 'No country selected. go again.';
   }


const buildInterval = setInterval(() =>{

 Object.keys(baseCountry.Stats.Cities).forEach((city) =>{
    
 
if(currentBattles.indexOf(baseCountry.Stats.Cities[city].Name) == -1)
{
   
if(baseCountry.Stats.Cities[city].Tower == true && baseCountry.Stats.Cities[city].Tower)
{
    baseCountry.Stats.Cities[city].Military += baseCountry.Stats.Cities[city].Population/50;
    
}
if(baseCountry.Stats.Cities[city].Farm == true)
{
     baseCountry.Stats.Cities[city].Supplies += baseCountry.Stats.Cities[city].Population/10;
}
if(baseCountry.Stats.Cities[city].Base == true)
{
     baseCountry.Stats.Cities[city].Military += baseCountry.Stats.Cities[city].Population/100;   
}
if(baseCountry.Stats.Cities[city].Mine == true)
{
     money += baseCountry.Stats.Cities[city].Population/1000;
}
}
}); 

},5000);

setInterval(()=>{

if(takenCountries.length == countriesList.length)
{
window.location.href = 'win.html';
}else if(takenCountries.length == 0)
{
window.location.href = 'lose.html';
}

},1000)

});


//eventListener for changing country using the selects


//target cities must be changed so that each country has its own individual selector. target cities might have to be changed to a div instead.
//fill cities might be removed if we can simply swap through selectors
for(let i = 0; i < selectors.length; i++)
{
selectors[i].addEventListener('change', function(){
    console.log(this.value);
document.getElementById('countryImages').src = countryImagesList[this.value];
imageStats.innerHTML = `Country Name: ${countriesList[this.value].Stats.Name} <br> Country Number: ${parseInt(this.value) + 1}`;
imageSelector = this.value;
selectors[i].selectedIndex = 0;
if(!countriesList[imageSelector].Taken)
{
fillCities(countriesList[imageSelector], targetCities);  
}else
{
    targetCities.innerHTML = '';
    const choice = document.createElement('option'); 
    choice.textContent = 'No locations present.';
    targetCities.appendChild(choice);
    
}
});
};

//Previous and Next need indicators on what coutnry it is and the number
previous.addEventListener('click', function(){


imageSelector--;
if(imageSelector < 0)
{
    imageSelector = 46;
}
document.getElementById('countryImages').src = countryImagesList[imageSelector];
imageStats.innerHTML = `Country Name: ${countriesList[imageSelector].Stats.Name} <br> Country Number: ${imageSelector + 1}`;
if(!countriesList[imageSelector].Taken)
{
fillCities(countriesList[imageSelector], targetCities);
}else
{
    targetCities.innerHTML = '';
    const choice = document.createElement('option'); 
    choice.textContent = 'No locations present.';
    targetCities.appendChild(choice);
}



});




next.addEventListener('click', function(){


    imageSelector++;
    if(imageSelector > 46)
{
   
    imageSelector = 0;




}
document.getElementById('countryImages').src = countryImagesList[imageSelector];
imageStats.innerHTML = `Country Name: ${countriesList[imageSelector].Stats.Name} <br> Country Number: ${imageSelector + 1}`;
if(!countriesList[imageSelector].Taken)
{
fillCities(countriesList[imageSelector], targetCities);  
}else
{
    targetCities.innerHTML = '';
    const choice = document.createElement('option'); 
    choice.textContent = 'No locations present.';
    targetCities.appendChild(choice);
}

    });
   
//functions for enemy and friendly cities




function fillCities(country, selectionList)
{
selectionList.innerHTML = '';
Object.keys(country.Stats.Cities).forEach((city) =>{
if(friendlyCityList.indexOf(city) == -1)
{
const choice = document.createElement('option');
choice.value = city;
choice.textContent = city;
selectionList.appendChild(choice);
}

});

if(selectionList.length == 0)
{
    targetCities.innerHTML = '';
    const choice = document.createElement('option'); 
    choice.textContent = 'No locations present.';
    targetCities.appendChild(choice);  
    
}
}

//a basic testing button for land attacks
document.getElementById('sendTroops').addEventListener('click', () =>{


    if(enemyCityList.indexOf(targetCities.value) != -1 && currentBattles.indexOf(targetCities.value) == -1 && currentBattles.indexOf(cities.value) == -1)
    {
        
        let yourCityAttacker;
        let enemyCityAttacker;

        countriesList.forEach(country =>{

            Object.keys(country.Stats.Cities).forEach(city =>{

            if(country.Stats.Cities[city].Name.toLowerCase() == cities.value.toLowerCase())
           {
            yourCityAttacker = country.Stats.Cities[city];
            console.log(yourCityAttacker);
           }
           if(country.Stats.Cities[city].Name.toLowerCase() == targetCities.value.toLowerCase())
            {
                enemyCityAttacker = country.Stats.Cities[city];
                console.log(enemyCityAttacker);
            }
            
            });

        });
        console.log(yourCityAttacker);
        console.log(enemyCityAttacker);
        
        landDetermine(yourCityAttacker.Military, baseCountry.Land, enemyCityAttacker.Military, countriesList[imageSelector].Land, yourCityAttacker, enemyCityAttacker);

       
    }else
    {
        console.log('invalid!');
    }
    if(targetCities.length - 1 == 0 && !countriesList[imageSelector].Taken)
    {
     takeObject(countriesList[imageSelector].Stats.Name, takenCountries, enemyCountries, taken, enemy);
    }
  


});

// function to switch list objects around
function takeObject(objectToTake, listToAdd, listToTake, dropdownToAdd, dropdownToTake)
{
    if(listToAdd.indexOf(objectToTake) == -1)
    {
   for(let i = 0; i < dropdownToTake.length; i++)
   {
    if(dropdownToTake[i].value.toLowerCase() == objectToTake.toLowerCase())
    {
        dropdownToTake.remove(i);
    }
   }
  // takeObject(cities.value, enemyCityList, friendlyCityList, targetCities, cities);
   listToTake.splice(listToTake.indexOf(objectToTake), 1);
   listToAdd.push(objectToTake);

const choice = document.createElement('option');
if(countriesList[imageSelector].Stats.Name == objectToTake)
{
    
choice.value = imageSelector;
    
}else
{

choice.value = objectToTake;
}
choice.textContent = objectToTake;
dropdownToAdd.appendChild(choice);
}

if(dropdownToTake.length == 0)
{
   
    dropdownToTake.innerHTML = '';
    const choice = document.createElement('option'); 
    choice.textContent = 'No locations present.';
    dropdownToTake.appendChild(choice); 

}



}



//functions for battling kept down here

//function to determine who wins a battle
function landDetermine(size, power, enemySize, enemyPower, self, foe)
{
   
   currentBattles.push(self.Name);
   currentBattles.push(foe.Name);
   console.log(self.Name);
   console.log(foe.Name);
   console.log(currentBattles);
   
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
if(self.Supplies > 0)
{
    self.Supplies -= population;
    if(self.Supplies <= 0)
    {
        randomEnemyKills * 3;
    }
}
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
console.log(randomKills/2 + " kills");
console.log(randomEnemyKills/2 + " deaths");

   if(population <= 0 || enemyPopulation <= 0)
   {
    currentBattles.splice(currentBattles.indexOf(self.Name), 1);
    currentBattles.splice(currentBattles.indexOf(foe.Name), 1);
       clearInterval(battle);
       if(population >= 0)
       {
         takeObject(foe.Name, friendlyCityList, enemyCityList, cities, targetCities);
         
         console.log('thats a win!');
         console.log(foe.Name);
        
         

         
         countriesList.forEach(country =>{

            Object.keys(country.Stats.Cities).forEach(city =>{

           if(country.Stats.Cities[city].Name.toLowerCase() == self.Name.toLowerCase())
           {
            
           country.Stats.Cities[city].Population -= (fullPop - population);
            country.Stats.Population -= (fullPop - population);
            country.Stats.Cities[city].Military -= (fullPop - population);
            baseCountry.Stats.Cities[foe.Name] = foe;
           }
           if(country.Stats.Cities[city].Name.toLowerCase() == foe.Name.toLowerCase())
            {
               
             country.Stats.Cities[city].Population -= enemyFullPop;
             country.Stats.Population -= enemyFullPop;
             country.Stats.Cities[city].Military -= enemyFullPop;
            delete country.Stats.Cities[foe.Name];
            }
            
            });

        });
         

        
         
       }else
       {
         takeObject(self.Name, enemyCityList, friendlyCityList, targetCities, cities);
         console.log('thats a loss!')
          console.log(enemyCityList.indexOf(self.Name));

         countriesList.forEach(country =>{

            Object.keys(country.Stats.Cities).forEach(city =>{

           if(country.Stats.Cities[city].Name.toLowerCase() == foe.Name.toLowerCase())
           {
            country.Stats.Cities[city].Population -= (enemyFullPop - enemyPopulation);
            country.Stats.Population -= (enemyFullPop - enemyPopulation);
            country.Stats.Cities[city].Military -= (enemyFullPop - enemyPopulation);
            country.Stats.Cities[self.Name] = self;
            console.log(self);
             
           }
           if(country.Stats.Cities[city].Name.toLowerCase() == self.Name.toLowerCase())
            {  
             country.Stats.Cities[city].Population -= fullPop;
             country.Stats.Population -= fullPop;
             country.Stats.Cities[city].Military -= fullPop;
             country.Stats.Cities[city].Base = false;
             country.Stats.Cities[city].Tower = false;
             country.Stats.Cities[city].Farm = false;
             country.Stats.Cities[city].Mine = false;
             delete country.Stats.Cities[self.Name];
             delete baseCountry.Stats.Cities[self.Name];
             
            }
            
            
            });

        });
         
       }
toCity.innerHTML = '';
fromCity.innerHTML = '';
buildSelect.innerHTML = '';

Object.keys(baseCountry.Stats.Cities).forEach((city) =>{

const choice = document.createElement('option');
choice.value = city;
choice.textContent = city;
fromCity.appendChild(choice);


});
Object.keys(baseCountry.Stats.Cities).forEach((city) =>{

const choice = document.createElement('option');
choice.value = city;
choice.textContent = city;
toCity.appendChild(choice);


});

Object.keys(baseCountry.Stats.Cities).forEach((city) =>{

    const choice = document.createElement('option');
    choice.value = city;
    choice.textContent = city;
    buildSelect.appendChild(choice);
    
    
    });
   }

},1000);
}


//function to move military

moveTroops.addEventListener('click', () =>{

const cityFrom = baseCountry.Stats.Cities[fromCity.value];
const cityTo = baseCountry.Stats.Cities[toCity.value];
let militaryMoveAmount = troopAmount.value;
if(cityFrom == cityTo)
{
    return console.log('invalid!');
}else if(militaryMoveAmount <= 0)
{
   return console.log('invalid!');  
}else
{
 if(militaryMoveAmount > cityFrom.Military)
    {
        militaryMoveAmount = cityFrom.Military;
    }   
    cityFrom.Military -= militaryMoveAmount;
    cityTo.Military += parseInt(militaryMoveAmount);
    troopAmount.value = '';
    
}



});

// event listeners for building

buildFarm.addEventListener('click', ()=>{
if(money - 10000 >= 0 && !baseCountry.Stats.Cities[buildSelect.value].Farm)
{
 baseCountry.Stats.Cities[buildSelect.value].Farm = true;
}else
{
    console.log(money);
}
});
buildTower.addEventListener('click', ()=>{

 if(money - 10000 >= 0)
{
 countriesList.forEach(country =>{

Object.keys(country.Stats.Cities).forEach((city) =>{
if(country.Stats.Cities[city].Name == buildSelect.value)
{
    if(country.Stats.Tower)
    {
        console.log('cant build');
    }else
    {
       baseCountry.Stats.Cities[buildSelect.value].Tower = true; 
    }
} 

});

 });   
}else
{
    console.log(money);
}

});
buildMilitaryBase.addEventListener('click', ()=>{

if(money - 10000 >= 0 && !baseCountry.Stats.Cities[buildSelect.value].Base)
{
 baseCountry.Stats.Cities[buildSelect.value].Base = true;
}else
{
    console.log(money);
}
});
buildMine.addEventListener('click', ()=>{

if(money - 10000 >= 0 && !baseCountry.Stats.Cities[buildSelect.value].Mine)
{
 baseCountry.Stats.Cities[buildSelect.value].Mine = true;
}else
{
    console.log(money);
}
});

```
