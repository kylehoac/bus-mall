'use strict';

// global variables
const itemImageElem = document.getElementById('allItems');
const leftItemImgElem = document.getElementById('leftItemImg');
const midItemImgElem = document.getElementById('midItemImg');
const rightItemImgElem = document.getElementById('rightItemImg');
const leftItemDescElem = document.getElementById('leftItemDesc');
const midItemDescElem = document.getElementById('midItemDesc');
const rightItemDescElem = document.getElementById('rightItemDesc');

const maxClicks = 25;
let totalClicks = 0;

// variable storing items currently on page
let leftItemOnPage = null;
let midItemOnPage = null;
let rightItemOnPage = null;

// constructor function
const Item = function (name, imgURL) {
    this.name = name;
    this.url = imgURL;
    this.timesShown = 0;
    this.clicks = 0;

    Item.all.push(this);
};

Item.all = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // console.log(array.length);
    }
}

// render function
const renderNewItems = function () {
    leftItemImgElem.src = leftItemOnPage.url;
    leftItemImgElem.alt = leftItemOnPage.name;
    leftItemDescElem.textContent = leftItemOnPage.name;

    midItemImgElem.src = midItemOnPage.url;
    midItemImgElem.alt = midItemOnPage.name;
    midItemDescElem.textContent = midItemOnPage.name;

    rightItemImgElem.src = rightItemOnPage.url;
    rightItemImgElem.alt = rightItemOnPage.name;
    rightItemDescElem.textContent = rightItemOnPage.name;
};
function pickNewItem() {

    // rule: next item cannot have been any of the previous items
    // and not break the unique rule

    const previousLeft = leftItemOnPage;
    const previousMid = midItemOnPage;
    const previousRight = rightItemOnPage;

    shuffle(Item.all);

    for (let item of Item.all) {
        if (item !== previousLeft && item !== previousMid && item !== previousRight) {
            leftItemOnPage = item;
            break;
        }
    }

    for (let item of Item.all) {
        if (item !== previousLeft && item !== previousMid && item !== previousRight && item !== leftItemOnPage) {
            midItemOnPage = item;
            break;
        }
    }

    for (let item of Item.all) {
        if (item !== previousLeft && item !== previousMid && item !== previousRight && item !== leftItemOnPage && item !== midItemOnPage) {
            rightItemOnPage = item;
            break;
        }
    }
    // leftItemOnPage = Item.all[0];
    // midItemOnPage = Item.all[1];
    // rightItemOnPage = Item.all[2];

    renderNewItems();
}

const handleClickOnItem = function (event) {
    if (totalClicks < maxClicks) {
        const clickedItem = event.target;
        const id = clickedItem.id;

        if (id === 'leftItemImg' || id === 'midItemImg' || id === 'rightItemImg') {

            if (id === 'leftItemImg') {
                leftItemOnPage.clicks += 1;
            } else if (id === 'midItemImg') {
                midItemOnPage.clicks += 1;
            } else {
                rightItemOnPage.clicks += 1;
            }
            leftItemOnPage.timesShown += 1;
            midItemOnPage.timesShown += 1;
            rightItemOnPage.timesShown += 1;
            totalClicks += 1;

            pickNewItem();
        }
    }
    if (totalClicks === maxClicks) {
        itemImageElem.removeEventListener('click', handleClickOnItem);
        alert('Thanks for the input');
        renderLikesAndShown();
        makeAItemChart();
        // makeAVoteChart();
    }
};
itemImageElem.addEventListener('click', handleClickOnItem);

function renderLikesAndShown() {
    const itemsClickedElem = document.getElementById('itemClicks');
    itemsClickedElem.innerHTML = '';
    for (let i = 0; i < Item.all.length; i++) {
        const itemImages = Item.all[i];
        const itemResults = document.createElement('li');
        itemsClickedElem.appendChild(itemResults);
        itemResults.textContent = itemImages.name + ' : ' + itemImages.clicks + ' and ' + itemImages.timesShown;
    }
}


// constructor function instances
new Item('Bag', 'img/bag.jpg');
new Item('Banana', 'img/banana.jpg');
new Item('Bathroom', 'img/bathroom.jpg');
new Item('Boots', 'img/boots.jpg');
new Item('Breakfast', 'img/breakfast.jpg');
new Item('Bubblegum', 'img/bubblegum.jpg');
new Item('Chair', 'img/chair.jpg');
new Item('Cthulhu', 'img/cthulhu.jpg');
new Item('Dog Duck', 'img/dog-duck.jpg');
new Item('Dragon', 'img/dragon.jpg');
new Item('Pen', 'img/pen.jpg');
new Item('Pet Sweep', 'img/pet-sweep.jpg');
new Item('Scissors', 'img/scissors.jpg');
new Item('Shark', 'img/shark.jpg');
new Item('Sweep', 'img/sweep.png');
new Item('Tauntaun', 'img/tauntaun.jpg');
new Item('Unicorn', 'img/unicorn.jpg');
new Item('Usb', 'img/usb.gif');
new Item('Water Can', 'img/water-can.jpg');
new Item('Wine Glass', 'img/wine-glass.jpg');

pickNewItem();

function makeAItemChart() {

    const itemNamesArray = [];
    const itemClicksArray = [];

    for (let item of Item.all) {
        itemNamesArray.push(item.name);
        itemClicksArray.push(item.clicks);
    }

    const ctx = document.getElementById('itemChart').getContext('2d');
    const itemChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: itemNamesArray,
            datasets: [{
                label: 'Number of Votes Per Item',
                data: itemClicksArray,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
