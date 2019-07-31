let score = 0;
let goal = Math.ceil(Math.random() * 20 + 11);
let valStart = Math.ceil(Math.random() * 4)
let valArr = [1, 3, 5, 10];
let wins = 0;
let losses = 0;
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

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

$("#goal").text("Your Goal: " + goal);
$("#score").text("Your Score: " + score);

$("#reset-button").on("click", function reset(event) {
    event.preventdefault;
    goal = Math.ceil(Math.random() * 20 + 11);
    score = 0;
    $("#goal").text("Your Goal: " + goal);
    document.getElementById("score").innerHTML = "Your Score: " + score;
    $("#prompter").empty();
    valArr = shuffle(valArr);
});


function add(val) {
    if (score < goal) {
        score += val;
        document.getElementById("score").innerHTML = "Your Score: " + score;
    }
    if (score === goal) {
        $("#prompter").text("You've Won!");
        wins++;
        $("#wins").text("Wins: " + wins);
    }
    else if (score > goal) {
        $("#prompter").text("You Lose");
        losses++;
        $("#losses").text("Losses: " + losses)
    }
};

$("#crystal1").on("click", function (event) {
    event.preventdefault;
    add(valArr[0]);
});

$("#crystal2").on("click", function (event) {
    event.preventdefault;
    add(valArr[1]);
});
$("#crystal3").on("click", function (event) {
    event.preventdefault;
    add(valArr[2]);
});
$("#crystal4").on("click", function (event) {
    event.preventdefault;
    add(valArr[3]);
});