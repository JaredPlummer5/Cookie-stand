function getRandomInt(minimum, maximum) {
    let result = Math.ceil(Math.random() * (maximum - minimum) + minimum);
    return result;
}

function GetAvgSales(minimum, maximum, avgSales) {
    let getAvg = getRandomInt(minimum, maximum) * avgSales;
    return Math.round(getAvg);

}

let Seattle = {
    minimum: 23,
    maximum: 65,
    avgSales: 6.3,
    MinAndMaxSeattle: function () {
        let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
        return randomInt;

    },
    array: []
}

const Tokyo = {
    minimum: 3,
    maximum: 24,
    avgSales: 1.2,
    MinAndMaxTokyo: function () {

        let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
        return randomInt;

    },
    array: []
}



const Dubai = {
    minimum: 11,
    maximum: 38,
    avgSales: 3.7,
    MinAndMaxDubui: function () {

        let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
        return randomInt;

    },
    array: []
}


const Paris = {
    minimum: 20,
    maximum: 38,
    avgSales: 2.3,
    MinAndMaxParis: function () {

        let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
        return randomInt;

    },
    array: []
}

const Lima = {
    minimum: 2,
    maximum: 16,
    avgSales: 4.6,
    MinAndMaxLima: function () {

        let randomInt = GetAvgSales(this.minimum, this.maximum, this.avgSales);
        return randomInt;

    },
    array: []
}

for (let i = 0; i <= 13; i++) {

    Seattle.MinAndMaxSeattle();
    Seattle.array.push(GetAvgSales(Seattle.minimum, Seattle.maximum, Seattle.avgSales));

    Tokyo.MinAndMaxTokyo();
    Tokyo.array.push(GetAvgSales(Tokyo.minimum, Tokyo.maximum, Tokyo.avgSales));

    Dubai.MinAndMaxDubui();
    Dubai.array.push(GetAvgSales(Dubai.minimum, Dubai.maximum, Dubai.avgSales));

    Paris.MinAndMaxParis();
    Paris.array.push(GetAvgSales(Paris.minimum, Paris.maximum, Paris.avgSales));

    Lima.MinAndMaxLima();
    Lima.array.push(GetAvgSales(Lima.minimum, Lima.maximum, Lima.avgSales));


}


// Printing to the Page

let Seat = document.querySelectorAll(".Seattle");
let Tok = document.querySelectorAll(".Tokyo");
let Dub = document.querySelectorAll(".Dubai");
let Par = document.querySelectorAll(".Paris");
let Lim = document.querySelectorAll(".Lima");



for (let k = 0; k < Seat.length; k++) {
    Seat[k].innerHTML += Seattle.array[k] + " Cookies";
    Tok[k].innerHTML += Tokyo.array[k] + " Cookies";
    Dub[k].innerHTML += Dubai.array[k] + " Cookies";
    Par[k].innerHTML += Paris.array[k] + " Cookies";
    Lim[k].innerHTML += Lima.array[k] + " Cookies";
    
}


let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;
for (let j = 0; j < Seattle.array.length; j++) {
    sum1 += Seattle.array[j];
    sum2 += Tokyo.array[j]
    sum3 += Dubai.array[j]
    sum4 += Paris.array[j]
    sum5 += Lima.array[j] 
    
}

console.log(sum1)
console.log(sum2)
console.log(sum3)
console.log(sum4)
console.log(sum5)

let total = document.querySelectorAll(".TotalCookie")
const sumArr = [sum1, sum2, sum3, sum4, sum5]

for(let l = 0; l < sumArr.length; l++){

    total[l].innerHTML += sumArr[l]

}






