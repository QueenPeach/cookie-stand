'use strict';

var storeOne = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,

  custPerHour: function() {
    console.log('1st and Pike:', storeOne);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};


var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,

  custPerHour: function() {
    console.log('SeaTac Airport:', storeTwo);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,

  custPerHour: function() {
    console.log('Seattle Center:', storeThree);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,

  custPerHour: function() {
    console.log('Capitol Hill:', storeFour);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};
