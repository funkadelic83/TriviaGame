var correctAnswers = 0;
var incorrectAnswers = 0;

window.onload = function () {
    $("#question").html("How much do you know about politics? American politics is a circus, and this quiz will test how smart you are about our collective stupidity. Questions will range in difficulty from everyday knowledge to the obscure.");
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
    
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question2();
        })
    }}

    $("#question").html('<div class="question">Which 2010 Senate candidate released a campaign ad that began with the line, "I&#8217;m not a witch. I&#8217;m nothing you&#8217;ve heard. I&#8217;m you."?</div>');
    $("#answer").html("<div class='answer'><span id='answerOne'>Carly Fiorina</span></div><div class='answer'><span id='answerTwo'>Meg Whitman</span></div><div class='answer'><span id='answerThree'>Christine O'Donnell</span></div><div class='answer'><span id='answerFour'>Linda McMahon</span></div>");
    glowSelected();

    $("#answerThree").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html('Correct! Watch the ad here:');
        $("#answer").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/uxJyPsmEask" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><button id="start">Next</button>');
        $("#start").on("click", function () {
            question2();
        })})

    $("#answerTwo, #answerOne, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html('Wrong! But none of us are perfect. It was Christine O&#8217;Donnell. Watch the ad here:');
        $("#answer").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/uxJyPsmEask" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><button id="start">Next</button>');
        $("#start").on("click", function () {
            question2();
        })})
}

function question2() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question3();
        })
    }}
    $("#question").html("<div class='question'>Which US President made the Bush tax cuts permanent?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>George W. Bush</span></div><div class='answer'><span id='answerTwo'>Barack Obama</span></div><div class='answer'><span id='answerThree'>The Bush tax cuts have expired.</span></div><div class='answer'><span id='answerFour'>Donald J. Trump</span></div>");
    glowSelected();

    $("#answerTwo").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! Before the Bush tax cuts, the top marginal tax rate was 39.6 percent. After the cuts, the top rate was 35%. The Bush tax cuts were set to expire in 2010, Barack Obama made the Bush Tax cuts permanent (after a temporary, 2-year extension).");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question3();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question3();
        })})
}

function question3() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question4();
        })
    }}
    $("#question").html("<div class='question'>Add Question 3</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question4();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question4();
        })})
}

function question4() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question5();
        })
    }}
    $("#question").html("<div class='question'>Add Question 4</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question5();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question5();
        })})
}
function question5() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question6();
        })
    }}
    $("#question").html("<div class='question'>Add Question 5</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question6();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question6();
        })})
}

function question6() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question7();
        })
    }}
    $("#question").html("<div class='question'>Add Question 6</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question7();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question7();
        })})
}

function question7() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question8();
        })
    }}
    $("#question").html("<div class='question'>Add Question 7</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question8();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question8();
        })})
}

function question8() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question9();
        })
    }}
    $("#question").html("<div class='question'>Add Question 8</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question9();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question9();
        })})
}

function question9() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question10();
        })
    }}
    $("#question").html("<div class='question'>Add Question 9</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question10();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("You have chosen poorly");
        $("#answer").html("<button id='start'>Next</button>");;
        $("#start").on("click", function () {
            question10();
        })})
}

function question10() {
    var timeLeft = 10;
    $("#timer").html("Time remaining: " + timeLeft);
    var questionTimer = setInterval(questionTimer, 1000);
    function questionTimer() {
        timeLeft--;
        $("#timer").html("Time remaining: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            incorrectAnswers++;
            $("#question").html('<div class="question">Time is up!</div>');
            $("#answer").html('<button id="start">View Results</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                results();
        })
    }}
    $("#question").html("<div class='question'>Add Question 10</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>AnswerOne</span></div><div class='answer'><span id='answerTwo'>AnswerTwo</span></div><div class='answer'><span id='answerThree'>AnswerThree</span></div><div class='answer'><span id='answerFour'>AnswerFour</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("You have chosen wisely");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            results();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
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