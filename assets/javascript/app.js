var correctAnswers = 0;
var incorrectAnswers = 0;

window.onload = function () {
    $("#display").html("This is where the instructions would go. <button id='start'>Start</button>");
    $("#start").on("click", function () {
        console.log("The start button works");
        question1();
    }
    )
}

function question1() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 1</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

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

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q1Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q1Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q1Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q1Incorrect();
    }
    )
}

function q1Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question2();
    }
    )
}

function q1Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question2();
    }
    )
}

function question2() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 2</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q2Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q2Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q2Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q2Incorrect();
    }
    )
}

function q2Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question3();
    }
    )
}

function q2Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question3();
    }
    )
}

function question3() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 3</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q3Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q3Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q3Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q3Incorrect();
    }
    )
}

function q3Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question4();
    }
    )
}

function q3Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question4();
    }
    )
}

function question4() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 4</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q4Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q4Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q4Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q4Incorrect();
    }
    )
}

function q4Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question5();
    }
    )
}

function q4Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question5();
    }
    )
}

function question5() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 5</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q5Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q5Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q5Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q5Incorrect();
    }
    )
}

function q5Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question6();
    }
    )
}

function q5Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question6();
    }
    )
}

function question6() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 6</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q6Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q6Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q6Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q6Incorrect();
    }
    )
}

function q6Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question7();
    }
    )
}

function q6Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question7();
    }
    )
}

function question7() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 7</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q7Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q7Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q7Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q7Incorrect();
    }
    )
}

function q7Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question8();
    }
    )
}

function q7Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question8();
    }
    )
}

function question8() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 8</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q8Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q8Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q8Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q8Incorrect();
    }
    )
}

function q8Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question9();
    }
    )
}

function q8Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question9();
    }
    )
}

function question9() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 9</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q9Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q9Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q9Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q9Incorrect();
    }
    )
}

function q9Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        question10();
    }
    )
}

function q9Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        ;
        question10();
    }
    )
}

function question10() {
    $("#display").html("<div class='question'><h3><span id='question'>Question 10</span></h3></div><br><div class='answer'><h1><span id='answerOne'>AnswerOne</span></h1></div><div class='answer'><h1><span id='answerTwo'>AnswerTwo</span></h1></div><div class='answer'><h1><span id='answerThree'>AnswerThree</span></h1></div><div class='answer'><h1><span id='answerFour'>AnswerFour</span></h1></div>");

    $("#answerOne").on("click", function () {
        console.log("AnswerOne works");
        q10Correct();
    }
    )

    $("#answerTwo").on("click", function () {
        console.log("AnswerTwo works");
        q10Incorrect();
    }
    )
    $("#answerThree").on("click", function () {
        console.log("AnswerThree works");
        q10Incorrect();
    }
    )
    $("#answerFour").on("click", function () {
        console.log("AnswerFour works");
        q10Incorrect();
    }
    )
}

function q10Correct() {
    correctAnswers++;
    console.log("Correct answers: " + correctAnswers);
    $("#display").html("You have chosen wisely.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        results();
    }
    )
}

function q10Incorrect() {
    incorrectAnswers++;
    console.log("Incorrect answers: " + incorrectAnswers);
    $("#display").html("You have chosen poorly.<button id='start'>Start</button>");
    $("#start").on("click", function () {
        results();
    }
    )
}

function results() {
    $("#display").html("You have chosen " + correctAnswers + " correct answers and " + incorrectAnswers + " incorrect answers. <button id='reset'>Play Again</button>");
    $("#reset").on("click", function () {
        reset();
})}

function reset() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    $("#display").html("This is where the instructions would go. <button id='start'>Start</button>");
    $("#start").on("click", function () {
        console.log("The start button works");
        question1();
    }
    )
}