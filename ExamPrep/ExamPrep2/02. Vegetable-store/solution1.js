class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        let addedVegs = [];
        for (const vegetagle of vegetables) {

            let [type, quantity, price] = vegetagle.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            const veg = this.availableProducts.find(v => v.type == type);

            if (veg == undefined) {

                this.availableProducts.push({ type, quantity, price });
                addedVegs.push(type);
            } else {

                veg.quantity += quantity;

                if (veg.price < price) {
                    veg.price = price;
                }
            }
        }

        return `Successfully added ${addedVegs.join(', ')}`;

    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0;

        for (const vegetable of selectedProducts) {

            let [type, quantity] = vegetable.split(' ');
            quantity = Number(quantity);
            const veg = this.availableProducts.find(v => v.type == type);


            if (veg == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`);
            }
            if (veg.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}`);
            }

            totalPrice += quantity * veg.price;
            veg.quantity -= quantity;

        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {

        const veg = this.availableProducts.find(v => v.type == type);
        if (veg == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (veg.quantity < quantity) {
            veg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        veg.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`;

    }

    revision() {

        console.log('Available vegetables:');
        this.availableProducts.sort((a, b) => a.price - b.price);

        for (const vegie of this.availableProducts) {

            let veg = Object.values(vegie);
            console.log(`${veg[0]}-${veg[1]}-$${veg[2]}`);
        }

        console.log(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
    }


}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta,Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision()); 