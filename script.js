/* 
## DOM SELECTORS
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changin Styles
style.{property}

className
classList

classList.add
classList.remove
classList.toggle

## BONUS 

inerHTML      // DANGEROUS

parentElement
children

## It is vey important to CACHE selectors in variables
*/

/*
document.querySelector("h1").classList.toggle("coolTitle")
document.querySelector("h1").style.background = 'yellow';
document.querySelector("h1").style.("coolTitle")
const h1 = document.querySelector("h1")
h1.className= 'coolTitle'
*/


/*
var button = document.getElementsByTagName('button')[0]

button.addEventListener('click', () => {
  console.log('clicking, man')
})

button.addEventListener('mouseenter', function() {
  console.log('entering')
})

button.addEventListener('mouseleave', function(){
  console.log('leaving')
});
*/




var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function createListElement(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.ppendChild(li);
    input.value= '';
};

const AddListAfterClick = () => {
  if(input.value.length > 0){
    createListElement(); 
  }
};

const addListAfterKeypress = event => {
 if(input.value.length > 0 && event.keyCode === 13){
  createListElement();
 }
};

button.addEventListener('click', addListAfterClick);
button.addEventListener('keypress', addListAfterKeypress);



