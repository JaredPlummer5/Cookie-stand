// Define the CookieStore constructor function
function CookieStore(location, minimum, maximum, avgSales) {
  this.location = location;
  this.minimum = minimum;
  this.maximum = maximum;
  this.avgSales = avgSales;
  this.array = [];  //7-16. Define the getRandomInt method for the CookieStore prototype to generate a random integer between minimum and maximum.
}

// Define the prototype methods for CookieStore

// Define the getRandomInt method for the CookieStore prototype to generate a random integer between minimum and maximum.
CookieStore.prototype.getRandomInt = function (minimum, maximum) { 
  let result = Math.ceil(Math.random() * (maximum - minimum) + minimum);
  return result;
};
// Define the getAvgSales method for the CookieStore prototype to calculate the average sales for a specific hour using the getRandomInt method.
CookieStore.prototype.getAvgSales = function () {
  let getAvg = this.getRandomInt(this.minimum, this.maximum) * this.avgSales;
  return Math.round(getAvg);
};
// Define the generateSalesData method for the CookieStore prototype to generate sales data for all hours using the getAvgSales method.
CookieStore.prototype.generateSalesData = function () {
  for (let i = 0; i <= 13; i++) {
    this.array.push(this.getAvgSales());
  }
};
// 27-41: Create an array with store hours and create a table header row with hours.
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
// Select the table element and create a new table row element for the store hours.
let TableHours = document.querySelector(".CookieData");
let CookiesAmts = document.createElement("tr");

//Extra th for the format to be correct
let ExtraTh = document.createElement("th");
CookiesAmts.append(ExtraTh);

//Create an extra table header element for formatting purposes and append it to the row. Loop through the hoursOpen array, create a table header element for each hour, and append it to the row.
for (let i = 0; i < hoursOpen.length; i++) {
  let TimeTh = document.createElement("th");
  TimeTh.innerHTML = hoursOpen[i];
  CookiesAmts.append(TimeTh);
}

//Append the header row to the table:
TableHours.append(CookiesAmts);

//Create a table header element for "Daily Totals":
let dailyTotals = document.createElement("th");
dailyTotals.innerHTML += "Daily Totals";
CookiesAmts.append(dailyTotals);
//Define the printToPage method for the CookieStore prototype to create and display a table row with sales data for each hour.
CookieStore.prototype.printToPage = function () {
  let tableOfTimes = document.querySelector(".CookieData");

  let CookiesAmts = document.createElement("tr");
  CookiesAmts.classList.add(this.location);
  let StoreLocation = document.createElement("td");
  StoreLocation.className = "LocationCheck";
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

  let TotalRow = document.createElement("td");
  TotalRow.classList.add(this.location + "totals");
  TotalRow.innerHTML = sum;
  CookiesAmts.append(TotalRow);
  tableOfTimes.append(CookiesAmts);
};

//Create instances of CookieStore for different locations
const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

//Create an array to store all the instances of the CookieStore object.


let stores = [seattle, tokyo, dubai, paris, lima];
let totalPerHourForStores = [];
CookiePerHoursTotal = function (stores) {
  //Define a function to calculate the hourly total sales for all stores and display it in the table footer.
  let totalHourlyLocat = document.createElement("tfoot");
  let totalRow = document.createElement("tr");
  let totalRowHeader = document.createElement("td");
  totalRow.id = "Totals"
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
  // Adding the hourly amts for all of the stores
  let finalTotal = document.createElement("td");
  totalRow.append(finalTotal);
  let sumfinalTotal = 0;
  for (let i = 0; i < totalPerHourForStores.length; i++) {
    sumfinalTotal += totalPerHourForStores[i];
  }
  finalTotal.innerHTML = sumfinalTotal;
  return totalPerHourForStores;
};
// Generate sales data for each city and print it to the page.
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

CookiePerHoursTotal(stores);
// Select the table element and the form element
CookieStore.prototype.update = function () {
    let updateData = document.getElementsByClassName("LocationCheck");
    let updated = false;
    console.log(this.location)
    for (let i = 0; i < stores.length; i++) {
        console.log(stores[i])
        if (updateData[i].innerHTML === this.location) {
            
            console.log("this is the if statement");
            let oldTRintoNewTR = updateData[i].parentElement;
            oldTRintoNewTR.innerHTML = "";
            this.array = [];
            
            this.generateSalesData();
            
            let sameLocation = document.createElement("td");
            sameLocation.innerHTML = this.location; // Set the innerHTML of sameLocation
            sameLocation.className = "LocationCheck";
            oldTRintoNewTR.append(sameLocation); // Append the sameLocation to oldTRintoNewTR
            
            
            for (let j = 0; j < hoursOpen.length; j++) {
                let updateTd = document.createElement("td");
                updateTd.innerHTML = this.array[j];
                oldTRintoNewTR.append(updateTd);
            }
            let sum2 = this.array.reduce(function (a, b) {
                //console.log(a, b);
                return a + b;
            }, 0);
            
            let UpdatedhoulyTotalTd = document.createElement('td');
            UpdatedhoulyTotalTd.innerHTML = sum2;
            oldTRintoNewTR.append(UpdatedhoulyTotalTd);
            
            updated = true;
            
            
        }
    }
    
    
    let table = document.querySelector(".CookieData");
    let oldTotalsRow = table.querySelector("tfoot");
    if (oldTotalsRow) {
        table.removeChild(oldTotalsRow);
    }
};

let table = document.querySelector(".CookieData");
let Submit = document.querySelector("form");

//Add an event listener to the form that triggers when the form is submitted. 
//This event listener prevents the page from refreshing, 
//retrieves the values from the form inputs, and creates a new instance of the CookieStore object. 
//It then updates the table with the new or updated store's data, and recalculates and displays the hourly totals.

// ... (previous code)

Submit.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let location = document.getElementById("Location").value;
    let minForStores = parseInt(document.getElementById("Min").value, 10);
    let maxForStores = parseInt(document.getElementById("Max").value, 10);
    let AvgForStores = parseFloat(document.getElementById("Avg").value);
  
    let existingStore = stores.find(function(store){
        return store.location === location
    });
  
    if (existingStore) {
      existingStore.minimum = minForStores;
      existingStore.maximum = maxForStores;
      existingStore.avgSales = AvgForStores;
      existingStore.array = [];
      existingStore.generateSalesData();
      existingStore.update();
    } else {
      let newStore = new CookieStore(location, minForStores, maxForStores, AvgForStores);
      newStore.generateSalesData();
      newStore.printToPage();
      stores.push(newStore);
    }
  
    let table = document.querySelector(".CookieData");
    let oldTotalsRow = table.querySelector("tfoot");
    if (oldTotalsRow) {
      table.removeChild(oldTotalsRow);
    }
  
    CookiePerHoursTotal(stores);
  });
  



