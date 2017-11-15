'use strict';
var hoursOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = [];
console.log('locations:', locations);

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  locations.push(this);
}
console.log('store:', Store);

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTace', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
console.log('locations:', locations);

(function run () {
  Store.prototype.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  Store.prototype.cookiesPerHour = function() {
    return Math.round(this.avgSale * this.custPerHour());
  };

  Store.prototype.totalHours = function() {
    var totalHours = [];
    for(var j = 0; j < hoursOp.length; j++) {
      totalHours.push(this.cookiesPerHour());
    }

    var totalSum = 0;
    for(var k = 0; k < totalSum.length; k++) {
      totalSum += totalHours[k];
    }
    totalHours.push(totalSum);
    console.log('total hours:', totalHours);
    return totalHours;
  };
})();

Store.tablHours = function() {
  var tablEl = document.getElementById('main-table');
  var tbody = document.createElement('tbody');
  tbody.id = 'tbodyEL';
  tablEl.appendChild(tbody);

  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);

  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);

  for (var i = 0; i < hoursOp.length; i++); {
    tdEl = document.createElement('td');
    var time = hoursOp[i];
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};
Store.tablHours();



// var storeOne = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//
//   custPerHour: function() {
//     console.log('1st and Pike:', storeOne);
//     return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hoursOp.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push (Math.round(this.custPerHour() * this.avgSale));
//     }
//
//     var totalSum = 0;
//     for(var j = 0; j < hoursOp.length; j++) {
//       totalSum += arr[j];
//     }
//
//     arr.push(totalSum);
//     console.log('total sum:', totalSum);
//     return arr;
//
//   },
//
//   pubList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//
//     var paragraph = document.createElement('p');
//     var liName = document.createTextNode(this.name);
//     paragraph.appendChild(liName);
//     var liStart = document.getElementById('start');
//     liStart.insertBefore(paragraph, document.getElementById('1'));
//
//     for (var i = 0; i < hoursOp.length; i++){
//       var time = document.createElement('li');
//       time.appendChild(document.createTextNode(hoursOp[i] + ': ' + cookiesPerHour[i] + ' cookies'));
//       document.getElementById('1').appendChild(time);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies'));
//     document.getElementById('1').appendChild(totalCookies);
//   }
// };
//
//
// var storeTwo = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//
//   custPerHour: function() {
//     console.log('SeaTac Airport:', storeTwo);
//     return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hoursOp.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push (Math.round(this.custPerHour() * this.avgSale));
//     }
//
//     var totalSum = 0;
//     for(var j = 0; j < hoursOp.length; j++) {
//       totalSum += arr[j];
//     }
//
//     arr.push(totalSum);
//     console.log('total sum:', totalSum);
//     return arr;
//   },
//
//   pubList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//
//     var paragraph = document.createElement('p');
//     var liName = document.createTextNode(this.name);
//     paragraph.appendChild(liName);
//     var liStart = document.getElementById('start');
//     liStart.insertBefore(paragraph, document.getElementById('2'));
//
//     for (var i = 0; i < hoursOp.length; i++){
//       var time = document.createElement('li');
//       time.appendChild(document.createTextNode(hoursOp[i] + ': ' + cookiesPerHour[i] + ' cookies'));
//       document.getElementById('2').appendChild(time);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies'));
//     document.getElementById('2').appendChild(totalCookies);
//   }
// };
//
//
// var storeThree = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//
//   custPerHour: function() {
//     console.log('Seattle Center:', storeThree);
//     return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hoursOp.length; i++){
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale =', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push (Math.round(this.custPerHour() * this.avgSale));
//     }
//
//     var totalSum = 0;
//     for(var j = 0; j < hoursOp.length; j++) {
//       totalSum += arr[j];
//     }
//
//     arr.push(totalSum);
//     console.log('total sum:', totalSum);
//     return arr;
//   },
//   pubList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//
//     var paragraph = document.createElement('p');
//     var liName = document.createTextNode(this.name);
//     paragraph.appendChild(liName);
//     var liStart = document.getElementById('start');
//     liStart.insertBefore(paragraph, document.getElementById('3'));
//
//     for (var i = 0; i < hoursOp.length; i++){
//       var time = document.createElement('li');
//       time.appendChild(document.createTextNode(hoursOp[i] + ': ' + cookiesPerHour[i] + ' cookies'));
//       document.getElementById('3').appendChild(time);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies'));
//     document.getElementById('3').appendChild(totalCookies);
//   }
// };
//
// var storeFour = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//
//   custPerHour: function() {
//     console.log('Capitol Hill:', storeFour);
//     return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hoursOp.length; i++){
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push (Math.round(this.custPerHour() * this.avgSale));
//     }
//
//     var totalSum = 0;
//     for(var j = 0; j < hoursOp.length; j++) {
//       totalSum += arr[j];
//     }
//
//     arr.push(totalSum);
//     console.log('total sum:', totalSum);
//     return arr;
//   },
//   pubList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//
//     var paragraph = document.createElement('p');
//     var liName = document.createTextNode(this.name);
//     paragraph.appendChild(liName);
//     var liStart = document.getElementById('start');
//     liStart.insertBefore(paragraph, document.getElementById('4'));
//
//     for (var i = 0; i < hoursOp.length; i++){
//       var time = document.createElement('li');
//       time.appendChild(document.createTextNode(hoursOp[i] + ': ' + cookiesPerHour[i] + ' cookies'));
//       document.getElementById('4').appendChild(time);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies'));
//     document.getElementById('4').appendChild(totalCookies);
//   }
// };
//
//
// var storeFive = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//
//   custPerHour: function() {
//     console.log('Alki:', storeFive);
//     return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//
//   cookiesPerHour: function() {
//     var arr = [];
//     for (var i = 0; i < hoursOp.length; i++) {
//       console.log('custPerHour =' , this.custPerHour());
//       console.log('this.avgSale = ', this.avgSale);
//       console.log(this.custPerHour() * this.avgSale);
//       arr.push (Math.round(this.custPerHour() * this.avgSale));
//     }
//
//     var totalSum = 0;
//     for(var j = 0; j < hoursOp.length; j++) {
//       totalSum += arr[j];
//     }
//
//     arr.push(totalSum);
//     console.log('total sum:', totalSum);
//     return arr;
//   },
//   pubList: function() {
//     var cookiesPerHour = this.cookiesPerHour();
//
//     var paragraph = document.createElement('p');
//     var liName = document.createTextNode(this.name);
//     paragraph.appendChild(liName);
//     var liStart = document.getElementById('start');
//     liStart.insertBefore(paragraph, document.getElementById('5'));
//
//     for (var i = 0; i < hoursOp.length; i++){
//       var time = document.createElement('li');
//       time.appendChild(document.createTextNode(hoursOp[i] + ': ' + cookiesPerHour[i] + ' cookies'));
//       document.getElementById('5').appendChild(time);
//     }
//     var totalCookies = document.createElement('li');
//     totalCookies.appendChild(document.createTextNode('Total: ' + cookiesPerHour[15] + ' cookies'));
//     document.getElementById('5').appendChild(totalCookies);
//   }
// };
//
// storeOne.pubList();
// storeTwo.pubList();
// storeThree.pubList();
// storeFour.pubList();
// storeFive.pubList();
