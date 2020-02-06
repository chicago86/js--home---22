(function() {

let btn = document.querySelector('.ba-random-btn'),
inputNumber =document.querySelector('[name="number"]'),
randomEl = document.querySelector('.ba-random__result');


console.log(btn);
console.log(randomEl);


// function showRandom() {
//     let random1, random2;
    
//     let userNumber = inputNumber.value;
    

//     random1 = Math.random() * userNumber;
//     random1 = Math.floor(random1) + 1;

//     random2 = Math.random() * userNumber;
//     random2 = Math.floor(random2) + 1;

//     randomEl.textContent = random1 + ' : ' + random2;
// }

// function showUserRandom() {
//     let num1 = +document.getElementById('min').value; 
//     let num2 = +document.getElementById('max').value; 
//     let random;
//     let min, max;
// if(
//     num1 > num2
// )    {
//     min = num2;
//     max = num1;
// }
// else{
//     min = num1;
//     max = num2;
// }
    
    
//     random = min + Math.random() * ((max + 1) - min);
//     random = Math.floor(random);


//     randomEl.textContent = random;
// }
function headTail() {
  
let numberOfBeer;
let reshka = Math.round(Math.random());
    

if(reshka)
{
numberOfBeer = "🍺"
}
else{
    numberOfBeer = "🍻"
}



    randomEl.textContent += numberOfBeer;
}

// btn.addEventListener('click', showRandom);
// btn.addEventListener('click', showUserRandom);
btn.addEventListener('click', headTail);
})();
