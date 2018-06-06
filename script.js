
var q = q1;
var ask;

$(document).ready(function() {
    $("#output").html(q.question);
});

function bot(){
    topLevel();
    if(topLevel() === 0){
        $("#output").html(q.answer());
    }
    $('#input').val("");
    var index = Math.floor(Math.random()*questions.length);
    q = questions[index];
    ask = q.question;
    timer(timedQuestion, 3500);
}

function timer(callback, time){
    var t = setTimeout(callback, time);
    $(document).keypress(function(e) {
        clearTimeout(t);
    });
}

function topLevel(){
    var x = 1;
    var input = $("#input").val();
    if(input.toLowerCase().includes("hard") || input.toLowerCase().includes("wet") || input.toLowerCase().includes("long")) {
        $("#output").html("");
        $('#img').attr('src', 'img/twss.gif');
        setTimeout(timedImage, 2500);
    } else if(input.toLowerCase().includes("how are you")){
        $("#output").html('<h1>im doing just fine thanks</h1>');
    } else if(input.toLowerCase().includes("juul") || input.toLowerCase().includes("vape")){
        $("#output").html('<h1>otis, is that you???</h1>');
    } else if(input.toLowerCase().includes("you are ")){
        $("#output").html("");
        $('#img').attr('src', 'img/alrighty.gif');
        setTimeout(timedImage, 2000);
    } else if(input.toLowerCase().includes("your name")){
        $("#output").html('<h1>its literally right above my picture -_- </h1>');
    } else if(input.toLowerCase().includes("your mom") || input.toLowerCase().includes("suck")){
        $("#output").html("");
        $('#img').attr('src', 'img/squeeze.gif');
        setTimeout(timedImage, 2400);
    } else if(input.toLowerCase().includes("backend")){
        $("#output").html('<h1>did you say backend</h1>');
        $('#img').attr('src', 'img/back.png');
        setTimeout(timedImage, 2400);
    } else if(input.toLowerCase().includes("what day")){
        var today = new Date();
        var date = 'today is '+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        $("#output").html('<h1>' + date + '</h1>');
    } else if(input.toLowerCase().includes("what time")) {
        var num = Math.floor(Math.random() * 26) + 14;
        img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        $("#output").html('<h1>time for a meme!</h1><br>' + img);
        setTimeout(timedQuestion, 3000);
    } else if(input.toLowerCase().includes("meme")){
        var num = Math.floor(Math.random() * 26) + 14;
        img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        $("#output").html('<h1>did you say memes???</h1><br>' + img);
        setTimeout(timedQuestion, 3000);
    } else if(input.toLowerCase().includes("hi")) {
        $("#output").html('<h1>yeah hi ok lets move on</h1>');
    } else if(input.toLowerCase().includes("d you know")){
        $("#output").html('<h1>i am all-knowing</h1>');
    } else if(input.toLowerCase().includes("when")) {
        $("#output").html('<h1>when hell freezes over</h1>');
    } else if(input.toLowerCase().includes("hi")) {
        $("#output").html('<h1>yeah hi ok lets move on</h1>');
    } else if(input.toLowerCase().includes("who")) {
            $("#output").html('<h1>your mom</h1>');
    } else if(input.toLowerCase().includes("no i was")) {
        $("#output").html('<h1>yeah well i dont believe you</h1>');
    } else if(input.toLowerCase().includes("what")) {
        var str = input.toLowerCase().split("");
        var res = "";
        for(var i = 0; i < input.length; i++){
            if(i % 2 === 0){
                res += str[i].toUpperCase();
            } else {
                res += str[i];
            }
        }
        res += '?';
        $("#output").html('<h1>'+ res +'</h1>');
        $('#img').attr('src', 'img/sponge.gif');
        setTimeout(timedImage, 3500);
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
