
var qNum = 0;
var question = '<h1>what is your name?</h1>';

var output = document.getElementById('output');

$(document).ready(function() {
    $("#output").html(question);
});

function timer(time){
    var t = setTimeout(timedQuestion, time);
    $(document).keypress(function(e) {
        clearTimeout(t);
    });
}


function chat() {
    var input = $("#input ").val();
    console.log(input);

    if (qNum === 0) {
        topLevel();
        if(topLevel() === 0){
            $("#output").html('<h1>hello ' + input + '</h1>');
        }
        $('#input').val("");
        question = '<h1>how much of your last assignment did you do?</h1>';
        timer(2400);
    }

    else if (qNum === 1) {
        topLevel();
        if(topLevel() === 0) {
            $("#output").html('<h1>' + input + '? ok that is a 14/15 </h1>');
        }
        $('#input').val("");
        question = '<h1>how would you describe the difficulty of this class?</h1>';
        timer(2400);
    }

    else if (qNum === 2) {
        topLevel();
        if(topLevel() === 0) {
            $("#output").html('<h1>wow sorry to hear that</h1>');
        }
        $('#input').val("");
        question = '<h1>what is your favorite type of meme?</h1>';
        timer(2400);
    }

    else if (qNum === 3) {
        topLevel();
        if(topLevel() === 0){
            if(input.toLowerCase().includes("albinson")){
                $("#output").html('<h1> hey i like albinson memes too!</h1>');
            } else if(input.toLowerCase().includes("memes") || input.includes("ones")) {
                $("#output").html('<h1> i guess ' + input + ' are cool ... i like albinson memes</h1>');
            } else if(input.toLowerCase().includes("meme")) {
                $("#output").html('<h1> i guess ' + input + ' is cool ... i like albinson memes</h1>');
            } else {
                $("#output").html('<h1> i guess ' + input + ' memes are cool ... i like albinson memes</h1>');
            }
        }
        $('#input').val("");
        question = '<h1>how many times have you played slither.io this week?</h1>';
        timer(3500);
    }

    else if (qNum === 4) {
        topLevel();
        if(topLevel() === 0){
            if(input == "0" || input == "none") {
                $("#output").html('<h1>you are defintely lying. even I play slither</h1>');
            } else if(isNaN(input) == false) {
                $("#output").html('<h1>only ' + input + ' times? jasper has played way more than that!</h1>');
            } else {
                $("#output").html('<h1>' + input + '? jasper has played way more than that!</h1>');
            }
        }
        $('#input').val("");
        question = '<h1>have you seen otis recently?</h1>';
        timer(3500);
    }

    else if (qNum === 5) {
        topLevel();
        if(topLevel() === 0){
            if(input.toLowerCase().includes("yes")){
                $("#output").html('<h1>really? then you must have been JUULing with him in the bathroom</h1>');
            }
            else if(input.toLowerCase().includes("no")){
                $("#output").html('<h1>me neither - he is probably JUULing in the bathroom</h1>');
            } else {
                $("#output").html('<h1>well he is defintely vaping</h1>');
            }
        }
        $('#input').val("");
        question = '<h1>who is the worst teacher at berkeley high?</h1>';
        timer(3500);
    }

    else if (qNum === 6) {
        topLevel();
        if(topLevel() === 0){
            if (input.toLowerCase().includes("holston")) {
                $("#output").html('<h1>yes, mr holston is terrible</h1>');
            } else if(input.toLowerCase().includes("you")) {
                $("#output").html('<h1>no, mr holston is definetly worse than me</h1>');
            } else {
                $("#output").html('<h1>you think ' + input + ' is the worst? nah mr holston is</h1>');
            }
        }
        $('#input').val("");
        question = '<h1>what is your favorite website?</h1>';
        timer(3500);
    }

    else if (qNum === 7) {
        topLevel();
        if(topLevel() === 0){
            if(input.toLowerCase() == "cornhub") {
                $("#output").html('<h1>ok here you go: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
            } else {
                $("#output").html('<h1>' + input + '? really? I like this: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
            }
        }
        $('#input').val("");
        question = '<h1>want to see my backend?</h1>';
        timer(5000);
    }


    else if (qNum === 8) {
        topLevel();
        if(topLevel() === 0){
            if(input.toLowerCase() == "yes"){
                $("#output").html('<h1>here you go lol</h1>');
                $('#img').attr('src', 'img/back.png');
            }
            else if(input.yetoLowerCase() == "no"){
                $("#output").html('<h1>here you go anyway lol</h1>');
                $('#img').attr('src', 'img/back.png');

            } else {
                $("#output").html('<h1>well here you go</h1>');
                $('#img').attr('src', 'img/back.png');
            }
        }
        $('#input').val("");
        question = '<h1>want to see some memes?</h1>';
        setTimeout(timedImage, 3000);
        timer(3000);
    }

    else if (qNum === 9) {
        topLevel();
        if(topLevel() === 0){
            if(input.toLowerCase() == "yes"){
                $("#output").html('<h1>ok, then press enter</h1>');
            }
            else if(input.toLowerCase() == "no"){
                $("#output").html('<h1>really? i think you do ... press enter</h1>');
            } else {
                $("#output").html('<h1>press enter</h1>');
            }
        }
        $('#input').val("");
    }

    else if (qNum === 10) {
        var num = Math.floor(Math.random() * 26) + 14;
        var img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        $("#output").html(img);
        $('#input').val("");
        qNum = 9;
    }

}

function topLevel(){
    var x = 1;
    var input = $("#input ").val();
    if(input.toLowerCase().includes("hard") || input.toLowerCase().includes("wet") || input.toLowerCase().includes("long")) {
        $("#output").html("");
        $('#img').attr('src', 'img/twss.gif');
        setTimeout(timedImage, 2400);
    } else if(input.toLowerCase().includes("where")){
        $("#output").html('<h1>your moms house</h1>');
    } else if(input.toLowerCase().includes("when")){
        $("#output").html('<h1>when hell freezes over</h1>');
    } else if(input.toLowerCase().includes("how are you")){
        $("#output").html('<h1>im doing just fine thanks</h1>');
    } else if(input.toLowerCase().includes("you are ")){
        $("#output").html("");
        $('#img').attr('src', 'img/alrighty.gif');
        setTimeout(timedImage, 2000);
    } else if(input.toLowerCase().includes("your mom")){
        $("#output").html("");
        $('#img').attr('src', 'img/squeeze.gif');
        setTimeout(timedImage, 2400);
    } else if(input.toLowerCase().includes("backend")){
        $("#output").html('<h1>did you say backend</h1>');
        $('#img').attr('src', 'img/back.png');
        setTimeout(timedImage, 2400);
    } else if(input.toLowerCase().includes("meme")){
        var num = Math.floor(Math.random() * 26) + 14;
        img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        $("#output").html('<h1>did you say memes???</h1><br>' + img);
        setTimeout(timedQuestion, 2400);
    } else {
        x = 0;
    }
    return x;
}



function timedQuestion() {
    $("#output").html(question);
}

function timedImage() {
    $('#img').attr('src', 'img/alby.gif');
}


$(document).keypress(function(e) {
    if (e.which === 13) {
        chat();
        qNum++;
    }
});
