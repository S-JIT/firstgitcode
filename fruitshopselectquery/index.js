// Write the code as shown in the video below:
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.color = 'black';  
mainHeading.style.textAlign = 'right'; 

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50px';
fruits.style.listStyleType = 'none';

const fruitsItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitsItems.length; i++) {
  fruitsItems[i].style.backgroundColor = 'white';
  fruitsItems[i].style.padding = '10px';
  fruitsItems[i].style.margin = '10px';
  fruitsItems[i].style.borderRadius = '5px';
}

const evenfruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenfruitItems.length; i++) {
  evenfruitItems[i].style.backgroundColor = 'brown';
  evenfruitItems[i].style.color = 'white';  
}

const oddfruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < evenfruitItems.length; i++) {
  oddfruitItems[i].style.backgroundColor = 'lightgray';
  }


// Write answer to the questions asked below: