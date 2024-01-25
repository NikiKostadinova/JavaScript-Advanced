class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.space == this.wines.length) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {

        const wine = this.wines.find(w => w.wineName == wineName);

        if (wine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid == true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {

        const wine = this.wines.find(w => w.wineName == wineName);
        const wineIndex = this.wines.findIndex(w => w.wineName == wineName);

        if(wine == undefined){
            throw new Error("The wine, you're looking for, is not found.");
        }
        if(wine.paid == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

       this.wines.splice(wineIndex, 1);

        return `You drank a bottle of ${wineName}.`

    }

    cellarRevision(wineType) {

        if(wineType == undefined){

            let winesInfo = [];
            let emptySlots = this.space - this.wines.length;
            winesInfo.push(`You have space for ${ emptySlots } bottles more.`);
            winesInfo.push(`You paid ${this.bill}$ for the wine.`);

            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));

            for(const wine of this.wines){

                if(wine.paid == true){

                winesInfo.push(`${wine.wineName} > ${wine.wineType} - Has Paid.`);
                }else if(wine.paid == false){
                winesInfo.push(`${wine.wineName} > ${wine.wineType} - Not Paid.`);
                }
            }

            return winesInfo.join('\n');

        }else{

            const type = this.wines.find(t => t.wineType == wineType);

            if(type == undefined){
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            let typeInfo = [];

             for(const wine of this.wines){

                if(wine.wineType == wineType){

                    if(wine.paid == true){

                        typeInfo.push(`${wine.wineName} > ${wine.wineType} - Has Paid.`);
                    }else if(wine.paid == false){
                        typeInfo.push(`${wine.wineName} > ${wine.wineType} - Not Paid.`);
                    }

                }
             }

            return typeInfo.join('\n');

            
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());




