const categoriesCounter= categories.querySelectorAll('h2')
console.log(`Number of categories:${categoriesCounter.length}`);
const categoryElementsArray=document.querySelectorAll('.item');
    categoryElementsArray.forEach(function createMessage(element) {
        const categoryName=element.querySelector(`h2`).textContent
        const categoryElementsCount = element.querySelectorAll('li').length
     console.log(`Category: ${categoryName}`); console.log(`Elements: ${categoryElementsCount}`);
  });