class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let inPlayers = [];
        for (const player of footballPlayers) {

            let [playerName, age, plValue] = player.split('/');
            age = Number(age);
            plValue = Number(plValue);

            const footballPlayer = this.invitedPlayers.find(f => f.playerName === playerName);
            
            if (footballPlayer == undefined) {

                this.invitedPlayers.push({
                    playerName,
                    age,
                    plValue
                });

                if(inPlayers.includes(playerName) === false){
                inPlayers.push(playerName);
                }
            } else {

                if (footballPlayer.plValue < plValue) {

                    footballPlayer.plValue = plValue;
                }
            }
        }
        return `You successfully invite ${inPlayers.join(', ')}.`


    }

    signContract(selectedPlayer) {

        let [playerName, offer] = selectedPlayer.split('/');
        offer = Number(offer);
        const footballPlayer = this.invitedPlayers.find(p => p.playerName === playerName);


        if (footballPlayer == undefined) {
            throw new Error(`${playerName} is not invited to the selection list!`);
        }
        if(offer < footballPlayer.plValue){
            let priceDifference = footballPlayer.plValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
        }

        footballPlayer.plValue = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${offer} million dollars.`

    }

    ageLimit(name, age) {

        const footballPlayer = this.invitedPlayers.find(p => p.playerName === name);
        if (footballPlayer == undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if(footballPlayer.age < age){

            let ageDiff = age - footballPlayer.age;

           
            if(ageDiff < 5){

                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}`;
            }
            if(ageDiff >= 5){

                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        if(footballPlayer.age >= age){
            return `${name} is above age limit!`
        }


    }

    transferWindowResult() {

        let playerList = [];

        playerList.push('Players list:');
        let sortedPlayers = this.invitedPlayers.sort((a,b) => a.playerName.localeCompare(b.playerName));

        for(const playerInfo of sortedPlayers){

            let info = Object.values(playerInfo);
            playerList.push(`Player ${info[0]}-${info[2]}`);
        }

        return playerList.join('\n').trim();

    }


}

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());





