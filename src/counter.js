import data from './data.json';

const counters = document.querySelectorAll('.category');
const resultScore = document.querySelector('.result__score--js');
let fullScore = 0;


for (const [index, element] of counters.entries()) {
    const category = element.querySelector('.category__name');
    const score = element.querySelector('.category__score--my_score');
    const icon = element.querySelector('.category__icon');

    category.textContent = data[index].category;
    score.textContent = data[index].score;
    //icon.src = data[index].icon;//I don't know how to do it properly. it isn't working :(
    //icon.src = new URL('./assets/images/icon-reaction.svg', import.meta.url);
    //icon.src = new URL(data[0].icon, import.meta.url);

    fullScore += data[index].score;
}
//final result
resultScore.textContent = parseInt(fullScore/counters.length);

//create new image in DOM
// let img = document.createElement('img');
// img.src = new URL('./assets/images/icon-reaction.svg', import.meta.url);
// document.body.appendChild(img);