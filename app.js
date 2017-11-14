'use strict';
var hoursOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var storeOne = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,

  custPerHour: function() {
    console.log('1st and Pike:', storeOne);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hoursOp.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }

    var totalSum = 0;
    for(var j = 0; j < hoursOp.length; j++) {
      totalSum += arr[j];
    }

    arr.push(totalSum);
    console.log('total sum:', totalSum);
    return arr;
  },
};


var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,

  custPerHour: function() {
    console.log('SeaTac Airport:', storeTwo);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hoursOp.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }

    var totalSum = 0;
    for(var j = 0; j < hoursOp.length; j++) {
      totalSum += arr[j];
    }

    arr.push(totalSum);
    console.log('total sum:', totalSum);
    return arr;
  },
};


var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,

  custPerHour: function() {
    console.log('Seattle Center:', storeThree);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hoursOp.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale =', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }
    return arr;
  },
};

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,

  custPerHour: function() {
    console.log('Capitol Hill:', storeFour);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hoursOp.length; i++){
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }

    var totalSum = 0;
    for(var j = 0; j < hoursOp.length; j++) {
      totalSum += arr[j];
    }

    arr.push(totalSum);
    console.log('total sum:', totalSum);
    return arr;
  },
};


var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,

  custPerHour: function() {
    console.log('Alki:', storeFive);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function() {
    var arr = [];
    for (var i = 0; i < hoursOp.length; i++) {
      console.log('custPerHour =' , this.custPerHour());
      console.log('this.avgSale = ', this.avgSale);
      console.log(this.custPerHour() * this.avgSale);
      arr.push(this.custPerHour() * this.avgSale);
    }

    var totalSum = 0;
    for(var j = 0; j < hoursOp.length; j++) {
      totalSum += arr[j];
    }

    arr.push(totalSum);
    console.log('total sum:', totalSum);
    return arr;
  },
};
