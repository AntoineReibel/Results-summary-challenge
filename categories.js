const response = await fetch('data.json');
const categories = await response.json();

function generateCategories(categories) {
    const container = document.querySelector(".categories");
    for (let category of categories) {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category", category.name.toLowerCase());
        categoryElement.innerHTML = `
        <div class="categoryDiv">
            <img src="${category.icon}" alt="${category.name}">
            <div class="name bold smallFont">${category.name}</div>
        </div>
        <div class="categoryDiv">
            <div class="score bold smallFont darkBlue">${category.score}</div>
            <div class="porcent smallFont bold darkBlueLight">/ 100</div>
        </div>
        `;
        container.appendChild(categoryElement);
    }
}

function generateAverage (categories){
const averagediv = document.querySelector(".resultNumber")
let sum = 0
for (let category of categories){
sum += category.score
}
let average = sum/categories.length
average = Math.round(average)
averagediv.textContent = average
}

generateCategories(categories)
generateAverage(categories)