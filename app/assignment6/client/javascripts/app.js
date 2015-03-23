// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */ 

// Brandon Huebert
function process(object) {
	"use strict";
	
    $.getJSON(object, function(score) {
        $("main .score").empty();


        $("main .score").append($("<p>")).append("You chose ").append(score.player).append(".");
        $("main .score").append($("<p>")).append("Your opponent chose ").append(score.opponent).append(".");
        $("main .score").append($("<p>")).append("You ").append(score.outcome).append(" this game.");
        $("main .score").append($("<p>")).append("You have a total of ").append(score.wins).append(" wins.");
        $("main .score").append($("<p>")).append("You have a total of ").append(score.losses).append(" losses.");
        $("main .score").append($("<p>")).append("You have a total of ").append(score.ties).append(" ties.");
    });
}

var main = function () {
    "use strict";

    $("#rock").click(function(){
        process("/play/rock");
    });

    $("#paper").click(function(){
        process("/play/paper");
    });

    $("#scissors").click(function(){
        process("/play/scissors");
    });

    $("#lizard").click(function(){
        process("/play/lizard");
    });

    $("#spock").click(function(){
        process("/play/spock");
    });
};

$(document).ready(main);