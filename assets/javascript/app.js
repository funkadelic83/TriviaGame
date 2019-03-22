var correctAnswers = 0;
var incorrectAnswers = 0;

window.onload = function () {
    $("#question").html("American politics is a circus, and this (completely arbitrary) quiz will test how smart you are about our collective stupidity. Questions will range in difficulty from everyday knowledge to the obscure.");
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
            $("#question").html('<div class="question">Time is up! But none of us are perfect. It was Christine O&#8217;Donnell. Watch the ad here:</div>');
            $("#answer").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/uxJyPsmEask" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><button id="start">Next</button>');
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
            $("#question").html('<div class="question">Time is up! It was Johnson that was allegedly obsessed with his own Johnson. Google it!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question3();
        })
    }}
    $("#question").html("<div class='question'>Which US President was rumored to whip out his member in private meetings?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Donald J. Trump</span></div><div class='answer'><span id='answerTwo'>Lyndon B. Johnson</span></div><div class='answer'><span id='answerThree'>Herbert Hoover</span></div><div class='answer'><span id='answerFour'>Ronald Reagan</span></div>");
    glowSelected();

    $("#answerTwo").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! Johnson was allegedly obsessed with his own Johnson. Google it!");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question3();
        })})

    $("#answerOne, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Incorrect! It was Johnson that was allegedly obsessed with his own Johnson. Google it!");
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
            $("#question").html('<div class="question">Time is up! It was Jimmy McMillan. The rent is too damn high!</div>');
            $("#answer").html("<iframe src='https://giphy.com/embed/7UTzst0kIhfiM' width='480' height='327' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><br><button id='start'>Next</button>");
            $("#timer").html('');
            $("#start").on("click", function () {
                question4();
        })
    }}
    $("#question").html("<div class='question'>Who is the founder if the 'Rent is Too Damn High' party?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Jesse Ventura</span></div><div class='answer'><span id='answerTwo'>Andrew Yang</span></div><div class='answer'><span id='answerThree'>John McAfee</span></div><div class='answer'><span id='answerFour'>Jimmy McMillan</span></div>");
    glowSelected();

    $("#answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! The rent is too damn high!");
        $("#answer").html("<iframe src='https://giphy.com/embed/7UTzst0kIhfiM' width='480' height='327' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><br><button id='start'>Next</button>");
        $("#start").on("click", function () {
            question4();
        })})

    $("#answerTwo, #answerThree, #answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Incorrect! It was Jimmy McMillan. The rent is too damn high!");
        $("#answer").html("<iframe src='https://giphy.com/embed/7UTzst0kIhfiM' width='480' height='327' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><br><button id='start'>Next</button>");;
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
            $("#question").html('<div class="question">Time is up! Andrew Yang will debate Ben Shapiro about circumcision on Sunday. Why tho??!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question5();
        })
    }}
    $("#question").html("<div class='question'>Which 2020 presidential candidate will debate Ben Shapiro about circumcision?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Andrew Yang</span></div><div class='answer'><span id='answerTwo'>Bernie Sanders</span></div><div class='answer'><span id='answerThree'>John Hickenlooper</span></div><div class='answer'><span id='answerFour'>Jay Inslee</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! Andrew Yang will debate Ben Shapiro about --circumcision??! What is wrong with this world?");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question5();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Incorrect. Andrew Yang will debate Ben Shapiro about circumcision on Sunday. Why tho??!");
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
            $("#question").html('<div class="question">Time is up! It was Brian Kemp.</div>');
            $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/4ABRz_epvic' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");
            $("#timer").html('');
            $("#start").on("click", function () {
                question6();
        })
    }}
    $("#question").html("<div class='question'>Which Republican Governor jokingly threatened a teen with a shotgun in a campaign ad in 2018?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Ron DeSantis</span></div><div class='answer'><span id='answerTwo'>Brian Kemp</span></div><div class='answer'><span id='answerThree'>Brad Little</span></div><div class='answer'><span id='answerFour'>Matt Bevin</span></div>");
    glowSelected();

    $("#answerTwo").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! It was Brian Kemp.");
        $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/4ABRz_epvic' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");
        $("#start").on("click", function () {
            question6();
        })})

    $("#answerOne, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! It was Brian Kemp.");
        $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/4ABRz_epvic' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");;
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
            $("#question").html('<div class="question">Time is up! It was US Border Patrol that sponsored a NASCAR team to help with recruitment -but they failed to meet their recruitment goals. Nothing stops border crossers like driving around in a circle really fast!</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question7();
        })
    }}
    $("#question").html("<div class='question'>Which US law enforcement agency spent $4 million of taxpayer money to sponsor a NASCAR team?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>The Drug Enforcement Agency</span></div><div class='answer'><span id='answerTwo'>The FBI</span></div><div class='answer'><span id='answerThree'>US Border Patrol</span></div><div class='answer'><span id='answerFour'>The Georgia State Police Department</span></div>");
    glowSelected();

    $("#answerThree").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! Border Patrol sponsored a NASCAR team to help with recruitment, but failed to meet their recruitment goals. Nothing stops border crossers like driving around in a circle really fast!");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question7();
        })})

    $("#answerTwo, #answerOne, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! It was US Border Patrol that sponsored a NASCAR team to help with recruitment -but they failed to meet their recruitment goals. Nothing stops border crossers like driving around in a circle really fast!");
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
            $("#question").html('<div class="question">Time is up! According to the Brennan Center for justice, 11% of eligible voters do not have a valid government-issued ID. Voter ID laws could make it difficult for these people to vote.</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question8();
        })
    }}
    $("#question").html("<div class='question'>What percentage of eligible voters do not have a government-issued photo ID?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>3%</span></div><div class='answer'><span id='answerTwo'>5%</span></div><div class='answer'><span id='answerThree'>8%</span></div><div class='answer'><span id='answerFour'>11%</span></div>");
    glowSelected();

    $("#answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! According to the Brennan Center for justice, 11% of eligible voters do not have a valid government-issued ID. Voter ID laws could make it difficult for these people to vote.");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question8();
        })})

    $("#answerTwo, #answerThree, #answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! According to the Brennan Center for Justice, 11% of eligible voters do not have a valid government-issued ID. Voter ID laws could make it difficult for these people to vote.");
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
            $("#question").html('<div class="question">Time is up! It was Rick Perry, who released his infamous ad, "Strong". Weak, Rick!</div>');
            $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/kxzONeK1OwQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");
            $("#timer").html('');
            $("#start").on("click", function () {
                question9();
        })
    }}
    $("#question").html("<div class='question'>Which poltician released an ad complaining that gay people can openly serve in the military, but children aren't allowed to pray in schools?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Rick Perry</span></div><div class='answer'><span id='answerTwo'>Michelle Bachmann</span></div><div class='answer'><span id='answerThree'>Mike Pence</span></div><div class='answer'><span id='answerFour'>Mike Huckabee</span></div>");
    glowSelected();

    $("#answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! It was Rick Perry, who released his infamous ad, 'Strong'. Weak, Rick!");
        $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/kxzONeK1OwQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");
        $("#start").on("click", function () {
            question9();
        })})

    $("#answerTwo, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! It was Rick Perry, who released is infamous ad, 'Strong'. Weak, Rick!");
        $("#answer").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/kxzONeK1OwQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><button id='start'>Next</button>");;
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
            $("#question").html('<div class="question">Time is up! It was Rick Santorum.</div>');
            $("#answer").html('<button id="start">Next</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                question10();
        })
    }}
    $("#question").html("<div class='question'>Which US politician claimed that rape victims should make the best of their situationn and carry the baby to term -because a baby -even from rape -is a 'gift from God'?</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Mike Pence</span></div><div class='answer'><span id='answerTwo'>Mike Huckabee</span></div><div class='answer'><span id='answerThree'>Todd Akin</span></div><div class='answer'><span id='answerFour'>Rick Santorum</span></div>");
    glowSelected();

    $("#answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! It was Rick Santorum.");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            question10();
        })})

    $("#answerTwo, #answerThree, #answerOne").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! It was Rick Santorum.");
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
            $("#question").html('<div class="question">Time is up! It was Jimmy Carter, who lost his second term to Ronald Reagan.</div>');
            $("#answer").html('<button id="start">View Results</button>');
            $("#timer").html('');
            $("#start").on("click", function () {
                results();
        })
    }}
    $("#question").html("<div class='question'>After initially refusing to debate his opponent, this Democratic presidential candidate eventually agreed to only one debate -then lost the election.</div>");
    $("#answer").html("<div class='answer'><span id='answerOne'>Al Gore</span></div><div class='answer'><span id='answerTwo'>Jimmy Carter</span></div><div class='answer'><span id='answerThree'>Dennis Kucinich</span></div><div class='answer'><span id='answerFour'>Michael Dukakis</span></div>");
    glowSelected();

    $("#answerTwo").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        correctAnswers++;
        $("#question").html("Correct! It was Jimmy Carter, who lost his second term to Ronald Reagan.");
        $("#answer").html("<button id='start'>Next</button>");
        $("#start").on("click", function () {
            results();
        })})

    $("#answerOne, #answerThree, #answerFour").on("click", function () {
        clearInterval(questionTimer);
        $("#timer").html('');
        incorrectAnswers++;
        $("#question").html("Wrong! It was Jimmy Carter, who lost his second term to Ronald Reagan.");
        $("#answer").html("<button id='start'>Results</button>");;
        $("#start").on("click", function () {
            results();
        })})
}

function results() {
    $("#question").html("You have chosen " + correctAnswers + " correct answers and " + incorrectAnswers + " incorrect answers. Your score is " + (correctAnswers/10)*100 + "%. <br>");
    $("#answer").html("<button id='start'>Play Again</button>");
    $("#start").on("click", function () {
        correctAnswers = 0;
        incorrectAnswers = 0;
        reset();
    })}

function reset() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    $("#question").html("American politics is a circus, and this (completely arbitrary) quiz will test how smart you are about our collective stupidity. Questions will range in difficulty from everyday knowledge to the obscure.");
    $("#answer").html("<button id='start'>Play Now</button>");
    $("#start").on("click", function () {
        question1();
    })}