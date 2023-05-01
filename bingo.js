bingoArray=[];
spaces = [
  "Ned is spoken to or mentioned but never seen",
  "Someone challenges Nancy to a game",
  "Food or drink-based puzzle/minigame",
  "Nancy inexplicably has a friend in the area",
  "Friend of Nancy is forced to do something they did not want to do",
  "Sonny Joon was here",
  "Dated technology that was cutting-edge when the game was made",
  "Somebody is wearing a mask in public",
  "The Hardy Boys appear",
  "Moon logic inventory puzzle",
  "Nancy's Dad is okay with this",
  "Nancy's Dad is not okay with this",
  "Language is somehow a puzzle",
  "Dress up minigame",
  "Nancy has a friend of a friend of a friend of a friend...",
  "Supernatural thing turns out to be Scooby Doo villainy",
  "Grue and Avery actively hate a puzzle or minigame",
  "Avery and Grue come up with new Nancy Drew lore",
  "Avery and Grue check a guide and are still confused",
  "Game Over that is not caused by Nancy's death or serious injury",
  "Phone number begins with 555",
  "Nancy intrudes on family matters",
  "Nancy commits identity theft",
  "Nancy poisons somebody",
  "Nancy Drew must escape a locked room",
  "Nancy Drew robs a grave",
  "Inexplicable secret door, cubby, or safe",
  "Puzzle involves live animals",
  "Nancy Drew breaks into something or damages property",
  "Nancy Drew actually suffers the consequences of her actions",
  "Bess or George are involved",
  "Nancy Drew straight up steals something",
  "Nancy Drew admonishes a character for committing a crime she has previously committed",
  "Locked door that Nancy comments on",
  "Something that 100% should be interactive is not even worth Nancy mentioning",
  "Nancy reveals a new talent that we cannot remember",
  "Building ignores OSHA compliance",
  "We play as someone other than Nancy, even if only for a moment",
  "A plot thread is not followed up on when it really should be",
  "Puzzle would be easy if not for the time limit",
  "Puzzle that should have a time limit doesn't",
  "Nancy dies if you do not complete a puzzles",
  "Random garbage is placed in Nancy's pockets",
  "Nancy dies or is hurt in brutal fashion"
];

$bingoBoard = document.querySelector("#BingoCard");
$rowOne = document.querySelector("#Row1");
$rowTwo = document.querySelector("#Row2");
$rowThree = document.querySelector("#Row3");
$rowFour = document.querySelector("#Row4");
$rowFive = document.querySelector("#Row5");

setBoard();

$bingoBoard.addEventListener("click", function(event){
  console.log("Clicked " + event.target.className);
  if(event.target.className == "on") {
    event.target.className = "off";
  }
  else if(event.target.className == "off") {
    event.target.className = "on";
  }
})

function setBoard(){
  for(var i=0; i<25; i++) {
    var space = spaces[Math.floor(Math.random() * spaces.length)];
    checkSpace(space);
    var index = spaces.indexOf(space);
    if(index > -1) {
      spaces.splice(index,1);
    }
    bingoArray.push(space);
  }
  for(var i=0; i<25; i++){
    if(i < 5){
      var $td = document.createElement("td");
      $td.className = "off";
      $td.innerText = bingoArray[i];
      $rowOne.appendChild($td);
    }
    if(i>=5 && i<10){
      var $td = document.createElement("td");
      $td.className = "off";
      $td.innerText = bingoArray[i];
      $rowTwo.appendChild($td);
    }
    if(i>=10 && i<15){
      if(i==12){
        var $td = document.createElement("td");
        $td.className = "on";
        $td.innerText = "FREE SPACE";
        $rowThree.appendChild($td);
      } else {
        var $td = document.createElement("td");
        $td.className = "off";
        $td.innerText = bingoArray[i];
        $rowThree.appendChild($td);
      }
    }
    if(i>=15 && i<20){
      var $td = document.createElement("td");
      $td.className = "off";
      $td.innerText = bingoArray[i];
      $rowFour.appendChild($td);
    }
    if(i>=20 && i<25){
      var $td = document.createElement("td");
      $td.className = "off";
      $td.innerText = bingoArray[i];
      $rowFive.appendChild($td);
    }
  }
}

function checkSpace(space){
  for(var j=0; j<bingoArray.length; j++){
    if(space == bingoArray[j]){
      var space = spaces[Math.floor(Math.random()*spaces.length)];
      checkSpace(space);
    }
  }
}