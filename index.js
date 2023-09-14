let yourColor = ['red', 'green', 'blue', 'cyan', 'purple','aqua', 'chocolate', 'coral'];
let changeColor = document.getElementById('btn');
let color = document.querySelector('.color');

changeColor.addEventListener('click', function(){
    
    let colorRandom = getRandom();
    document.body.style.background = yourColor[colorRandom];
    console.log(colorRandom);
    color.textContent = yourColor[colorRandom];
   
} )

  function getRandom(){
    return Math.floor(Math.random() * yourColor.length);
  }