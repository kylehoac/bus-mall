'use strict';

// global variables
// const itemImageElem = document.getElementById('allItems');
// const leftItemImgElem = document.getElementById('leftItemImg');
// const midItemImgElem = document.getElementById('midItemImg');
// const rightItemImgElem = document.getElementById('rightItemImg');
// const leftItemDescElem = document.getElementById('leftItemDesc');
// const midItemDescElem = document.getElementById('midItemDesc');
// const rightItemDescElem = document.getElementById('rightItemDesc');

const maxClicks = 25;
let totalClicks = 0;

// constructor function
const Item = function (name,imgURL) {
    this.name = name;
    this.imgURL = imgURL;
    this.timesShown = 0;
    this.clicks = 0;

    Item.all.push(this);
};

Item.all = [];



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
new Item('Sweep', 'img/sweep.jpg');
new Item('Tauntaun', 'img/tauntaun.jpg');
new Item('Unicorn', 'img/unicorn.jpg');
new Item('Usb', 'img/usb.jpg');
new Item('Water Can', 'img/water-can.jpg');
new Item('Wine Glass', 'img/wine-glass.jpg');
