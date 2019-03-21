var correctAnswers = 0;
var incorrectAnswers = 0;

window.onload = function () {
    $("#question").html("This is where the instructions would go.");
    $("#answer").html("<button id='start'>Play Now</button>");
    $("#start").on("click", function () {
        question1();
    })}

function glowSelected() {
    $("#answerOne").mouseover(function () {
        $("#answerOne").css("background-color", "yellow");
    });
    $("#answerOne").mouseout(function () {
        $("#answerOne").css("background-color", "white");
    });
    $("#answerTwo").mouseover(function () {
        $("#answerTwo").css("background-color", "yellow");
    });
    $("#answerTwo").mouseout(function () {
        $("#answerTwo").css("background-color", "white");
    });
    $("#answerThree").mouseover(function () {
        $("#answerThree").css("background-color", "yellow");
    });
    $("#answerThree").mouseout(function () {
        $("#answerThree").css("background-color", "white");
    });
    $("#answerFour").mouseover(function () {
        $("#answerFour").css("background-color", "yellow");
    });
    $("#answerFour").mouseout(function () {
        $("#answerFour").css("background-color", "white");
    });
}

function question1() {
    $("#question").html("<div class='question'>Add Question 1</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question2();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question2();
        })})
}

function question2() {
    $("#question").html("<div class='question'>Add Question 2</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question3();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question3();
        })})
}

function question3() {
    $("#question").html("<div class='question'>Add Question 3</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question4();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question4();
        })})
}

function question4() {
    $("#question").html("<div class='question'>Add Question 4</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question5();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question5();
        })})
}
function question5() {
    $("#question").html("<div class='question'>Add Question 5</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question6();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question6();
        })})
}

function question6() {
    $("#question").html("<div class='question'>Add Question 6</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question7();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question7();
        })})
}

function question7() {
    $("#question").html("<div class='question'>Add Question 7</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question8();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question8();
        })})
}

function question8() {
    $("#question").html("<div class='question'>Add Question 8</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question9();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question9();
        })})
}

function question9() {
    $("#question").html("<div class='question'>Add Question 9</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question10();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question10();
        })})
}

function question10() {
    $("#question").html("<div class='question'>Add Question 10</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            results();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Results</button>");;
        $("#start").on("click", function () {
            results();
        })})
}

function results() {
    $("#question").html("You have chosen " + correctAnswers + " correct answers and " + incorrectAnswers + " incorrect answers.");
    $("#answer").html("<button id='start'>Play Again</button>");
    $("#start").on("click", function () {
        reset();
    })}

function reset() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    $("#question").html("This is where the instructions would go.");
    $("#answer").html("<button id='start'>Play Now</button>");
    $("#start").on("click", function () {
        question1();
    }
    )
}