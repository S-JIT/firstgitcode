// Write your code below:

const h3Heading=document.createElement('h3');
const h3Text=document.createTextNode('Buy high quality organic fruits online');
h3Heading.appendChild(h3Text);
const divs=document.getElementsByTagName('div');
const firstDiv=divs[0];
firstDiv.appendChild(h3Heading);
h3Heading.style.fontStyle='italic';
//now inside the second division add a paragraph tag
const para=document.createElement('p');
const paraText=document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
//insert before
const secondDiv=divs[1];
const fruits=document.querySelector('.fruits');
const basketHeading=document.getElementById('basket-heading');
secondDiv.insertBefore(para,fruits);
//set id oof fruits-total
para.id='fruits-total';