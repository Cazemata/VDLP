import content from './content.json' with { type: "json" };
import category from './categories.json' with { type: "json"};

//const card1 = Object.assign({}, content, category);

// const card2 = {};
// content.forEach(element => {
//     console.log("element", element);
// }); 
// for (var key in content) { console.log("key", key); card2[key]=content[key]; console.log(card2); };
// for (var key in category) card2[key]=category[key];

// const card3 = { ...content, ...category };

// // console.log(card1, card2, card3)

const card = content.map(object => {
    const matched = category.find(element => element.CategoryId === object.CategoryId);
    return { ...object, ...matched };
});

const getCardHtml = (item, index) =>
    `<div class="card">
        <div class="img" style="background-image:${item.Image};"></div>
        <div class="content">
            <div class="card-title">${item.Title}</div>
            <div class="author">${item.Author}</div>
            <div class="desc"><p>${item.Desc}</p></div>
            <div class="end h2">
                <div class="btn-link">
                Get Started
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7656 17.0573L17.8489 9.97396M17.8489 9.97396L10.7656 2.89062M17.8489 9.97396H2.22394" stroke="#BD0000" stroke-linecap="round"/>
                </svg>
                </div>      
            </div>
        </div>
    </div>`;

const cards = card.map(function (item, index) {
    return getCardHtml(item, index);
});

document.querySelector(".card-row").innerHTML = cards.join('');