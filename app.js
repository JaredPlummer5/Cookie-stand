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


const hoursOpen = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:',   '6pm:', '7pm:'];
let TableHours = document.querySelector(".CookieData");
let CookiesAmts = document.createElement('tr');


//Extra th for the format to be correct
let ExtraTh = document.createElement("th")
CookiesAmts.append(ExtraTh);

for (let i = 0; i < hoursOpen.length; i++) {

    let TimeTh = document.createElement("th");
    TimeTh.innerHTML = hoursOpen[i];
    CookiesAmts.append(TimeTh);

}

TableHours.append(CookiesAmts);

let dailyTotals = document.createElement("th");

dailyTotals.innerHTML += "Daily Totals"

CookiesAmts.append(dailyTotals);





CookieStore.prototype.printToPage = function () {

    let TableHours = document.querySelector(".CookieData");
    let CookiesAmts = document.createElement('tr');

    let Location1 = document.createElement("td");
    Location1.innerHTML = this.location
    CookiesAmts.append(Location1);



    for (let i = 0; i < hoursOpen.length; i++) {

        let CookieDataForLocation = document.createElement("td");
        CookieDataForLocation.innerHTML = CookieDataForLocation.innerHTML + this.array[i];
        CookiesAmts.append(CookieDataForLocation);

    }

    let sum = 0;
    for (let j = 0; j < this.array.length; j++) {
        sum += this.array[j];
    }

    let TotalRow = document.createElement("td");
    TotalRow.innerHTML = sum;
    CookiesAmts.append(TotalRow);
    TableHours.append(CookiesAmts);

    let tableOfTimes = document.querySelector(".CookieData");

    for (let i = 0; i < tableOfTimes.length; i++) {
        sum.innerHTML = sum;
        let sumTr = document.createElement('tr');
        ListOfTotals.appendChild(sumTr);

    }



}
// Create instances of CookieStore
const seattle = new CookieStore('Seattle', 23, 65, 6.3);
const tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
const dubai = new CookieStore('Dubai', 11, 38, 3.7);
const paris = new CookieStore('Paris', 20, 38, 2.3);
const lima = new CookieStore('Lima', 2, 16, 4.6);

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


CookiePerHoursTotal = function () {
    let totalPerHourForStores = [];
    let totalHourlyLocat = document.createElement("tfoot");
    let totalRow = document.createElement("tr");

    let totalRowHeader = document.createElement("td");
    totalRow.append(totalRowHeader);
    totalRowHeader.innerHTML = "Totals";

    for (let i = 0; i < hoursOpen.length; i++) {

        let sum = seattle.array[i] + paris.array[i] + dubai.array[i] + tokyo.array[i] + lima.array[i];
        totalPerHourForStores.push(sum);
        let tFoot = document.createElement("td");
        tFoot.innerHTML = sum;
        totalRow.append(tFoot); // append td element to tr element

    }

    let TableHours = document.querySelector(".CookieData");
    totalHourlyLocat.append(totalRow); // append tr element to tfoot element
    TableHours.append(totalHourlyLocat);

    let finalTotal = document.createElement('td');
    totalRow.append(finalTotal);
    let sumfinalTotal = 0;
    for (let i = 0; i < totalPerHourForStores.length; i++) {
        sumfinalTotal += totalPerHourForStores[i];
    }
    finalTotal.innerHTML = sumfinalTotal;
    return totalPerHourForStores;
};

CookiePerHoursTotal();



