// Define the CookieStore constructor function
function CookieStore(location, minimum, maximum, avgSales) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.avgSales = avgSales;

  this.array = [];
}

// Define the prototype methods for CookieStore
CookieStore.prototype.getRandomInt = function (minimum, maximum) {
  let result = Math.ceil(Math.random() * (maximum - minimum) + minimum);
  return result;
};

CookieStore.prototype.getAvgSales = function () {
  let getAvg = this.getRandomInt(this.minimum, this.maximum) * this.avgSales;
  return Math.round(getAvg);
};

CookieStore.prototype.generateSalesData = function () {
  for (let i = 0; i <= 13; i++) {
    this.array.push(this.getAvgSales());
  }
};

const hoursOpen = [
  "6am:",
  "7am:",
  "8am:",
  "9am:",
  "10am:",
  "11am:",
  "12pm:",
  "1pm:",
  "2pm:",
  "3pm:",
  "4pm:",
  "5pm:",
  "6pm:",
  "7pm:",
];
let TableHours = document.querySelector(".CookieData");
let CookiesAmts = document.createElement("tr");

//Extra th for the format to be correct 
let ExtraTh = document.createElement("th");
CookiesAmts.append(ExtraTh);

for (let i = 0; i < hoursOpen.length; i++) {
  let TimeTh = document.createElement("th");
  TimeTh.innerHTML = hoursOpen[i];
  CookiesAmts.append(TimeTh);
}

TableHours.append(CookiesAmts);

let dailyTotals = document.createElement("th");

dailyTotals.innerHTML += "Daily Totals";

CookiesAmts.append(dailyTotals);

CookieStore.prototype.printToPage = function () {
  let tableOfTimes = document.querySelector(".CookieData");

  let CookiesAmts = document.createElement("tr");
  let StoreLocation = document.createElement("td");
  StoreLocation.classList.add("LocationCheck");
  StoreLocation.innerHTML = this.location;
  CookiesAmts.append(StoreLocation);

  for (let i = 0; i < hoursOpen.length; i++) {
    let CookieDataForLocation = document.createElement("td");
    CookieDataForLocation.innerHTML = this.array[i];
    CookiesAmts.append(CookieDataForLocation);
  }

  let sum = this.array.reduce(function (a, b) {
    console.log(a, b);
    return a + b;
  }, 0);
  console.log(sum);

  let TotalRow = document.createElement("td");
  TotalRow.innerHTML = sum;
  CookiesAmts.append(TotalRow);
  tableOfTimes.append(CookiesAmts);
};

// Create instances of CookieStore
const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

let stores = [seattle, tokyo, dubai, paris, lima];

// function storeCheck() {
//   let LocationCheckVar = document.querySelectorAll(".LocationCheck");
//   // console.log(LocationCheckVar.innerHTML);
//   let LocationMap = Array.from(LocationCheckVar);
//   LocationMap = LocationMap.map(function (elem) {
//     console.log(elem);
//     return elem.innerHTML;
//   });
//   // console.log(LocationMap);
//   for (let k = 0; k < stores[k].length; k++) {
//     if (!LocationMap.includes(stores[k].location)) {
//       stores[k].generateSalesData();
//       stores[k].printToPage();
//     }
//   }
// }


CookiePerHoursTotal = function (stores) {
  let totalPerHourForStores = [];
  let totalHourlyLocat = document.createElement("tfoot");
  let totalRow = document.createElement("tr");

  let totalRowHeader = document.createElement("td");
  totalRow.append(totalRowHeader);
  totalRowHeader.innerHTML = "Totals";

  for (let i = 0; i < hoursOpen.length; i++) {
    let sum = 0;
    for (let j = 0; j < stores.length; j++) {
      sum += stores[j].array[i];
    }
    totalPerHourForStores[i] = sum;
    let tFoot = document.createElement("td");
    tFoot.innerHTML = sum;
    totalRow.append(tFoot);
  }

  let TableHours = document.querySelector(".CookieData");
  totalHourlyLocat.append(totalRow);
  TableHours.append(totalHourlyLocat);

  let finalTotal = document.createElement("td");
  totalRow.append(finalTotal);
  let sumfinalTotal = 0;
  for (let i = 0; i < totalPerHourForStores.length; i++) {
    sumfinalTotal += totalPerHourForStores[i];
  }
  finalTotal.innerHTML = sumfinalTotal;
  return totalPerHourForStores;
};

seattle.generateSalesData();
seattle.printToPage();
tokyo.generateSalesData();
tokyo.printToPage();
dubai.generateSalesData();
dubai.printToPage();
paris.generateSalesData();
paris.printToPage();
lima.generateSalesData();
lima.printToPage();

let table = document.querySelector(".CookieData");
let Submit = document.querySelector("form");

Submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let location = document.getElementById("Location").value;
  let minForStores = document.getElementById("Min").value;
  let maxForStores = document.getElementById("Max").value;
  let AvgForStores = document.getElementById("Avg").value;

  console.log(location, minForStores, maxForStores, AvgForStores);

  let memphis = new CookieStore(
    location,
    minForStores,
    maxForStores,
    parseInt(AvgForStores)
  );
  stores.push(memphis);

  memphis.generateSalesData();
  memphis.printToPage();

  let table = document.querySelector(".CookieData");
  let oldTotalsRow = table.querySelector("tfoot");
  if (oldTotalsRow) {
    table.removeChild(oldTotalsRow);
  }

  CookiePerHoursTotal(stores);
  storeCheck();
});

//table.replaceChildren();
