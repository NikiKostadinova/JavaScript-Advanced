class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) == false) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(a => a.articleName === articleName);
        let model = articleModel.toLowerCase();

        if (article == undefined) {
            this.listOfArticles.push({ model, articleName, quantity });
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        } else {

            // const artModel = this.listOfArticles.find(m => m.model === articleModel);

            if (article.model !== articleModel) {

                
                this.listOfArticles.push({ model, articleName, quantity });
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            } else {

                article.quantity += quantity;
            }
        }
    }

    inviteGuest(guestName, personality) {

        let points = 0;
        switch (personality) {
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250;
                break;
            default:
                points = 50;
                break;
        }
        const guest = this.guests.find(g => g.guestName === guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        } else {

            this.guests.push({
                guestName,
                points,
                purchaseArticle: 0
            });

            return `You have successfully invited ${guestName}!`
        }

    }

    buyArticle(articleModel, articleName, guestName) {

        const artName = this.listOfArticles.find(n => n.articleName === articleName);
        const guestN = this.guests.find(g => g.guestName === guestName);

        if (artName == undefined || artName.model !== articleModel) {
            throw new Error('This article is not found.');
        }
        if (artName.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        if (guestN == undefined) {
            return 'This guest is not invited.';
        }

        if (guestN.points >= this.possibleArticles[articleModel]) {

            guestN.points -= this.possibleArticles[articleModel];
            artName.quantity--;
            guestN.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

        } else {

            return 'You need to more points to purchase the article.'
        }


    }

    showGalleryInfo(criteria) {

        if (criteria === 'article') {

           
            let artList = [];
            artList.push('Articles information:');

            for (const art of this.listOfArticles) {

                let artInfo = Object.values(art);
                artList.push(`${artInfo[0]} - ${artInfo[1]} - ${artInfo[2]}`);
            }

            return artList.join('\n');

        } else if (criteria === 'guest') {

            
            let guestList = [];
            guestList.push('Guests information:');

            for (const guest of this.guests) {

                let guestInfo = Object.values(guest);
                guestList.push(`${guestInfo[0]} - ${guestInfo[2]}`);
            }

            return guestList.join('\n');
        }

    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



