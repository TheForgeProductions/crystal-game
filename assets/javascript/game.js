let score = 0;
let goal = Math.ceil(Math.random() * 20 + 11);
let valStart = Math.ceil(Math.random() * 4)
let valArr = [1, 3, 5, 10];
let wins = 0;
let losses = 0;
let state = "play";

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#prompter").text("Pick a Crystal");

function shuffle(array) {
    var ctr = array.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
}

$("#goal").text("Goal: " + goal);
$("#score").text("Score: " + score);


$("#reset-button").on("click", function reset(event) {
    event.preventdefault;
    goal = Math.ceil(Math.random() * 20 + 11);
    score = 0;
    $("#goal").text("Goal: " + goal);
    document.getElementById("score").innerHTML = "Score: " + score;
    $("#prompter").text("Pick a Crystal");
    valArr = shuffle(valArr);
    state = "play";
});


function add(val) {
    if (score < goal) {
        score += val;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
};
function check() {
    if (score === goal && state === "play") {
        $("#prompter").text("You've Won!");
        wins++;
        $("#wins").text("Wins: " + wins);
        state = "end";
    }
    else if (score > goal && state === "play") {
        $("#prompter").text("You Lose");
        losses++;
        $("#losses").text("Losses: " + losses)
        state = "end";
    };
}
function reset() {
    goal = Math.ceil(Math.random() * 20 + 11);
    score = 0;
    $("#goal").text("Goal: " + goal);
    document.getElementById("score").innerHTML = "Score: " + score;
    $("#prompter").text("Pick a Crystal");
    valArr = shuffle(valArr);
    state = "play";
};

$("#crystal1").on("click", function (event) {
    event.preventdefault;
    if (state === "end") {
        reset();
        }
    else {
        add(valArr[0]);
        check();
    }});

$("#crystal2").on("click", function (event) {
    event.preventdefault;
    if (state === "end") {
        reset();
        }
    else {
        add(valArr[1]);
        check();
    }});

$("#crystal3").on("click", function (event) {
    event.preventdefault;
    if (state === "end") {
        reset();
        }
    else {
        add(valArr[2]);
        check();
    }});

$("#crystal4").on("click", function (event) {
    event.preventdefault;
    if (state === "end") {
        reset();
        }
    else {
        add(valArr[3]);
        check();
    }});
