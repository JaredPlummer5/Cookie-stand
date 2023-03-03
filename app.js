

// let Seattle = {
//     minimum: 23,
//     maximum: 65,
//     avgSales: 6.3,
//     MinAndMaxSeattle: function () {
//         let randomInt = GetAvgSales(stand.minimum, this.maximum, this.avgSales);
//         return randomInt;

//     },
//     array: []
// }

// const Tokyo = {
//     minimum: 3,
//     maximum: 24,
//     avgSales: 1.2,
//     MinAndMaxTokyo: function () {

//         let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
//         return randomInt;

//     },
//     array: []
// }



// const Dubai = {
//     minimum: 11,
//     maximum: 38,
//     avgSales: 3.7,
//     MinAndMaxDubui: function () {

//         let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
//         return randomInt;

//     },
//     array: []
// }


// const Paris = {
//     minimum: 20,
//     maximum: 38,
//     avgSales: 2.3,
//     MinAndMaxParis: function () {

//         let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
//         return randomInt;

//     },
//     array: []
// }

// const Lima = {
//     minimum: 2,
//     maximum: 16,
//     avgSales: 4.6,
//     MinAndMaxLima: function () {

//         let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
//         return randomInt;

//     },
//     array: []
// }

// for (let i = 0; i <= 13; i++) {

//     Seattle.MinAndMaxSeattle();
//     Seattle.array.push(GetAvgSales(Seattle.minimum, Seattle.maximum, Seattle.avgSales));

//     Tokyo.MinAndMaxTokyo();
//     Tokyo.array.push(GetAvgSales(Tokyo.minimum, Tokyo.maximum, Tokyo.avgSales));

//     Dubai.MinAndMaxDubui();
//     Dubai.array.push(GetAvgSales(Dubai.minimum, Dubai.maximum, Dubai.avgSales));

//     Paris.MinAndMaxParis();
//     Paris.array.push(GetAvgSales(Paris.minimum, Paris.maximum, Paris.avgSales));

//     Lima.MinAndMaxLima();
//     Lima.array.push(GetAvgSales(Lima.minimum, Lima.maximum, Lima.avgSales));


// }



//  = function () {
//     
//     stand.
// }

// Define the CookieStore constructor function
function CookieStore(name, minimum, maximum, avgSales) {
    this.name = name;
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

CookieStore.prototype.printToPage = function () {
    const hoursOpen = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
    let TableHours = document.querySelectorAll(".CookieDataTime")
    for (let i = 0; i < TableHours.length; i++) {
        let CookiesAmts = document.createElement('tr');
        CookiesAmts.innerHTML += 
        
    }

    let sum = 0;
    for (let j = 0; j < this.array.length; j++) {
        sum += this.array[j];
    }
    
    let tableOfTimes = document.querySelectorAll(".CookieDataTime");
    for(let i = 0; i < tableOfTimes.length; i++) {
        let sumli = document.createElement('tr');
        sumli.innerHTML = sum;
        ListOfTotals.appendChild(sumli);

    };

    // Create instances of CookieStore
    const seattle = new CookieStore('Seattle', 23, 65, 6.3);
    const tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
    const dubai = new CookieStore('Dubai', 11, 38, 3.7);
    const paris = new CookieStore('Paris', 20, 38, 2.3);
    const lima = new CookieStore('Lima', 2, 16, 4.6);

    // Generate sales data and print to the page for each store
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

    // Generate sales data and print to the page for each store
    generateSalesData();
    printToPage();
}
// tokyo.generateSalesData();
// tokyo.printToPage();

// dubai.generateSalesData();
// dubai.printToPage();

// paris.generateSalesData();
// paris.printToPage();

// lima.generateSalesData();
// lima.printToPage();
// // Printing to the Page
// function PrintingToThePage() {
//     const hoursOpen = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

//     const containers = document.querySelectorAll(".TimesAndCookies");
//     const myStores = [Seattle, Tokyo, Dubai, Paris, Lima];
//     for (let i = 0; i < containers.length; i++) {
//         const listOfTimes = document.createElement('tr');
//         //creates a new ul element using the document.createElement() method and assigns it to a variable named listOfTimes.

//         listOfTimes.id = 'timesForLocation' + i;
//         listOfTimes.className = 'ClassForTimes';
//         //These lines set the id and class attributes of the ul element to 'timesForLocation' and 'ClassForTimes'     respectively.

//         containers[i].appendChild(listOfTimes);

//         for (let j = 0; j < hoursOpen.length; j++) {
//             const timeItem = document.createElement('td');
//             timeItem.innerHTML = hoursOpen[j] + ' ' + myStores[i].array[j];
//             listOfTimes.appendChild(timeItem);
//         }
//     }

//     let sum1 = 0;
//     let sum2 = 0;
//     let sum3 = 0;
//     let sum4 = 0;
//     let sum5 = 0;
//     for (let j = 0; j < Seattle.array.length; j++) {
//         sum1 = sum1 + Seattle.array[j];
//         sum2 += Tokyo.array[j];
//         sum3 += Dubai.array[j];
//         sum4 += Paris.array[j];
//         sum5 += Lima.array[j];

//     }

//     const sumArr = [sum1, sum2, sum3, sum4, sum5];

//     for (let l = 0; l < sumArr.length; l++) {
//         const ListOfTotals = document.querySelector('#timesForLocation' + l);
//         let sumli = document.createElement('li');
//         sumli.innerHTML = 'Total Amount of Cookies: ' + sumArr[l];
//         ListOfTotals.appendChild(sumli);
//     }

// }

// PrintingToThePage();



