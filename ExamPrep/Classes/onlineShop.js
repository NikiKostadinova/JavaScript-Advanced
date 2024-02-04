class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {

        const productName = this.products.find(p => p.product === product);

        if (productName == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (productName.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        }

        let dif = minimalQuantity - productName.quantity;
        productName.quantity = minimalQuantity;

        return `You added ${dif} more from the ${product} products.`;
    }

    sellProduct(product) {
        const productName = this.products.find(p => p.product === product);

        if (productName == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        // productName.quantity--;

        const productSale = this.sales.find(p => p.product === product);
        if (productSale == undefined) {
            this.sales.push({
                product,
                quantity: 1
            });
            productName.quantity--;

            return `The ${product} has been successfully sold.`;
        } else {
            productSale.quantity++;
            productName.quantity--;
            return `The ${product} has been successfully sold.`;            
        }
    }

    revision() {

        if(this.sales.length === 0){
            throw new Error('There are no sales today!');
        }
        
        let salesInfo =[];
        salesInfo.push(`You sold ${this.sales.length} products today!`);
        salesInfo.push('Products in the warehouse:');

        for(const product of this.products){

            let productInfo = Object.values(product);
            salesInfo.push(`${productInfo[0]}-${productInfo[1]} more left`);
        }

        return salesInfo.join('\n');

    }

}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());





