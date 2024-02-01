// Add the Edit Button:
  //using querySlector selecting the form tag and fruits class unorderdList

  const form = document.querySelector('form');
  const fruits = document.querySelector('.fruits');
  
  form.addEventListener('submit', function(event){
    event.preventDefault();
    //selected the input element
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
    const newLiText = document.createTextNode(fruitToAdd.value);
    //adding a list as the last element of unorderd list
    newLi.appendChild(newLiText);
    newLi.className = 'fruit';
  
    //this is another method to do
    //create and append delete btn
    /*const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';
    newLi.appendChild(deleteBtn);
  
   // create and append edit button
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    newLi.appendChild(editBtn);*/
    
    fruits.appendChild(newLi);
  })
  
  fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
      const fruitToDelete = event.target.parentElement;
      fruits.removeChild(fruitToDelete);
    }
  })
  
  // Implement the code as in video but with one extra 'Edit' button in 'li'