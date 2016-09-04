//create Diner constructor
var Diner = function(name, dishes) {
    this.name = name;
    this.dishes = dishes;
    //add up all the items ordered by a single diner
    this.totalDiner = dishes.reduce(function(sum, dish) {

        return sum + dish.cost;
    }, 0);
    //calculate the tax for the diner
    this.tax = function() {
        return this.totalDiner * 0.05;
    };
    //calculate the tip for the diner
    this.tip = function() {

        return this.totalDiner * 0.15;
    };

};

//create 3 diners 
var Diner1 = new Diner("Tom", [{ item: "pancakes", cost: 10 }, { item: "english muffin", cost: 5 }, { item: "scrambled eggs", cost: 5 }]);
var Diner2 = new Diner("Jenny", [{ item: "waffles", cost: 12 }, { item: "cereal", cost: 3 }, { item: "scrapple", cost: 10 }]);
var Diner3 = new Diner("Timmy", [{ item: "french toast", cost: 15 }, { item: "oatmeal", cost: 10 }, { item: "sausage", cost: 4 }]);

//create bill constructor
var Bill = function(diners) {
    this.diners = diners.map(function(diner) {

        return diner.name; //return the names of each diner on the bill

    });
    //calculate total for all diners
    this.totalBill = diners.reduce(function(sum, diner) {

        return sum + diner.totalDiner + diner.tax();

    }, 0);
    //calculate total tips for all diners
    this.totalTips = diners.reduce(function(sum, diner) {

        return sum + diner.tip();

    }, 0);
    //return the breakdown of payments per diner
    this.breakdown = diners.map(function(diner) {
        return diner.name + "'s total is $" + diner.totalDiner.toFixed(2) + ", tax is $" + diner.tax().toFixed(2) + ", tip is $" + diner.tip().toFixed(2);
    });

};

//create a bill for three diners
var createBill = new Bill([Diner1, Diner2, Diner3]);

//print bill total, total tips for the waitress and a per person breakdown of the bill
console.log("The bill total is $" + createBill.totalBill.toFixed(2));
console.log("The total tip for the bill is $" + createBill.totalTips.toFixed(2));
console.log("Here is a breakdown per person: " + createBill.breakdown);
