// During object literal creation

var brit = {
    name: "Brittney",
    height: 5,
    sport: "gymnastics",
    quote: "Fly high",
    win: function() {
      console.log(this.name + " won the " + this.sport + " event!");
    }
};

brit.win();

// adding a function as a property after the object been created

var rich = { 
    name: "Richard",
    height: 6,
    sport: "snowboarding",
    quote: "Umm have fun"
};

rich.win = function() {
  console.log(this.name + " won the " + this.sport + " event!");
}

rich.win();

// with the loop like they ask in the challenge

var annie = { 
    name: "Annie",
    height: 5,
    sport: "soccer",
    quote: "GOOOOAAALLLLLLLLL"
};

var athletes = [annie];

for (i=0; i<athletes.length; i++) {
  athletes[i].win = function() {
    console.log(this.name + " won the " + this.sport + " event!");
  };
};

annie.win();