bingoArray=[];
spaces = [
    "Non-tank pulls a completely avoidable trash pack",
    "Charlie wipes the raid by attacking Greg or Augusta's keyboard",
    "Tank out-heals at least two of the healers",
    "Katie discovers a new aspect of her abilities by reading a tooltip for the first time",
    "Kyle summons an Earth Elemental and gets yelled at",
    "Someone immediately says 'Rate my transmog' upon being summoned",
    "Josh dives after a piece of gear with Leech",
    "Raid discovers that DPS 'cutoff' numbers are severely inflated",
    "Godawful puns begin going out and never ever stop",
    "10+ DPS apply to group finder when we post 'Healer Only'",
    "Joe uses a bunch of size-increasing buffs and mounts up",
    "Katie starts using 'Reflecting Prism' on the entire raid",
    "Multiple raid members are drinking heavily",
    "Pug DPS outdoes entire guild and leaves after one wipe",
    "Someone's computer/internet explodes but they are still on Discord",
    "Nobody uses the damn guild sign-up sheet on the calendar",
    "Long fight explanation is followed by the word 'SIMPLE!'",
    "Someone who is not participating in the raid decides to begin commentary in Discord",
    "Guild one-shots a boss and then wipes four times on trash immediately afterwards",
    "Somebody in the guild shows up late to the raid and then gets mad when the raid is not moving fast enough",
    "Random PUG has CD Macros",
    "Random PUG has Interrupt Macros",
    "Random PUG has a stupid name like Skilldan, Weedtree, Orcbob, etc",
    "After fight gets explained, someone goes 'OH! So it's just like X from a prior xpac!'",
    "'That reminds me of a hilarious YouTube video! Let me link it in Discord!'",
    "Someone needs a basic function of the game's UI explained to them",
    "Someone goes AFK while fight is explained and subsequently wipes the raid",
    "PUG posts a damage recap after the fight to show off even though they are doing badly",
    "Someone asks for 'Bloodlust' when they already have the debuff",
    "Someone claims to be an expert at a fight and has never downed it",
    "Links a YouTube video explaining the boss fight in the in-game client",
    "Jake exists today",
    "'BRB sandwich' is said",
    "Someone legitimately falls asleep",
    "ALL HAIL THE GOLDEN BANANA!",
    "Someone falls into an avoidable pit and dies outside of a fight",
    "Over 50 members join and leave the raid over the course of the night",
    "PUG player starts talking shit about member of the guild they are running with",
    "PUG decides they are the new raid leader",
    "Demon Hunter crashes into a cliff",
    "Jokes in guild chat bleed into Discord and confuse the shit out of PUGs",
    "Somebody complains about somebody elses spec choices",
    "Wipe happens and then, after a short pause, someone asks 'What the fuck happened?'",
    "PUG sees there is no warlock and leaves due to lack of summons",
    "Dick waving contest regarding prior accomplishments",
    "Somebody complains about not using elixirs and/or food on a pull that doesn't need it",
    "Lust goes out at the wrong time",
    "At least three people manage to see completely different things happening on their screens",
    "Raid member complains that another member of the raid is being carried but there has been no problem",
    "Someone begs for gear that cannot be traded",
    "Someone says they will trade a piece of gear only for it to be soulbound",
    "Someone complains that an uninterruptible mechanic is not being interrupted",
    "One healer has 75% or more of the dispels",
    "One player has 75% or more of the interrupts",
    "Two people try to 'save the raid' and only manage sabotage each other",
    "Someone is obviously gunning for a bingo space",
    "Lower priority DPS asks for or demands a battle rez over higher priority member",
    "PUG is convinced that their cheese strategy would save the day",
    "DPS diva threatens to leave if you don't do something for them",
    "Someone is running that addon that tells you who doesn't have flask/food buffs in chat",
    "Guild pines for missing raid member after a wipe",
    "World of Whorecraft: Illidan's Pillar of Eternity"
]

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