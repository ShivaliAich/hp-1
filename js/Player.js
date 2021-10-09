class Player{
    constructor (){
        this.name = null;
        this.character = null;
        this.score = 0;
        this.end = null;
        this.index = null;
    }
    readPlayerCount(){
      database.ref("playerCount").on('value',(data)=>{playerCount = data.val()});
    }
    updatePlayerCount(count){
        database.ref("/").update({playerCount: count});
    }
    updatePlayerInfo(){
        database.ref("players/player"+ this.index).set
        ({name : this.name,
        character : this.character,
        score : this.score});
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}