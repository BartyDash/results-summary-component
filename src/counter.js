import data from './data.json';

const counters = document.querySelectorAll('.category');
const resultScore = document.querySelector('.result__score--js');
let fullScore = 0;


for (const [index, element] of counters.entries()) {
    const category = element.querySelector('.category__name');
    const score = element.querySelector('.category__score--my_score');
    const icon = element.querySelector('.category__icon');

    category.textContent = data[index].category;
    score.textContent = 0;
    updateCounter(score, data[index].score, 20);
    //dynamic importing working. yeaaa!!!
    icon.src = data[index].icon;

    fullScore += data[index].score;
}
//final result
resultScore.textContent = 0;
updateCounter(resultScore, parseInt(fullScore/counters.length), 20);


function updateCounter(selector, targetScore, speed) {

    const updateCount = () => {
        const count = parseInt(selector.innerText);

        if (count < targetScore) {
            selector.innerText = count + 1;
            setTimeout(updateCount, speed);
        } else {
            selector.innerText = targetScore;
        }
    }

    updateCount();
}