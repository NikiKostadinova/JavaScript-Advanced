class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(array) {

        for (const productInfo of array) {
            let [product, quantity, productTotalPrice] = productInfo.split(' ');
            quantity = Number(quantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {

                if (this.stockProducts.hasOwnProperty(product) === false) {

                    this.stockProducts[product] = quantity;
                } else {

                    this.stockProducts[product] += quantity;
                }

                this.budgetMoney -= productTotalPrice;

                this.history.push(`Successfully loaded ${quantity} ${product}`);
            } else {

                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n');

    }

    addToMenu(meal, neadedProducts, price) {

        if (this.menu.hasOwnProperty(meal) == false) {

            this.menu[meal] = {
                products: neadedProducts,
                price: price
            }

            if (Object.keys(this.menu).length == 1) {

                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else if (Object.keys(this.menu).length > 1 || Object.keys(this.menu).length == 0) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {

            return `The ${meal} is already in the our menu, try something different.`;
        }

    }

    showTheMenu() {

        let arrayMenu = Object.entries(this.menu);
        let arr = [];

        if (arrayMenu.length == 0) {

            return 'Our menu is not ready yet, please come later...';
        } else {

            for (const mealInfo of arrayMenu) {

                let arrayMeal = Object.values(mealInfo[1]);

                arr.push(`${mealInfo[0]} - $ ${arrayMeal[1]}`);
            }

            return arr.join('\n');
        }


    }

    makeTheOrder(meal) {

        if (this.menu.hasOwnProperty(meal) == false) {

            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {


            let productsNeeded = Object.values(this.menu[meal]);
            let productsNeadedInfo = productsNeeded[0];
            let price = productsNeeded[1];

            
            for (const product of productsNeadedInfo) {

                let [productName, quantity] = product.split(' ');
                quantity = Number(quantity);

                if (this.stockProducts.hasOwnProperty(productName) == false) {

                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else {

                    this.stockProducts[productName] = this.stockProducts[productName] - quantity;

                    if (this.stockProducts[productName] < 0) {

                        this.stockProducts[productName] = this.stockProducts[productName] + quantity;

                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

                    }                        
                    
                }

            }

            this.budgetMoney += price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
        }
    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

