
const currentDate = new Date();
let time = 0;
let light = true;
document.getElementById('dateDisplay').innerHTML = currentDate.toLocaleDateString('en-US');

document.getElementById('user').innerHTML = localStorage.getItem('User') + '!';


setInterval(()=>{

time++;

document.getElementById('timeDisplay').innerHTML = time;
}, 1000);

document.getElementById('play').addEventListener('click', ()=>{

sessionStorage.setItem('Time', time);
window.location.href = 'game.html';

});

document.getElementById('changeUser').addEventListener('click', ()=>{
if(document.getElementById('changeUserInput').value != '')
{
localStorage.setItem('User', document.getElementById('changeUserInput').value);
document.getElementById('user').innerHTML = localStorage.getItem('User') + '!';
}



});

document.getElementById('Theme').addEventListener('click', ()=>{
if(light)
{
document.getElementById('container').className = 'dark';
document.body.style.backgroundColor = 'black';
light = false;
}else
{
document.getElementById('container').className = 'light';
document.body.style.backgroundColor = 'white';
light = true;
}


});
