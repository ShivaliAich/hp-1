class Game{
    constructor(){

    }
    readGameState(){
        database.ref("gameState").on('value',(data)=>{gameState = data.val()});
      }
      updateGameState(count){
          database.ref("/").update({gameState: count});
      }
      start(){
        if(gameState ===0){
            player = new Player();
            player.readPlayerCount();
            form = new Form();
            form.display();
        }
        player1 = createSprite(200,600);
      //player1.addImage("player1", hp1IMG);

      player2 = createSprite(500,600);
      //player2.addImage("player2", hp2IMG);

      player3 = createSprite(700,600);
      //player3.addImage("player3",hp3IMG);

      player4 = createSprite(900,600);
      //player4.addImage("player4", hp4IMG);
     players =[player1,player2,player3,player4];
      }
      
      play(){
        form.hide();
        Player.getPlayerInfo();
        image(bgImg,0,0,1000,600)
        var x =100;
        var y=200;
        var index =0;
        drawSprites();
        for(var plr in allPlayers){
          index = index+1;
          x = 500-allPlayers[plr].distance;
          y=500;

          players[index -1].x = x;
          players[index - 1].y = y;
                       
          if(index === player.index){
                         
          fill("black");
          textSize(25);
          text(allPlayers[plr].name ,x-25,y+25);
        }
        fill("white");
        text(allPlayers[plr].name+ " score : "+allPlayers[plr].score,400,30 );
       }
        }
      
      if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
        player.distance -= 10;
        player.update();
    }
    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
        player.distance += 10
        player.updatePlayerInfo();
    }

     if (frameCount % 20 === 0) {
         goodNPC = createSprite(random(100, 1000), 0, 100, 100);
         goodNPC.velocityY = 6;
         var rand = Math.round(random(1,5));
         switch(rand){
             case 1: goodNPC.addImage("NPC1",unicorn);
             break;
             case 2: fruits.addImage("NPC2", phoenix);
             break;
             case 3: fruits.addImage("NPC3", broom);
             break;
             case 4: fruits.addImage("NPC4", potion);
             break;
             case 5: fruits.addImage("NPC5", felix);
             break;
         }
         pointsGroup.add(goodNPC);
      if(frameCount % 20 === 0){
        badNPC = createSprite(random(100,1000),0,100,100);
        badNPC.velocityY = 5;
        var rand = Math.round(random(1,2));
        switch(rand){
          case 1: badNPC.addImage("npc1",dragon);
          break;
          case 2:badNPC.addImage("npc2",hippogriff);
          break;
        }
        dangerGroup.add(badNPC);
      }
      if(frameCount % 20 === 0 {
        house = createSprite(random(100,1000),0,100,100);
        house.velocityY = 5;
        var rand = Math.round(random(1,4));
        switch(rand){
          case 1: house.addImage("npc3",gryf);
          break;
          case 2:badNPC.addImage("npc4",raven);
          break;
          case 1: house.addImage("npc5",slyther);
          break;
          case 2:badNPC.addImage("npc5",huffle);
          break;
          }
          houseGrp.add(house);
          }
          if (player.index !== null) {


            for (var i = 0; i < pointsGroup.length; i++) { 
              
                if (pointsGroup.get(i).isTouching(players)) { 
                    pointsGroup.get(i).destroy(); 
                    player.score =player.score+1; 
                    player.updatePlayerInfo(); 
                    pointsGroup.get(i).destroy();
                    
                    //textSize(25); fill("white");
                    //textSize(25); fill("white"); 
              //text("Player 1 :" +allPlayers.player1.score,20,100); 
              //text("Player 2 :" +allPlayers.player2.score,20,200); 
                }
              }
                for(var i=0; i< dangerGroup.length;i++){
                    if(dangerGroup.get(i).isTouching(players)){
                      dangerGroup.get(i).destroy();
                      player.score = player.score--;
                      player.updatePlayerInfo();
                      dangerGroup.get(i).destroy();

                    }
                }
                for(var i=0; i< houseGrp.length;i++){
                  if(houseGrp.get(i).isTouching(players)){
                    houseGrp.get(i).destroy();
                    player.score = player.score++;
                    player.updatePlayerInfo();
                    houseGrp.get(i).destroy();

                  }
              }
          textSize(25);
           fill("white");
      text("Player 1 :" +allPlayers.player1.score,20,100); 
      text("Player 2 :" +allPlayers.player2.score,20,300); 
      text("Player 3 :"+allPlayers.player3.score, 20,500);
      text("Player 4 :"+allPlayers.player4.score, 20,700);

}
     }