
const form = document.querySelector('#controls')
const numberArea= form.firstElementChild;
const createButton=numberArea.nextElementSibling;
const destroyButton=form.lastElementChild;
const elementsBoxesArea =document.querySelector('#boxes')

createButton.addEventListener('click',hadleClickCreateElements)

function hadleClickCreateElements ()  {
  let elements=[];
   for (let i = 0; i <= numberArea.value-1; i+=1) 
   {  
  let element = createOneElement()
  let widthValue=30
  let heigthValue=30
  widthValue+=10*i
  heigthValue+=10*i 
  element.style.width = `${widthValue}px`
  element.style.height = `${heigthValue}px`
  elements.push(element)
  };
    elementsBoxesArea.append(...elements)
}

function createOneElement (){
  let oneElement=document.createElement('div');
  oneElement.style.backgroundColor=getRandomHexColor()
  return oneElement
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
destroyButton.addEventListener('click',destroyBoxes)

function destroyBoxes (){
elementsBoxesArea.innerHTML = ' '
}



