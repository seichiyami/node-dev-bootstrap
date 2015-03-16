var http = require("http"),
    server,
    score,
    randomnum,
    opponent;

score = 
{
	outcome: "win",
	wins: 0,
	losses: 0,
	ties: 0
}

server = http.createServer(function (req, res) {
	randomnum = Math.floor(Math.random() * 5);
	opponent = "";

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

	res.writeHead(200, {"Content-Type": "application/json"});

    if (req.url === "/play/rock"){
    	//res.write("You chose rock.\n");
    	if (opponent === "lizard"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "scissors"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "rock"){
    		score.outcome = "tie";
    		score.ties += 1;
    	} else{
    		score.outcome = "loss";
    		score.losses += 1;
    	}
    } else if (req.url === "/play/paper"){
    	//res.write("You chose paper.\n");
    	if (opponent === "rock"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "spock"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "paper"){
    		score.outcome = "tie";
    		score.ties += 1;
    	} else{
    		score.outcome = "loss";
    		score.losses += 1;
    	}
    } else if (req.url === "/play/scissors"){
    	//res.write("You chose scissors.\n");
    	if (opponent === "paper"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "lizard"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "scissors"){
    		score.outcome = "tie";
    		score.ties += 1;
    	} else{
    		score.outcome = "loss";
    		score.losses += 1;
    	}
    } else if (req.url === "/play/lizard"){
    	//res.write("You chose lizard.");
    	if (opponent === "spock"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "paper"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "lizard"){
    		score.outcome = "tie";
    		score.ties += 1;
    	} else{
    		score.outcome = "loss";
    		score.losses += 1;
    	}
    } else if (req.url === "/play/spock"){
    	//res.write("You chose spock.\n");
    	if (opponent === "scissors"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "rock"){
    		score.outcome = "win";
    		score.wins += 1;
    	} else if (opponent === "spock"){
    		score.outcome = "tie";
    		score.ties += 1;
    	} else{
    		score.outcome = "loss";
    		score.losses += 1;
    	}
    }
    //res.write("Your opponent chose " + opponent + ".\n");
    res.write(JSON.stringify(score));
    res.end();

    console.log(score);
});

server.listen(3000);

console.log("Server listening on port 3000");

//used http://www.javascriptkit.com/javatutors/randomnum.shtml