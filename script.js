
var q = q1;
var ask;

$(document).ready(function() {
    $("#output").html(q.question);
});

function bot(){
    topLevel();
    if(topLevel() === 0){
        $("#output").html(q.answer());
        $('#input').val("");
        q = questions[Math.floor(Math.random()*questions.length)];
        ask = q.question;
        timer(timedQuestion, 2400);
    }
}

function timer(callback, time){
    var t = setTimeout(callback, time);
    $(document).keypress(function(e) {
        clearTimeout(t);
    });
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
    $("#output").html(ask);
}

function timedImage() {
    $('#img').attr('src', 'img/alby.gif');
}


$(document).keypress(function(e) {
    if (e.which === 13) {
        bot();
    }
});
