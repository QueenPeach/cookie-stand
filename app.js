var locations = [];

var hoursOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, maxCust, minCust, avgCookies) {
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  locations.push(this);
  this.getHourlyCookies();
}

Store.prototype.getCustPerHour = function() {
  return getRandomNum(this.minCust, this.maxCust);
};

Store.prototype.getHourlyCookies = function() {
  for(var i = 0; i < hoursOp.length; i++) {
    this.hourlyCookies.push(Math.floor(this.getCustPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }

  return this.hourlyCookies;
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createTable() {
  var tableEl = document.getElementById('main-table');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hoursOp, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');
  for(var z = 0; z < locations.length; z++) {
    var bodyRow = createTableRow(locations[z].name, locations[z].hourlyCookies, locations[z].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }

  return tbodyEl;
}

function createTableRow(vertHeader, dataPoints, vertFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = vertHeader;
  trEl.appendChild(tdElOne);

  for(var x = 0; x < dataPoints.length; x++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[x];
    trEl.appendChild(tdElTwo);
  }

  var tdElThree = document.createElement('td');
  tdElThree.textContent = vertFooter;
  trEl.appendChild(tdElThree);
  return trEl;
}

createTable();

var formEl = document.getElementById('main-form');

function onSubmit(event) {
  event.preventDefault();
  var formData = {
    nameForm: event.target.nameForm.value,
    minForm: parseInt(event.target.minForm.value),
    maxForm: parseInt(event.target.maxForm.value),
    avgForm: parseFloat(event.target.avgForm.value),
  };
}
