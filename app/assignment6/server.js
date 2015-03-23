// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */ 

//Brandon Huebert

var http = require("http"),
	express = require("express"),
	app = express(),
    score = {},
    randomnum,
    opponent;

app.use(express.static(__dirname + "/client"));

score.outcome = "won";
score.wins = 0;
score.losses = 0;
score.ties = 0;
score.opponent = "";
score.player = "";

function playGame(playerChoice) {
    "use strict";

	randomnum = Math.floor(Math.random() * 5);

	if (randomnum === 0){
		opponent = "rock";
	} else if (randomnum === 1){
		opponent = "paper";
	} else if (randomnum === 2){
		opponent = "scissors";
	} else if (randomnum === 3){
		opponent = "lizard";
	} else {
		opponent = "spock";
	}

    score.opponent = opponent;
    score.player = playerChoice;

	if (playerChoice === opponent){
		score.outcome = "tied";
    	score.ties += 1;
	}else if (playerChoice === "rock"){
    	if (opponent === "lizard" || opponent === "scissors"){
    		score.outcome = "won";
    		score.wins += 1;
    	} else{
    		score.outcome = "lost";
    		score.losses += 1;
    	}
    } else if (playerChoice === "paper"){
    	if (opponent === "rock" || opponent === "spock"){
    		score.outcome = "won";
    		score.wins += 1;
    	} else{
    		score.outcome = "lost";
    		score.losses += 1;
    	}
    } else if (playerChoice === "scissors"){
    	if (opponent === "paper" || opponent === "lizard"){
    		score.outcome = "won";
    		score.wins += 1;
    	} else{
    		score.outcome = "lost";
    		score.losses += 1;
    	}
    } else if (playerChoice === "lizard"){
    	if (opponent === "spock" || opponent === "paper"){
    		score.outcome = "won";
    		score.wins += 1;
    	} else{
    		score.outcome = "lost";
    		score.losses += 1;
    	}
    } else if (playerChoice === "spock"){
    	if (opponent === "scissors" || opponent === "rock"){
    		score.outcome = "won";
    		score.wins += 1;
    	} else{
    		score.outcome = "lost";
    		score.losses += 1;
    	}
    }

    console.log(score);
}

// create server
http.createServer(app).listen(3000);

// set up routes
app.get("/play/rock", function(req, res) {
    "use strict";
	playGame("rock");
	res.json(score);
});

app.get("/play/paper", function(req, res) {
    "use strict";
    playGame("paper");
    res.json(score);
});

app.get("/play/scissors", function(req, res) {
    "use strict";
    playGame("scissors");
    res.json(score);
});

app.get("/play/lizard", function(req, res) {
    "use strict";
    playGame("lizard");
    res.json(score);
});

app.get("/play/spock", function(req, res) {
    "use strict";
    playGame("spock");
    res.json(score);
});

console.log("Server listening on port 3000");

//used http://stackoverflow.com/questions/15427220/how-to-handle-post-request-in-node-js
//used http://www.javascriptkit.com/javatutors/randomnum.shtml